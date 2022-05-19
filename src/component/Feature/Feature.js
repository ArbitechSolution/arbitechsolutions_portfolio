import React from 'react'
import "./Feature.css"
import { AiOutlineAntDesign } from 'react-icons/ai';
import { BsBarChartFill } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa"
function Feature() {
    return (
        <div className=' feature-image'>
            <div className='container'>
                <div className=' d-flex justify-content-center pt-5 pb-5'>
                    <div className='col-10'>
                        <h4 className='feedbackhome-h4 text-white'>OUR FEATURES</h4>
                        <h2 className='feature-h2'>I Am Always Try To <span className="bg_move" ><span >Understand</span></span> Users Expectation</h2>
                    </div>

                </div>
                <div class="row d-flex flex-wrap justify-content-center justify-content-md-between mt-5 pb-5" >
                    <div className='col-lg-4 col-11 pb-3' >
                        <a class="card1" >
                            <AiOutlineAntDesign size={80} style={{ color: "#eb4034" }} />
                            <h2 className='pt-2 feature-h22'>Creative Design</h2>
                            <p className=" pt-3 feature-pp" >I create striking visuals that appeal to visitors and make them fall in love with your brand. My designs are unique and mobile optimised. My design process involves user research followed by wire framing and then production of designs.</p>
                        </a>
                    </div>
                    <div className='col-lg-4 col-11 pb-3'>
                        <a class="card1" >
                            <BsBarChartFill size={80} style={{ color: "#eb4034" }} />
                            <h3 className='pt-2 feature-h22'>Business Growth</h3>
                            <p className=" pt-3 feature-pp" >My mission is to transform our clients’ businesses, allowing them to utilise powerful technologies and grow their businesses, improve their processes that benefit businesses of all sizes, making them more efficient and effective.</p>
                        </a>
                    </div>
                    <div className='col-lg-4 col-11 pb-3'>
                        <a class="card1" >
                            <FaMobileAlt size={80} style={{ color: "#eb4034" }} />
                            <h3 className='pt-2 feature-h22'>Responsive Design</h3>
                            <p className=" pt-3 feature-pp" >Flat, Lightweight & Responsive Designs term is related to the idea of developing a website design in a way that helps the user to open a website on any size of screen the lay out to find changed according to the user’s PC screen motion.</p>
                        </a>
                    </div>
                    {/* <div className='col-lg-4 col-10 pb-3'>
                        <a class="card1" >
                            <h3>This is option 1</h3>
                            <p class="small">Card description with lots of great facts and interesting details.</p>
                        </a>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Feature