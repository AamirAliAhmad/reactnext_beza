import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))
import styles from '@/components/Services/ServiceSliderStyle1/ServiceSlider.module.css'

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 500,
    margin: 25,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 4
        }
    }
};

// Service Card Content
const ServiceCardContent = [
    {
        //iconName: "flaticon-consulting",
        iconName: "flaticon-technical-support",
        title: "Software Development Services",
        shortDescription: "Your dream of developing software can come true with our skilled and experienced software engineers and programmers. Convert your innovative ideas into reality.",
        //viewDetailsLinkText: "Learn more",
        viewDetailsLink: "/services-details", 
    },
    {
        //iconName: "flaticon-product-design",
        iconName: "flaticon-technical-support",
        title: "E-commerce Service Provide",
        shortDescription: "We build powerful and easy to use B2B and B2C e-commerce solutions and offer end to end consulting service.",
        //viewDetailsLinkText: "Learn more",
        viewDetailsLink: "/services-details", 
    },
    {
        iconName: "flaticon-technical-support",
        title: "IT Support",
        shortDescription: "Descriptionss",
        //viewDetailsLinkText: "Learn more",
        viewDetailsLink: "/services-details", 
    },
    {
        //iconName: "flaticon-cyber-security",
        iconName: "flaticon-technical-support",
        title: "Support & Maintainance",
        shortDescription: "The maintenance & support coverage our team provides can apply to brand new web & mobile apps as well as legacy systems. In addition, to break fixes, system monitoring, and incident response, we allocate a special web support team to answer requests and provide free bug fixes for the first 60 days your product is live.",
        //viewDetailsLinkText: "Learn more",
        viewDetailsLink: "/services-details", 
    },
    {
        iconName: "flaticon-mobile-app",
        title: "App Development",
        shortDescription: "Large iT offers you an affordable front to end iphone, ipad and android application development services. Demand of Mobile Application is rising fast.",
        //viewDetailsLinkText: "Learn more",
        viewDetailsLink: "/services-details", 
    },
    {
        //iconName: "flaticon-ux-design",
        iconName: "flaticon-technical-support",
        title: "GIS & Remote Sensing (Geospatial)",
        shortDescription: "GIS Related workflows perform in business and agricultural sectors' intelligence.",
        //viewDetailsLinkText: "Learn more",
        viewDetailsLink: "/services-details", 
    },
    {
        iconName: "flaticon-web-development",
        title: "Web Development",
        shortDescription: "Our creative and expert web designers can develop your dream website based on your idea in an affordable price. A responsive website can make your business more successful",
        //viewDetailsLinkText: "Learn more",
        viewDetailsLink: "/services-details", 
    },
    {
        iconName: "flaticon-digital-marketing",
        //iconName: "flaticon-technical-support",
        title: "Digital Marketing",
        shortDescription: "A comprehensive and professional SEO services to get your business more visibility in search. Initiative It Solution uses trustworthy, future-proof and white-hat SEO techniques. We operate as an extension of your business by making your goals our goals.",
        //viewDetailsLinkText: "Learn more",
        viewDetailsLink: "/services-details", 
    },
    {
        //iconName: "flaticon-web-development",
        iconName: "flaticon-technical-support",
        title: "Testing & QA",
        shortDescription: "Initiative It Solution QA experts will help you establish robust testing processes, increase product quality and optimize software development lifecycle. We will ensure your software is secure, reliable, scalable and delivers a seamless customer experience.",
        //viewDetailsLinkText: "Learn more",
        viewDetailsLink: "/services-details", 
    },
]

const ServiceSlider = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <div className={styles.servicesArea}>
                <div className="container ptb-100">
                    <div className="section-title">
                        <span>WE PROVIDE SERVICES</span>
                        <h2 className={styles.colorWhite}>The kind of services that our company provides to our clients</h2>
                    </div>
 
                    {display ? <OwlCarousel 
                        className="services-slides owl-carousel owl-theme"
                        {...options}
                    >
                        {ServiceCardContent.map((val, i) => (
                            <div className={styles.singleServicesCard} key={i}>
                                <div className={styles.icon}>
                                    <i className={val.iconName}></i>
                                </div>
                                <h3>
                                    <Link href={val.viewDetailsLink}>
                                        <a>{val.title}</a>
                                    </Link>
                                </h3>
                                <p>{val.shortDescription}</p>
                                <Link href={val.viewDetailsLink}>
                                    <a className={styles.servicesBtn}>
                                        {val.viewDetailsLinkText}
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </OwlCarousel> : ''}
                </div>
            </div> 
        </>
    )
}

export default ServiceSlider;