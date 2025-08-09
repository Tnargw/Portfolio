import React from 'react';

const Resume = () => {
    return (
        <div id='resume' className='resume-container'>
            <div className='resume'>
                <div className='resume-items'>
                    <div className='resume-title'>
                        <h1>Resume</h1>
                        <a href='https://drive.google.com/uc?export=download&id=1Zc1PuOP_2rYC0THzf3BldvfM26R9cWzc' download>
                            <h5>DOWNLOAD PDF</h5>
                        </a>
                    </div>
                    <div>
                        <div>
                            <h3 className='resume-subtitle'>Experience</h3>
                            <div className='resume-job-container'>
                                <div>
                                    <h4 className='resume-project-name'>
                                        <u style={{ color: "#FFFFFF", textDecoration: 'none', fontFamily: 'Heebo, sans-serif', fontWeight: 800 }}>
                                            Project Manager - BYU-I Rec Services
                                        </u> (Nov 2024 - Present)
                                    </h4>
                                    <div className='resume-list'>
                                        <li>- Led a team of 30+ students across two semesters to develop a web-based time management system for BYU-Idaho Rec Services, replacing the commercial scheduling tool Sling.</li>
                                        <li>- Organized project workflows using agile methodologies and GitHub, planned weekly sprints, and resolved blockers to keep development on track.</li>
                                        <li>- Collaborated weekly with Rec Services management and employees to gather requirements, define MVP scope, and align system functionality with department needs and university security standards.</li>
                                        <li>- Fostered a collaborative, high-performance team culture across frontend, backend, and database teams.</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className='resume-subtitle'>Skills</h3>
                            <div className='resume-skills-container'>
                                <div>
                                    <h4 className='resume-project-name'>
                                        <u style={{ color: "#FFFFFF", textDecoration: 'none', fontFamily: 'Heebo, sans-serif', fontWeight: 800 }}>
                                            Technical
                                        </u> (Hard)
                                    </h4>
                                    <div className='skill-container'>
                                        <div className='skill'><h4>JavaScript</h4></div>
                                        <div className='skill'><h4>React</h4></div>
                                        <div className='skill'><h4>Node.js</h4></div>
                                        <div className='skill'><h4>C#</h4></div>
                                        <div className='skill'><h4>HTML/CSS</h4></div>
                                        <div className='skill'><h4>Python</h4></div>
                                        <div className='skill'><h4>SQL</h4></div>
                                        <div className='skill'><h4>Git & GitHub</h4></div>
                                        <div className='skill'><h4>Agile Methodologies</h4></div>
                                        <div className='skill'><h4>Project Management</h4></div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className='resume-project-name'>
                                        <u style={{ color: "#FFFFFF", textDecoration: 'none', fontFamily: 'Heebo, sans-serif', fontWeight: 800 }}>
                                            Interpersonal
                                        </u> (Soft)
                                    </h4>
                                    <div className='skill-container'>
                                        <div className='skill'><h4>Team Leadership</h4></div>
                                        <div className='skill'><h4>Problem Solving</h4></div>
                                        <div className='skill'><h4>Collaboration</h4></div>
                                        <div className='skill'><h4>Communication</h4></div>
                                        <div className='skill'><h4>Time Management</h4></div>
                                        <div className='skill'><h4>Training & Mentoring</h4></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 style={{ marginTop: '82px' }} className='resume-subtitle'>Education</h3>
                            <div>
                                <div>
                                    <h4 className='resume-project-name'>
                                        <u style={{ color: "#FFFFFF", textDecoration: 'none', fontFamily: 'Heebo, sans-serif', fontWeight: 800 }}>
                                            Brigham Young University - Idaho
                                        </u> - (April 2025)
                                    </h4>
                                    <h4 className='education'>Bachelor of Computer Science</h4>
                                    <h4 className='education'>Academic Scholarship - Awarded for maintaining a 4.0 GPA</h4>
                                    <h4 className='education'>Web Frontend Certificate</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
