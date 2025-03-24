import "./header.css";
import carambarLogo from "/logo-Carambar.png";

export const HeaderLayout = () => {
  return (
    <div className="header-container">
      <img className="header-img" src={carambarLogo} alt="logo carambar" />
    </div>
  );
};
