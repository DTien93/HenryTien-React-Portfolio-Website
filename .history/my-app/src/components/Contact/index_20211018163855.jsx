import React from 'react'
import '../Contact/contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'


const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-background"></div>
                <div className="contact-wrapper">
                    <div className="contact-wrapper__left">
                        <h1 className="contact-wrapper__title">My Information</h1>
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
                    <div className="contact-wrapper__right">
                        <p className="contact-desc">
                           Please enter if you want contact to me !!!
                        </p>
                        <form action="">
                            <input type="text" placeholder="Name" name="user_name" />
                            <input type="text" placeholder="Subject" name="user_subject" />
                            <input type="email" placeholder="Email" name="user_email" />
                            <textarea name="user_message" rows="5" placeholder="Message contact"></textarea>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Contact
