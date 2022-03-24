import React from 'react'
import styles from '@/components/About/AboutContent/AboutContent.module.css'

const AboutContent = () => {
    return (
        <>
            <div className={styles.aboutArea}>
                <div className="container ptb-100">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            {/* <div className={styles.aboutContent}>
                                <span>ABOUT OUR COMPANY9898</span>
                                <h3>We formed the IT service in 2005 based on client requirements</h3>
                                <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.</p>

                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className={styles.contentBox}>
                                            <div className={styles.icon}>
                                                <i className="flaticon-customer-service"></i>
                                            </div>
                                            <h4>24/7 User support</h4>
                                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className={styles.contentBox}>
                                            <div className={styles.icon}>
                                                <i className="flaticon-experience"></i>
                                            </div>
                                            <h4>16 Years of experience</h4>
                                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

<div className={styles.aboutContent}>
                                <span>ABOUT OUR COMPANY</span>
                                <h3>We formed the IT service in 2021 based on client requirements</h3>
                                <p>
                                We are trying to be the best Web & Software Technology Services based company in India. We have been working in the Information and Communications Technology (ICT) sector of India since 2021. Initiative iT Solution works in several IT sectors with a skilled expert workforce. We possess the experience and expertise to help web entrepreneurs reach their customers across the digital space. We believe in minimizing the effort from the client and maximizing the value of services delivered. The Company has been promoted by some highly experienced Professionals dedicated to provide total IT solutions under one roof. We are providing not only the latest technology gadgets but also the most knowledgeable and experienced hands to offer most user friendly customized solutions. Initiative iT Solution provides high-quality on-site services for web development and the end users on a broad range of web design & development platforms and latest technologies.
                                </p>

                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className={styles.contentBox}>
                                            <div className={styles.icon}>
                                                <i className="flaticon-customer-service"></i>
                                            </div>
                                            <h4>24/7 User support</h4>
                                            <p>...</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className={styles.contentBox}>
                                            <div className={styles.icon}>
                                                <i className="flaticon-experience"></i>
                                            </div>
                                            <h4>16 Years of experience</h4>
                                            <p>
...                                                </p>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className={styles.aboutBtn}>
                                    <Link href="/about">
                                        <a className="default-btn">Learn more</a>
                                    </Link>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className={styles.aboutImage}>
                                <img 
                                    src="/images/about/about-1.jpg" 
                                    alt="About Image" 
                                />
                                <div className={styles.sinceText}>
                                    <span>Since 2005</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutContent;