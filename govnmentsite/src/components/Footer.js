import React from "react";
import "../css/Footer.css";

export function Footer() {
  return (
    <>
      <footer class="site_footer">
        <div class="footer_sec1">
          <div class="container">
            <div class="ft_sc1">
              <div className="sub_min">
                <h1 className="heading_mini tu f_col_l">
                  GET EXCLUSIVE NEWS AND UPDATES
                </h1>
                <div className="sub_form">
                  <form
                    className="input-group"
                    id="newsletterForm"
                    method="post"
                    action="/subscribe"
                    noValidate
                  >
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Email Id"
                    />
                    <br></br>
                    <br></br>
                    <span className="input-group-btn">
                      <button
                        className="btn"
                        type="submit"
                        id="newsletterSubmit"
                      >
                        Subscribe Now.
                      </button>
                    </span>
                  </form>
                </div>
              </div>

              <div class="footer_sec2_col2 footer_sec2_col_sm ">
                <h2 class="heading_mini tu">QUICK LINKS</h2>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/gallery">Gallery</a>
                <a href="/press">Press</a>
                <a href="/myview">My View</a>
                <a href="/contact">Contact Us</a>
              </div>

              <div class="clearfix"></div>
            </div>

            <div class="ft_sc2">
              <div class="donate_now_btn">
                <h2 class="heading_mini tu">DONATE NOW</h2>

                <a
                  href="https://www.pmcares.gov.in/en/web/contribution/donate_india"
                  target="blank"
                  class="btn09_sm btn09_s1"
                >
                  PM Cares
                </a>
                <a
                  href="https://bharatkeveer.gov.in/viewMartyrsGalleryPage"
                  target="blank"
                  class="btn09_sm btn09_s1"
                >
                  Bharat Ke Veer
                </a>
                <a
                  href="https://www.bjp.org/membership/en/home/donation"
                  target="blank"
                  class="btn09_sm btn09_s1"
                >
                  BJP
                </a>
              </div>

              <div class="footer_sec2_col3 footer_sec2_col_sm">
                <h2 class="heading_mini tu">FOLLOW</h2>
                <div class="f_sos">
                  <a
                    href="https://www.facebook.com/amitshahofficial"
                    target="blank"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com/AmitShah" target="blank">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/amitshahofficial"
                    target="blank"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/@AmitShah" target="blank">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a
                    href="https://whatsapp.com/channel/0029Va5Z8AkJJhzejWyIwA12"
                    target="blank"
                  >
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </div>

                <div class="s_sos">
                  <h2 class="heading_mini tu"></h2>
                </div>
              </div>

              <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>

            <div class="footer_sec3">
              <div class="footer_sec3_l">
                <span>Copyright @ 2023. All rights reserved.</span>

                <span>|</span>
                <a href="privacy-policy">Privacy policy</a>
              </div>

              <div class="footer_sec3_r"></div>
              <div class="clearfix"></div>
            </div>

            <div class="clearfix"></div>
          </div>
        </div>
      </footer>
    </>
  );
}
