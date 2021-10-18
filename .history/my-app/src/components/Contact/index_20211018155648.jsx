import React from 'react'
import '../Contact/contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'


const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-background">
                <div className="contact-wrapper">
                    <div className="contact-wrapper__left">
                        <h1 className="contact-wrapper__title">Let's discuss your project </h1>
                        <div className="contact-info">
                            <div className="contact-info__item">
                                    <img
                                        src={Phone}
                                        alt='phone'
                                        className="contact-icon"
                                    />
                                    0968389108
                            </div>
                            <div className="contact-info__item">
                                    <img
                                        src={Address}
                                        alt='address'
                                        className="contact-icon"
                                    />
                                    DAK LAK
                            </div>
                            <div className="contact-info__item">
                                    <img
                                        src={Email}
                                        alt='email'
                                        className="contact-icon"
                                    />
                                    vanttien93@gmail.com
                            </div>
                        </div>
             
                    </div>
                    <div className="contact-wrapper__right"></div>
                </div>
            </div>
        </div>
    )
}

export default Contact
