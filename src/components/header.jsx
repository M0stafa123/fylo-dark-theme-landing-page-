const Header = () => {
  return (
    <header className="header">
      <nav className="flex items-center justify-between md:p-10 mx-auto">
        <div>
          <img src="./images/logo.svg" alt="logo" className="md:w-40 w-20" />
        </div>
        <div>
          <ul className="flex items-center gap-4 md:gap-10">
            <li>Features</li>
            <li>Team</li>
            <li>Sign In</li>
          </ul>
        </div>
      </nav>
      <img
        src="./images/illustration-intro.png"
        alt="intro"
        className=" my-20 mx-auto z-10 relative"
      />
    </header>
  );
};

export default Header;
