import React from "react";
import './App.css'

// Footer component for displaying the website footer
function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column Left */}
                    <div className="col">
                        <h5>Food Recipe</h5>
                        <h6 className="list-unstyled">
                            <li>Malaysia</li>
                        </h6>
                    </div>

                    {/* Column Middle */}
                    <div className="col">
                        <img src='logo.png' alt="Food Recipe Logo" className="food-recipe-logo" style={{ width: '100px' }} />
                    </div>

                    {/* Column Right */}
                    <div className="col">
                        <h5>Directory</h5>
                        <ui className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/gallery" >Gallery</a></li>
                            <li><a href="/contact" >Contact Us</a></li>
                        </ui>
                    </div>
                </div>
                <hr />

                <div className="row">
                    <p className="col-sm">
                        &copy;2024 Food Recipe | All rights reserved |
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;