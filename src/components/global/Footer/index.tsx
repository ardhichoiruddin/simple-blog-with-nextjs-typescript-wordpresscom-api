import Container from "../Container";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <div className="text-center pb-6 pt-10">
          <span className="text-sm">
            Powered by{" "}
            <a className="underline" href="https://ardhicorp.com">
              ardhicorp.com
            </a>{" "}
            @ {year}
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
