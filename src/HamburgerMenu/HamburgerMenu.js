import "./HamburgerMenu.scss";

const HamburgerMenu = (props) => {
  // Toggleling the hamburger menu
  const hamburgerToggler = () => {
    return props.hamburgerToggler();
  };
  return (
    <div className="hamburger-menu" onClick={hamburgerToggler}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HamburgerMenu;
