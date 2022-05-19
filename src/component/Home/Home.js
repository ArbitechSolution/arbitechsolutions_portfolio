import React from 'react'
import "./Home.css"
function Home() {
    return (
        <div className='container cont-width d-flex justify-content-center align-items-center'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-7  col-11'>
                    <h3 className='home-h3'>Hello! My name is SAMEER SHAIKH</h3>
                    <p className='home-p'>Hey! Are you looking For a Web developer, React developer or firebase developer? I have 2.5 years of experience and working to make your development faster, easier and efficient. Available 24/7 get in touch to discuss details</p>

                    <div class="button-container-2">
                        <span class="mas">Contact Me</span>
                        <button type="button" name="Hover">Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home