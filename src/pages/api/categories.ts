import { NextApiRequest, NextApiResponse } from "next";

import urlApi from "@/utils/urlApi";

const getCategories = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${urlApi}/categories?fields=ID,name,post_count,slug`
      );
      const data = await response.json();
      resolve(data.categories);
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

  switch (method) {
    case "GET":
      try {
        const response = await getCategories();
        res.setHeader(
          "Cache-Control",
          "public, s-maxage=100, stale-while-revalidate=59"
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
