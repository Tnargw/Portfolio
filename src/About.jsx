import React from 'react';

const About = () => {
    return (
        <div id='about' className='about-container'>
            <div className='about'>
                <div className='about-items'>
                    <div className='about-flex-one'>
                        <h1 className='about-title'>About</h1>
                        <h5>
                            I'm Grant, a developer who loves turning ideas into working products. I'm always learning new technologies and enjoy solving complex problems. Outside of coding, I enjoy reading, gaming, and spending time with my wife. 
                            <a className='say-hi' href='#contact'> Say hi!</a>
                        </h5>
                        <div>
                            <a className='email' href="mailto: Tnargw@gmail.com"><h4>TNARGW@GMAIL.COM</h4></a>
                            <div className='links'>
                                <a target='blank' href="https://github.com/Tnargw"><h4>GITHUB</h4></a>
                                <a target='blank' href="https://www.linkedin.com/in/grant-watson-/"><h4>LINKEDIN</h4></a>
                            </div>
                        </div>
                    </div>
                    <div className='profile-pic'></div>
                </div>
            </div>
        </div>
    );
};

export default About;