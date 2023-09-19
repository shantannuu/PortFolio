import React from 'react';
import './AboutMe.css'; // Import your CSS file

function AboutMe() {
    return (
        <div>
            <header>
                <h1>About Us</h1>
            </header>
            <div className="about-me">
                <img src="Ankita.png" alt="Ankita Raul" />
                <h2>Ankita Raul</h2>
                <p>Skills: Web Development, Java, Python, HTML, CSS, React-JS</p>
                <p>Education: Bachelor's Degree in Computer Science/ Master's Degree in Computer Science</p>
            </div>
            <div className="about-me">
                <img src="Shantanu.png" alt="Shantanu Patil" />
                <h2>Shantanu Patil</h2>
                <p>Skills: Web Development, Java, Python, HTML, CSS, React-JS</p>
                <p>Education: Bachelor's Degree in Computer Science/ Master's Degree in Computer Science</p>
            </div>
            <div className="contact-info">
                <p>Contact me at: <a href="mailto:work@mail.com">work@mail.com</a></p>
            </div>
        </div>
    );
}

export default AboutMe;
