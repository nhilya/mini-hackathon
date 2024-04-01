import React from 'react'

function Carousel() {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                {/* Carousel Indicators */}
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                {/* Carousel Items */}
                <div class="carousel-inner">
                    {/* First Carousel Item */}
                    <div class="carousel-item active p" style={{ cover: 'fit' }}>
                        <img class="d-block w-100" src="pizza-dough.jpg" alt="Pizza sedap sekaliii" />
                    </div>
                    {/* Second Carousel Item */}
                    <div class="carousel-item">
                        <img class="d-block w-100" src="shepherds-pie.jpg" alt="pie mat sedap sekali" />
                    </div>
                    {/* Third Carousel Item */}
                    <div class="carousel-item">
                        <img class="d-block w-100" src="strawberry-choc-cake.webp" alt="Third slide" />
                    </div>
                </div>
                {/* Carousel Controls */}
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Carousel