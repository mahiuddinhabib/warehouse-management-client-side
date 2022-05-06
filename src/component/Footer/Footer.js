import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import { faLocation, faLocationDot, faLocationPin, faLocationPinLock, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <footer className='row m-0 bg-dark text-white'>
            <div className='col-12 col-md-6 mt-4'>
                <h3>Quick Links</h3>
                <Link className='text-decoration-none text-white mx-3' to={"/"}>HOME</Link>
                <Link className='text-decoration-none text-white mx-3' to={"/"}>HOME</Link>
                <Link className='text-decoration-none text-white mx-3' to={"/"}>HOME</Link> <br />
                <FontAwesomeIcon className='fs-2 mx-3 mt-3' icon={faFacebook} />
                <FontAwesomeIcon className='fs-2 mx-3 mt-3' icon={faGithub} />
                <FontAwesomeIcon className='fs-2 mx-3 mt-3' icon={faYoutube} />
            </div>
            <div className='col-12 col-md-6 mt-4'>
                <p className='mb-2'><FontAwesomeIcon className='fs-5 me-2' icon={faPhone} /> Pone: 0177777777</p>
                <p className='mb-2'><FontAwesomeIcon className='fs-5 me-2' icon={faEnvelope} /> Email: iamjim136@gmail.com</p>
                <p className='mb-2'><FontAwesomeIcon className='fs-5 me-2' icon={faLocationDot} />Adress: Banani, Dhaka</p>
            </div>
            <div className='col-12 mt-3 text-muted'>
                <p><small>&copy; 2022 all right reserved  BOOK FAIR</small></p>
            </div>
        </footer>
    );
};

export default Footer;