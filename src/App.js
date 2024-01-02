import React, { useState } from "react";
import "./App.css";
import "./Modal.css";
import "./index.js";
import image from "./design/bg-img.jpeg";

const App = () => {
  // State for storing the email
  const [email, setEmail] = useState("");

  // State for controlling the visibility of the modal
  const [isActive, setIsActive] = useState(false);

  // Handler for updating the email state when the email input field changes
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Handler for showing the modal
  const handleShow = () => {
    setIsActive(true);
  };

  // Handler for hiding the modal
  const handleClose = () => {
    setIsActive(false);
  };

  // Handler for the button click event
  const handleButtonClick = () => {
    // Here you can use the email value when the button is clicked
    console.log(email);

    // Refresh the page
    window.location.reload();
  };

  // Render the component
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
                      <i className="bi bi-check-circle-fill me-3 red-dot"></i>
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                    <p className="mx-5">
                      <i className="bi bi-check-circle-fill me-3 red-dot"></i>
                      Lorem ipsum dolor sit amet, sucorereng
                    </p>
                    <p className="mx-5">
                      <i className="bi bi-check-circle-fill me-3 red-dot"></i>
                      Lorem ipsum dolor sit amet,
                    </p>
                    <div className="mb-3">
                      <section className={isActive ? "active" : ""}>
                        <button className="show-modal" onClick={handleShow}>
                          Subscribe to monthly news letters{" "}
                        </button>
                        <span className="overlay" onClick={handleClose}></span>
                        <div className="modal-box">
                          <i className="fa-regular fa-circle-check"></i>
                          <h2>Completed</h2>
                          <h3>
                            You have successfully downloaded all the source code
                            files.
                          </h3>

                          {/* Email input field */}
                          <input
                            type="email"
                            className="email-input"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                          />

                          <div className="buttons">
                            {/* Renamed button */}
                            <button
                              className="send-btn"
                              onClick={handleButtonClick}
                            >
                              Send
                            </button>

                            {/* Renamed button */}
                            <button
                              className="cancel-btn"
                              onClick={handleClose}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </section>
                    </div>
                  </article>
                  {/* Sidebar or Related Information */}
                  <aside className="col-6">
                    {/* main img */}
                    <img
                      src={image}
                      className="img-fluid rounded-5 hover-zoom mt-2 me-3"
                      alt=""
                    />{" "}
                  </aside>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
