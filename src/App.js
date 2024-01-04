import React from "react";
import "./index.css";
import bgImage from "./design/bg-img.jpeg";

const App = () => {
  return (
    <div className="bg">
      {/* Main Content */}
      <main>
        {/* change left width of body information */}
        <section className="wdh-bdy">
          <article className="wth-img-1">
            {/* Main Article */}
            <p className="man-art">Home renovation!</p>
            {/* Headline */}
            <p className="hed">
              Get renovation inspiration
              <span className="break-word"> and tips in your inbox</span>
            </p>
            {/* Body text */}
            <p className="bd-txt">
              Stay up-to-date on the latest home renovation trends, product
              launches, and DIY projects.
              <span className="ctm-txt-clr">
                Sign up below to receive our monthly email newsletter featuring:{" "}
              </span>{" "}
            </p>
            {/* Home Pointers  */}
            <div className="hm-pt">
              <p>
                {/* bs5 icons  */}
                <i className="bi bi-check2-circle"></i>Inspiring before and
                after makeover stories
              </p>

              <p>
                {/* bs5 icons  */}
                <i className="bi bi-check2-circle"></i>Get design ideas and
                money-saving tips
              </p>
              <p>
                {/* bs5 icons  */}
                <i className="bi bi-check2-circle"></i>
                Never miss out on a great renovation
              </p>
            </div>

            <div className="eml">
              <p className="eml-ads">Email address</p>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="eml-inpt"
              />
              <br></br>
              <button> Subscribe to monthly newsletters</button>
            </div>
          </article>
          <aside className="wth-2">
            {/* img */}
            <img src={bgImage} alt="Background" className="wth-img-2"/> {/* Use the imported image */}
          </aside>
        </section>
      </main>
    </div>
  );
};

export default App;
