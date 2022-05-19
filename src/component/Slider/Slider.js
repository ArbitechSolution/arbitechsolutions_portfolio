import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slider.css"
import download from "../../Assets/download.png"
import download1 from "../../Assets/download (1).png"
import download2 from "../../Assets/download (2).png"
import download3 from "../../Assets/download (3).png"
import download4 from "../../Assets/download (4).png"
import firebase from "../../Assets/firebase.8584a25c.png"
import solidity from "../../Assets/solidity-logo-vector.png"
import redux from "../../Assets/redux.543b98d3.png"
import reactjs from "../../Assets/reactjs.222b6b69.png"
import node from "../../Assets/node.png"
function Sliders() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        // cssEase: "linear",
        responsive: [
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]

    };
    return (
        <div className='fluid-container'>
            <div className='d-flex justify-content-center slider-margin '>
                <div className='col-md-11 col-10'>

                    <Slider {...settings}>
                        <div>
                        <img src={download} className="image1"/>
                        </div>
                        <div>
                        <img src={download1} className="image2"/>
                        </div>
                        <div>
                        <img src={download3} className="image3"/>
                        </div>
                        <div>
                        <img src={download4} className="image4"/>
                        </div>
                        <div>
                        <img src={download2} className="image1"/>
                        </div>
                        <div>
                        <img src={reactjs} className="image2"/>
                        </div>
                        <div>
                        <img src={redux} className="redux-image"/>
                        </div>
                        <div>
                        <img src={node} className="image1"/>
                        </div>
                        {/* <div>
                        <img src={reactjs} className="image1"/>
                        </div> */}
                        <div>
                        <img src={firebase} className="firebase-image1"/>
                        </div>
                        <div>
                        <img src={solidity} className="solidity-image1"/>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Sliders