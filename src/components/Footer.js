import React from "react";
import { SiLinkedin,SiGithub  } from "react-icons/si";
import { MdEmail  } from "react-icons/md";


const Footer = () => {
    return (
        <div className='footer-container'> 
            <SiLinkedin onClick={() => window.open("https://www.linkedin.com/in/daniel-goncalves-4a065b204/")} size='1.7rem'/>
            <SiGithub onClick={() => window.open("https://github.com/danielgoncalves25")} size='1.7rem'/>
            <MdEmail onClick={() => window.open("mailto: daniel.goncalves2500@gmail.com")} size='1.7rem'/>
        </div>
    );
};

export default Footer;
