import React from 'react'
import styles from '@/components/Contact/ContactInfo/ContactInfo.module.css'

const ContactInfo = () => {
    return (
        <>
            <div className={styles.contactGetInTouch}>
                <h3>Get in touch</h3>

                <div className={styles.innerBox}>
                    <div className={styles.icon}>
                        <i className="flaticon-pin"></i>
                    </div>
                    <span>Address :</span>
                    <p> 12, Rustomjee Globle City, Virar(W), Mumbai(M.H), India - 401303    </p>
                </div>

                <div className={styles.innerBox}>
                    <div className={styles.icon}>
                        <i className="flaticon-call"></i>
                    </div>
                    <span>Phone :</span>
                    <p><a href="tel:+919316799050">+91-9316799050</a></p>
                </div>

                <div className={styles.innerBox}>
                    <div className={styles.icon}>
                        <i className="flaticon-email"></i>
                    </div>
                    <span>Email :</span>
                    <p><a href="mailto:inquiry@iits.in">inquiry@iits.in</a></p>
                </div>
            </div>
        </>
    )
}

export default ContactInfo;