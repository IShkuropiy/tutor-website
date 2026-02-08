import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Index.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="navbar-container">
            {/* TOP LAYER: Black Bar */}
            <div className="nav-top">
                <div className="nav-top-content">
                    <Link to="/home" className="logo">Iryna Shkuropii</Link>

                    <div className="hours desktop-only">
                        <span>Monday - Friday 10:00AM - 7:00PM</span>
                        <span>Call Me (123) 456-7890</span>
                    </div>

                    <div className="nav-top-right">
                        <Link to="/contact" className="btn-book desktop-only">book a lesson</Link>
                        {/* Hamburger only shows on mobile */}
                        <button className="nav-toggle mobile-only" onClick={() => setOpen(true)}>
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {/* BOTTOM LAYER: White Bar (Desktop Only) */}
            <nav className="nav-bottom desktop-only">
                <ul className="nav-links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/pricing">Pricing</NavLink></li>
                    <li><NavLink to="/blog">The Blog</NavLink></li>
                    <li><NavLink to="/additionalR">Additional Resources</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>

            {/* MOBILE MENU OVERLAY */}
            {open && (
                <div className="mobile-menu-overlay">
                    <div className="mobile-menu-header">
                        <span className="logo">Iryna Shkuropii</span>
                        <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
                    </div>

                    <div className="mobile-links">
                        <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
                        <NavLink to="/pricing" onClick={() => setOpen(false)}>Pricing</NavLink>
                        <NavLink to="/blog" onClick={() => setOpen(false)}>The Blog</NavLink>
                        <NavLink to="/additionalR" onClick={() => setOpen(false)}>Additional Resources</NavLink>
                        <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
                    </div>
                </div>
            )}
        </header>
    );
}
