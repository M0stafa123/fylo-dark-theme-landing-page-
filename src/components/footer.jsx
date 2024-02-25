const Footer = () => {
  return (
    <footer className="bg-footerBackground p-4 flex flex-col justify-end pt-96 md:pt-28 box-content md:justify-center px-10 h-[800px]">
      <article className="w-11/12 mx-auto">
        <img src="./images/logo.svg" alt="logo" className="w-40" />
        <section className="flex md:justify-between gap-10 flex-wrap">
          <div className=" md:flex gap-10  ">
            <p className="md:w-[300px]">
              <span>
                <img src="./images/icon-location.svg" alt="icon-location" />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div>
              <p>
                <span>
                  <img src="./images/icon-phone.svg" alt="icon-location" />
                </span>
                +1-543-123-4567
              </p>
              <p>
                <span>
                  <img src="./images/icon-email.svg" alt="icon-location" />
                </span>
                example@fylo.com
              </p>
            </div>
          </div>
          <div className="md:m-0 my-10 w-[200px]">
            <h1>About Us</h1>
            <p>Jobs</p>
            <p>Press</p>
            <p>Blog</p>
          </div>
          <div>
            <h1>Contact Us</h1>
            <p>Terms</p>
            <p>Privacy</p>
          </div>
          <div className="flex gap-5 items-start md:mx-0 mx-auto my-5">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </section>
      </article>
    </footer>
  );
};

export default Footer;
