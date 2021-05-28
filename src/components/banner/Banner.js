import Logo from "../logo/Logo";
import "./Banner.css";

function Banner({ title, subTitle }) {
  return (
    <div className="banner">
      <div className="bannerLogo">
        <Logo height="90px" />
      </div>
      <br />
      <h1>{title}</h1>
      <br />
      <p>{subTitle}</p>
    </div>
  );
}

export default Banner;
