import React from "react";
import '../App.css'

// Footer component for displaying the website footer
function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column Left */}
                    <div className="col-4">
                        <h5>Food Recipe</h5>
                        <h6 className="list-unstyled">
                            <li>Malaysia</li>
                        </h6>
                    </div>

                    {/* Column Middle */}
                    <div className="col-4">
                        <img src="logo-food.png" alt="Food Recipe Logo" className="food-recipe-logo" />
                    </div>

                    {/* Column Right */}
                    <div className="col-4">
                        <h5>Directory</h5>
                        <ui className="list-unstyled">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/carousel" >Gallery</a></li>
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