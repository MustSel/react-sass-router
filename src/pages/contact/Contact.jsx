import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <div className="contact-bgImg-container">
      <Navbar />
      <main className="contact">
        <h2>Contact Me ...</h2>
        <div className="contact__list">
          <div className="contact__item">
            <i className="fas fa-envelope"></i> Email
            <div className="text-secondary">wednesday@nevermoreacademy.edu</div>
          </div>
          <div className="contact__item">
            <i className="fas fa-mobile-alt"></i> Phone
            <div className="text-secondary">+40 (571) 360-1234</div>
          </div>
          <div className="contact__item">
            <i className="fas fa-map-marker-alt"></i> Address
            <div className="text-secondary">
              Strada Zamorei 1, Bușteni 105500, Romania
            </div>
          </div>
        </div>
      </main>

      <footer className="middle">
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
