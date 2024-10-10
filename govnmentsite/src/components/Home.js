
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS
import amit1 from '../Images/amit1.png';  // Import your images
import amit2 from '../Images/amit2.png';  // Import your images
import amit3 from '../Images/amit3.png';  // Import your images
import amit4 from '../Images/amit4.png';  // Import your images
import '../css/Home.css';

function Home() {
    return (
        <section className="home" id="home">
            <div className="banner">
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    interval={5000}
                    transitionTime={500}
                >
                    <div>
                        <img src={amit1} alt="Religious Man 1" />
                        <div className="banner-text">
                            
                        </div>
                    </div>
                    <div>
                        <img src={amit2} alt="Religious Man 2" />
                        <div className="banner-text">
                            
                        </div>
                    </div>
                    <div>
                        <img src={amit3} alt="Religious Man 3" />
                        <div className="banner-text">
                            
                        </div>
                    </div>
                    <div>
                        <img src={amit4} alt="Religious Man 3" />
                        <div className="banner-text">
                            
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    );
}

export default Home;
