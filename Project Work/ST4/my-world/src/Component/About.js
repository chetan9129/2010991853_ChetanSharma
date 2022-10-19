import React from "react";
import "../About.css";

const About = () => {
  return (
    <div className="homeStyle">
      <section className="about-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-6 col-md-12">
              <a to="/about" className="about-title mb-4">
                About Doccure
              </a>
              <h3 className="mb-4 homeStyle-heading">
                Medical Management System
              </h3>
              <p className="homeStyle-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quia, quis vero libero reiciendis tempore earum eius, vitae
                beatae omnis, eveniet numquam repellat quidem qui sit voluptas
                id perferendis amet?
              </p>
              <p className="mb-0 homeStyle-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                quisquam deleniti rerum dolore debitis modi alias hic dolorum
                repellat eius delectus expedita quod, eveniet, eligendi ab rem
                molestiae veritatis dolor.
              </p>
            </div>
            <div className="col-md-12 mt-5 text-center">
              <h1 className="homeStyle-heading" style={{ fontSize: "60px" }}>
                Available Feature in our Clinic
              </h1>
            </div>
          </div>

          <div className="aboutOptionContent col-md-12">
            <div className="cards m-5 p-2 pb-0">
              <img
                src="https://doccure-react.dreamguystech.com/template/25fb5f12dec671d4b791b7e70784409c.jpg"
                alt=""
                width="300"
                height="160px"
                className="center m-1 mx-auto d-block"
              />
              <h1 className="text-center">Operation</h1>
            </div>
            <div className="cards m-5 p-2 pb-0">
              <img
                src="https://doccure-react.dreamguystech.com/template/f24b0e7ee6a41ef19b43144b51f340ce.jpg"
                alt=""
                width="300"
                height="160px"
                className="center m-1 mx-auto d-block"
              />
              <h1 className="text-center">Medical</h1>
            </div>
            <div className="cards m-5 p-2">
              <img
                src="https://doccure-react.dreamguystech.com/template/25fb5f12dec671d4b791b7e70784409c.jpg"
                alt=""
                width="300"
                height="160px"
                className="center m-1 mx-auto d-block"
              />
              <h1 className="text-center">Operation</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
