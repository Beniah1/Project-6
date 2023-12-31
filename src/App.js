import React, { useState } from 'react';
import "./App.css";
import image from "./design/bg-img.jpeg";

function App() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleButtonClick = () => {
    // Here you can call the function to send the email.
    // This function depends on how you plan to send the email.
    console.log(`Sending email to ${email}`);
  };

  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="bg-white shadow rounded-5 pt-3 pb-3 px-2 w-75">
          <div className=""></div>
          <main>
            <section>
              <div className="container">
                <div className="row">
                  {/* Main Article */}
                  <article className="col-6">
                    <h1
                      className="text-center"
                      style={{
                        marginTop: "60px",
                        fontSize: "3.4rem",
                        fontWeight: "720",
                      }}
                    >
                      {" "}
                      Stay updated!
                    </h1>
                    <p className="mx-5 mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit:
                    </p>
                    <p className="mx-5">
                      {/* to add a margin-right in bootstrap use me-4 */}
                      <i className="bi bi-check-circle-fill me-3"></i>Lorem ipsum
                      dolor sit amet, consectetur
                    </p>
                    <p className="mx-5">
                      <i className="bi bi-check-circle-fill me-3"></i>
                      Lorem ipsum dolor sit amet, sucorereng
                    </p>
                    <p className="mx-5">
                      <i className="bi bi-check-circle-fill me-3"></i>
                      Lorem ipsum dolor sit amet,
                    </p>
                    <div className="mb-3">
                      {/* email address input */}
                      <label htmlFor="" className="form-label mx-5">Email address</label>
                      <input
                        type="email"
                        className="form-control mx-5"
                        id=""
                        aria-describedby="emailHelpId"
                        placeholder="abc@mail.com"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      <button
                        type="button"
                        className="btn btn-primary mx-5 mt-3"
                        onClick={handleButtonClick}
                      >
                        Subscribe to monthly newsletter
                      </button>
                    </div>
                  </article>
                  {/* Sidebar or Related Information */}
                  <aside className="col-6">
                    {/* main img */}
                    <img src={image} className="img-fluid rounded-5" alt="" />
                  </aside>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;