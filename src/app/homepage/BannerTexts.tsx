import { Container } from "react-bootstrap";
import "./homepage.scss";

type BannerTextsProps = {
  title: string;
  subtitle: string;
  titleclass: string;
};
function BannerTexts({ title, subtitle, titleclass }: BannerTextsProps) {
  return (
    <Container className="bannertexts-container">
      <h1 className={titleclass}>{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </Container>
  );
}

export default BannerTexts;
