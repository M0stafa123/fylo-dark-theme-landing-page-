import { useState } from "react";

const Main = () => {
  const [success, setSuccess] = useState(null);
  const [fail, setFail] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      e.target[0].value.match(
        /([a-z0-9][-a-z0-9_/+/.]*[a-z0-9])@([a-z0-9][-a-z0-9/.]*[a-z0-9]\.(arpa|root|aero|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)|([0-9]{1,3}\.{3}[0-9]{1,3}))/
      )
    ) {
      setSuccess("you have successfully signed up");
      setFail(null);
    } else {
      setFail("please provide a valide email address");
      setSuccess(null);
    }
  };
  return (
    <>
      <div className="bg-introAndEmail relative  flex ">
        <img
          src="./images/bg-curvy-mobile.svg"
          alt="bg-curvy-mobile"
          className="block md:hidden absolute w-full bottom-0"
        />
        <img
          src="./images/bg-curvy-desktop.svg"
          alt="bg-curvy-desktop"
          className="hidden md:block absolute w-full bottom-0"
        />
        <p className="text-center font-bold text-[27px] z-10 relative m-auto font-Ralway max-w-[500px]">
          All your files in one secure location, accessible anywhere.
        </p>
      </div>
      <main className="text-center mt-5">
        <section className="relative p-4 ">
          <div>
            <p className="max-w-[500px] text-base mx-auto ">
              Fylo stores all your most important files in one secure location. Access
              them wherever you need, share and collaborate with friends family, and
              co-workers.
            </p>
            <button className="hover:bg-ButtonHoverGradiant transition-all py-4 w-[250px] mx-auto bg-ButtonGradiant rounded-full my-10">
              Get Started
            </button>
          </div>
        </section>
        <section className="services ">
          <div>
            <img src="./images/icon-access-anywhere.svg" alt="icon-access" />
            <h2>Access your files, anywhere</h2>
            <p>
              The ability to use a smartphone, tablet, or computer to access your
              account means your files follow you everywhere.
            </p>
          </div>
          <div>
            <img src="./images/icon-security.svg" alt="icon-security" />
            <h2>Security you can trust</h2>
            <p>
              2-factor authentication and user-controlled encryption are just a couple
              of the security features we allow to help secure your files.
            </p>
          </div>
          <div>
            <img src="./images/icon-collaboration.svg" alt="icon-collaboration" />
            <h2>Real-time collaboration</h2>
            <p>
              Securely share files and folders with friends, family and colleagues for
              live collaboration. No email attachments required.
            </p>
          </div>
          <div>
            <img src="./images/icon-any-file.svg" alt="icon-any-file" />
            <h2>Store any type of file</h2>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has you
              covered allowing for all file types to be securely stored and shared.
            </p>
          </div>
        </section>
        <section className="p-4 text-start md:flex gap-10 justify-center md:w-4/5 mx-auto items-center">
          <img src="./images/illustration-stay-productive.png" alt="stay-productive" />
          <div className="max-w-[400px]">
            <h2 className=" font-bold mt-10 mb-5 text-xl md:text-4xl font-Ralway">
              Stay productive, wherever you are
            </h2>
            <p className="my-5 md:text-lg">
              Never let location be an issue when accessing your files. Fylo has you
              covered for all of your file storage needs.
            </p>
            <p className="my-5 md:text-lg">
              Securely share files and folders with friends, family and colleagues for
              live collaboration. No email attachments required.
            </p>
            <a
              href="#aa"
              className="hover:text-white hover:border-b-white transition-all pb-1 text-Cyan border-b border-b-Cyan flex items-center gap-2 w-fit"
            >
              See how Fylo works
              <img
                src="./images/icon-arrow.svg"
                alt="icon-arrow"
                className=" transition-all w-7"
              />
            </a>
          </div>
        </section>
        <section className="testmonials flex flex-wrap text-start mt-20">
          <div className="relative">
            <img
              src="./images/bg-quotes.png"
              alt="bg-quotes"
              className=" absolute bottom-full left-3 w-5"
            />
            <p>
              Fylo has improved our team productivity by an order of magnitude. Since
              making the switch our team has become a well-oiled collaboration machine.
            </p>
            <div>
              <img src="./images/profile-1.jpg" alt="profile-1" />
              <div>
                <h3>Satish Patel</h3>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div>
            <p>
              Fylo has improved our team productivity by an order of magnitude. Since
              making the switch our team has become a well-oiled collaboration machine.
            </p>
            <div>
              <img src="./images/profile-2.jpg" alt="profile-2" />
              <div>
                <h3>Bruce McKenzie</h3>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div>
            <p>
              Fylo has improved our team productivity by an order of magnitude. Since
              making the switch our team has become a well-oiled collaboration machine.
            </p>
            <div>
              <img src="./images/profile-3.jpg" alt="profile-3" />
              <div>
                <h3>Iva Boyd</h3>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </section>
        <section className="  min-h-[400px]">
          <div className="bg-introAndEmail rounded-md w-11/12 mx-auto relative p-5 top-[230px]">
            <h2 className="text-lg md:text-3xl my-5 font-Ralway">
              Get early access today
            </h2>
            <p className="max-w-[800px] mx-auto">
              It only takes a minute to sign up and our free starter tier is extremely
              generous. If you have any questions, our support team would be happy to
              help you.
            </p>
            <form
              className="flex flex-wrap gap-5 items-center justify-center my-10"
              onSubmit={handleSubmit}
            >
              <div className="w-11/12 md:w-2/4 flex-col flex relative">
                <input
                  placeholder="email@example.com"
                  type="text"
                  className=" w-full rounded-full p-4 outline-none text-black"
                />

                {success && (
                  <span className=" absolute -bottom-10 left-2 text-green-600">
                    {success}
                  </span>
                )}
                {fail && (
                  <span className=" absolute -bottom-10 left-2 text-Err">{fail}</span>
                )}
              </div>

              <input
                type="submit"
                value={"Get Started For Free"}
                className="w-11/12 md:w-1/5 rounded-full py-4 hover:bg-ButtonHoverGradiant bg-ButtonGradiant cursor-pointer"
              />
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
