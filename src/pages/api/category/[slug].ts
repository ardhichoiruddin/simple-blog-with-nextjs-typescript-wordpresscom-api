import { NextApiRequest, NextApiResponse } from "next";

import urlApi from "@/utils/urlApi";
import rateLimit from "@/utils/rateLimit";

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 1000,
});

interface DataProps {
  slug: string;
  page: number;
}

const getPostByCategory = ({ slug, page }: DataProps) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${urlApi}/posts?fields=featured_image,id,excerpt,title,date,slug&category=${slug}&page=${page}&number=6`
      );
      const data = await response.json();
      const result = data.posts.map((it: any) => {
        const regex = /<p\b(.*?)(?=\s|>)/g;
        const withEclips = it.excerpt.replace(
          regex,
          `<p class="eclips-text-2-line"$1`
        );
        return {
          image: it.featured_image,
          title: it.title,
          subTitle: withEclips,
          date: it.date,
          slug: it.slug,
        };
      });
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  const query: any = req.query;
  const slug = query.slug;
  const page = query.page;

  try {
    await limiter.check(res, 30, "CACHE_TOKEN");
  } catch {
    return res.status(429).json({ error: "Rate limit exceeded" });
  }

  switch (method) {
    case "GET":
      try {
        const response = await getPostByCategory({
          slug,
          page,
        });
        res.setHeader(
          "Cache-Control",
          "public, max-age=60,s-maxage=100, stale-while-revalidate=59"
        );
        return res.status(200).json(response);
      } catch (err) {
        return res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
    default:
      return res.status(400).json({
        success: false,
        message: "Wrong",
      });
  }
}
