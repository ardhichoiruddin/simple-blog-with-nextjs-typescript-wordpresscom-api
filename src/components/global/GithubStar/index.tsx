import GitHubButton from "react-github-btn";
import Container from "../Container";

const GithubStar = () => {
  return (
    <Container>
      <div>
        <ul className="flex flex-col sm:flex-row items-center justify-center -m-1">
          <li className="p-1">
            <GitHubButton
              href="https://github.com/ardhichoiruddin"
              data-size="large"
              data-show-count="true"
              aria-label="Follow @ardhichoiruddin on GitHub"
            >
              Follow @ardhichoiruddin
            </GitHubButton>
          </li>
          <li className="p-1">
            <GitHubButton
              href="https://github.com/ardhichoiruddin/simple-blog-with-nextjs-typescript-wordpresscom-api"
              data-size="large"
              data-show-count="true"
              aria-label="Star ardhichoiruddin/simple-blog-with-nextjs-typescript-wordpresscom-api on GitHub"
            >
              Star
            </GitHubButton>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default GithubStar;
