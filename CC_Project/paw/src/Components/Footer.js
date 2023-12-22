import React from "react";
import "../Assets/Footer.css";
// import { Link } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="footer-links">
          <a href="#">FAQ</a>
          <Link to="/PrivacyPolicy">Privacy Policy</Link>

          <a
            href="https://strayanimalfoundationindia.org/the-challenges-and-rewards-of-international-animal-adoption/?gclid=CjwKCAiAvoqsBhB9EiwA9XTWGSX1zdpRKTW1jdHTzrUjGlfcob-G8OseXLrEAKgfTGi-SG-FElgUCxoCX2IQAvD_BwE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stray Animal Foundation India
          </a>
          <a
            href="https://www.internationalanimalrescue.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            International Animal Rescue
          </a>
        </div>
        <div className="footer-links">
          <Link to="/Home">Home</Link>
          <Link to="/Stories">Stories</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
      <p>© 2023 Paws.</p>
    </footer>
  );
};

export default Footer;
