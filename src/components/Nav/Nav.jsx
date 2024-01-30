import "./Nav.css";
function Nav() {
  return (
    <>
      <div className="navigation">
        <div className="nav-contact">
          <div className="nav-email">
            <img className="mail-icon" src="assets/mail-icon.svg" alt="mail" />
            <p>Email: valgeetransportservices@gmail.com</p>
          </div>
          <div className="nav-phone">
            <img
              className="phone-icon"
              src="assets/phone-icon.svg"
              alt="phone"
            />
            <p>Call Us: +234 816 739 8567</p>
          </div>
        </div>
        <div className="nav-links">
          <div className="logo">
            <img className="logo" src="assets/logo.jpg" alt="logo" />
          </div>
          <div className="link-list">
            <div className="bookings">
              <a href="#" className="link dropdown-link">
                Bookings
                <img className="arrow-down-icon" src="assets/arrow-down-icon.svg" alt="arrow-down" />
              </a>
              <div className="dropdown-content">
                <a href="#">Book A Trip</a>
                <a href="#">Verify Your Booking</a>
              </div>
            </div>
            <a href="#" className="link">
              Join Cooperative
            </a>
            <div className="infos">
              <a href="#" className="link dropdown-link">
                More Info
                <img className="arrow-down-icon" src="assets/arrow-down-icon.svg" alt="" />
              </a>
              <div className="dropdown-content">
                <a href="#">About Us</a>
                <a href="#">Trip Feedback</a>
                <a href="#">Courier Feedback</a>
                <a href="#">Enquiries</a>
                <a href="#">Services</a>
              </div>
            </div>
            <a href="#" className="link">
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
