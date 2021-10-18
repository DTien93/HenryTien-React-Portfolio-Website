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
                        <h1 className="contact-wrapper__title">
                            Let's discuss your project
                        </h1>
                        <div className="contact-info">
                            <div className="contact-info__item">
                                <img
                                    src=""
                                    alt=""
                                    className="contact-icon"
                                />
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
