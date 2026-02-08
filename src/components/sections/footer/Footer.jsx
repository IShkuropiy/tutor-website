import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Index.css";

export default function Footer() {

    return (

        <footer class="main-footer">
            <nav class="footer-menu">
                <ul class="footer-nav-links">
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/pricing">PRICING</NavLink></li>
                    <li><NavLink to="/blog">THE BLOG</NavLink></li>
                    <li><NavLink to="/contact">CONTACT</NavLink></li>
                </ul>
            </nav>

            <div class="footer-columns">
                <div class="col">
                    <h4>ABOUT</h4>
                    <ul>
                        <li><NavLink to="/#about" className="footer-col-link">My Story</NavLink></li>
                        <li><NavLink to="/#services" className="footer-col-link">Services</NavLink></li>
                    </ul>
                </div>

                <div class="col">
                    <h4>POLICIES</h4>
                    <ul>
                        <li><NavLink to="/pricing#price-cards" className="footer-col-link">Booking</NavLink></li>
                        <li><NavLink to="/pricing#policy" className="footer-col-link">Cancelation</NavLink></li>
                    </ul>
                </div>
                <div class="col">
                    <h4>RESOURCES</h4>
                    <ul>
                        <li><NavLink to="/additionalR#map" className="footer-col-link">Music Map</NavLink></li>
                        <li><NavLink to="/additionalR#sound" className="footer-col-link">Sound Adventures</NavLink></li>
                    </ul>
                </div>

                <div class="col">
                    <h4>RESOURCES</h4>
                    <ul>
                        <li><NavLink to="/additionalR#videos" className="footer-col-link">Courses</NavLink></li>
                        <li><NavLink to="/additionalR#sound" className="footer-col-link">Libraries</NavLink></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom-info">
                <p class="tagline">I work with clients from all over Beaverton and NW Portland.</p>
                <div class="contact-details">
                    <p>info@aghgkjh.com</p>
                    <p>(123) 456-7890</p>
                    <p>North Bethany, Portland, OR</p>
                </div>
            </div>

            <p class="copyright">© 2026 Your Name | Iryna Shkuropii</p>
        </footer>

    );
}