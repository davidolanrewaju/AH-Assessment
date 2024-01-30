import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-grid-view">
        <div className="services">
            <img src="assets/logo2.png" alt="logo2" />
            <p>We offer a unique service of transportation for those visiting Jos where safety, comfort, affordability and excellent customer service are our core values</p>
        </div>
        <div className="head-offices">
            <h3>Head Office</h3>
            <div className="info-container">
                <div className="info">
                    <p>Email:</p>
                    <span>valgeetransportservices@gmail.com</span>
                </div>
                <div className="info">
                    <p>Phone (Jos) :</p>
                    <span>+234 816 498 2545</span>
                </div>
                <div className="info">
                    <p>Customer Care :</p>
                    <span>+234 806 088 5322</span>
                </div>
                <div className="info">
                    <p>Open hours :</p>
                    <span>Mon - Sat: 6 AM to 6 PM <br/>Sun: 6 AM to 1 PM</span>
                </div>
                <div className="info">
                    <p>Jos (Terminal/Pickup) :</p>
                    <span>Valgee Hotspot, Old Nitel Building, Close to old airport Roundabout Jos.</span>
                </div>
                <div className="info">
                    <p>Jos (Administrative Office) :</p>
                    <span>Valgee Hotspot, Old Nitel Building, Close to old airport Roundabout Jos.</span>
                </div>
            </div>
        </div>
        <div className="branch-offices-1">
            <h3>Branch Offices</h3>
            <div className="info-container">
                <div className="info">
                    <p>Abuja (Terminal/Pick Up) :</p>
                    <span>Riverplate Garden, 1st Gate, after Nitel Junction, Ahmadu Bello Way, Abuja</span>
                </div>
                <div className="info">
                    <p>Abuja (Administrative Office) :</p>
                    <span>No. 22 Kumasi Crescent, Wuse 2, Abuja FCT</span>
                </div>
                <div className="info">
                    <p>Phone (Abuja) :</p>
                    <span>+234 817 869 8791, +234 906 865 2712</span>
                </div>
                <div className="info">
                    <p>Customer Care :</p>
                    <span>+234 816 739 8567</span>
                </div>
                <div className="info">
                    <p>Makurdi Office :</p>
                    <span>Suit 5, devine rotal plaza. No. 12 Old Otukpo road adjacent oracle printing press Makurdi, Benue state</span>
                </div>
            </div>
        </div>
        <div className="branch-offices-2">
            <h3>Branch Offices</h3>
            <div className="info-container">
                <div className="info">
                    <p>Customer Care :</p>
                    <span>+234 806 088 5322</span>
                </div>
                <div className="info">
                    <p>Yobe :</p>
                    <span>Shop 1 Sani Ahmed Daura Housing Estate By-Pass Extension Damaturu, Yobe State.</span>
                </div>
                <div className="info">
                    <p>Gusau :</p>
                    <span>Opposite fire service damba, Gusau Zamfara State.</span>
                </div>
                <div className="info">
                    <p>Sokoto Office :</p>
                    <span>Bafarawa Estate, Opposite Liberty CLinic, Sokoto State</span>
                </div>
                <div className="info">
                    <p>Kebbi Office :</p>
                    <span>Along Nagari College Express way, Kebbi State</span>
                </div>
            </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="rights-reserved">
            <p>All rights reserved | Powered with &#9825; by <a href="https://www.transportr.africa/">TransportR</a></p>
        </div>
        <div className="footer-link-list">
            <a href="#" className="link">Book A Trip</a>
            <a href="#" className="link">About</a>
            <a href="#" className="link">Services</a>
            <a href="#" className="link">T&C</a>
            <a href="#" className="link">Contacts</a>
            <a href="#" className="link">Customer Feedback</a>
            <a href="#" className="link">Cooperative</a>
            <a href="#" className="link">Promotions</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
