import React, { useState } from "react";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
const login = () => {
  const [uemail, setUemail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(uemail, password);
    fetch("http://localhost:3001/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: uemail,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userLogin");
        if (data.status == "ok") {
          alert("SignIn Successfully");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.location.href = "/admin";
        }
      });
  };
  return (
    <>
      <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div className="bg-overlay" />
        <div className="auth-page-content overflow-hidden pt-lg-5">
          <div className="container">
            {/* <div className="row"> 
              <div className="col-lg-6">
                <div className="card overflow-hidden"> 
                   <div className="row g-0"> 
                     <div className="col-lg-6">
                      <div className="p-lg-5 p-4 auth-one-bg h-100">
                        <div className="bg-overlay" /> 
                        <div className="position-relative h-100 d-flex flex-column">
                          <div className="mb-4">
                            
                              <img
                                src=""
                                alt
                                height={50}
                              />
                        
                          </div>
                          <div className="mt-auto">
                            <div className="mb-3">
                              <i className="ri-double-quotes-l display-4 text-success" />
                            </div>
                            <div
                              id="qoutescarouselIndicators"
                              className="carousel slide"
                              data-bs-ride="carousel"
                            >
                              <div className="carousel-indicators">
                                <button
                                  type="button"
                                  data-bs-target="#qoutescarouselIndicators"
                                  data-bs-slide-to={0}
                                  className="active"
                                  aria-current="true"
                                  aria-label="Slide 1"
                                />
                                <button
                                  type="button"
                                  data-bs-target="#qoutescarouselIndicators"
                                  data-bs-slide-to={1}
                                  aria-label="Slide 2"
                                />
                                <button
                                  type="button"
                                  data-bs-target="#qoutescarouselIndicators"
                                  data-bs-slide-to={2}
                                  aria-label="Slide 3"
                                />
                              </div>
                              <div className="carousel-inner text-center text-white-50 pb-5">
                                <div className="carousel-item active">
                                  <p className="fs-15 fst-italic">
                                    " Great! Clean code, clean design, easy for
                                    customization. Thanks very much! "
                                  </p>
                                </div>
                                <div className="carousel-item">
                                  <p className="fs-15 fst-italic">
                                    " The theme is really great with an amazing
                                    customer support."
                                  </p>
                                </div>
                                <div className="carousel-item">
                                  <p className="fs-15 fst-italic">
                                    " Great! Clean code, clean design, easy for
                                    customization. Thanks very much! "
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
            <div className="col-lg-6 rivform" style={{width: '40%'}}>
              <div className="p-lg-5 p-4">
                <div>
                  <h5 className="rivwel">Welcome Back !</h5>
                  <p className="text-muted">Sign in to continue to Rivozah.</p>
                </div>
                <div className="mt-4">
                  <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="useremail"
                        placeholder="Email Address"
                        value={uemail}
                        onChange={(e) => setUemail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <div className="position-relative auth-pass-inputgroup mb-3">
                        <input
                          type="password"
                          className="form-control pe-5 password-input"
                          placeholder="Password"
                          id="password-input"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="float-start rivfor">
                          <Link
                            to="auth-pass-reset-cover.html"
                            className="rivforg"
                          >
                            Forgot password?
                          </Link>
                        </div>
                        {/* <button
                          className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                          type="button"
                          id="password-addon"
                        >
                          <i className="ri-eye-fill align-middle" />
                        </button> */}
                      </div>
                    </div>
                    {/* <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="auth-remember-check"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="auth-remember-check"
                      >
                        Remember me
                      </label>
                    </div> */}
                    <div className="mt-4">
                      <button className="btn riv w-100" type="submit">
                        Sign In
                      </button>
                    </div>
                    {/* <div className="mt-4 text-center">
                              <div className="signin-other-title">
                                <h5 className="fs-13 mb-4 title">
                                  Sign In with
                                </h5>
                              </div>
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-icon waves-effect waves-light"
                                >
                                  <i className="ri-facebook-fill fs-16" />
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger btn-icon waves-effect waves-light"
                                >
                                  <i className="ri-google-fill fs-16" />
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-dark btn-icon waves-effect waves-light"
                                >
                                  <i className="ri-github-fill fs-16" />
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-info btn-icon waves-effect waves-light"
                                >
                                  <i className="ri-twitter-fill fs-16" />
                                </button>
                              </div>
                            </div> */}
                  </form>
                </div>
                {/* <div className="mt-5 text-center">
                          <p className="mb-0">
                            Don't have an account ?{" "}
                            <Link
                              to="/register"
                              className="fw-semibold text-primary text-decoration-underline"
                            >
                              {" "}
                              Register
                            </Link>{" "}
                          </p>
                        </div> */}
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        <Footer />
      </div>
    </>
  );
};

export default login;
