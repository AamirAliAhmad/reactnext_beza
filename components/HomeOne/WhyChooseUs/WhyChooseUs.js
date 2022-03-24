import React from 'react'
import styles from '@/components/HomeOne/WhyChooseUs/WhyChooseUs.module.css'
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const WhyChooseUs = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />

            <div className={styles.chooseUsArea}>
                <div className="container ptb-100">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.chooseUsImage}>
                                <img 
                                    src="/images/choose/choose-1.jpg" 
                                    alt="Choose Image" 
                                />

                                <div className={styles.videoView}>
                                    <div
                                        onClick={e => {e.preventDefault(); openModal()}}
                                        className={styles.videoBtn}
                                    > 
                                        <i className="ri-play-fill"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className={styles.chooseUsContent}>
                                <span>WHY CHOOSE US</span>
                                <h3>Any IT related work solution can be easily found from us</h3>
                                <p>We believe to create imagination! Clients as we futures’ to build a strong relationship with our clients by filling their requirements and goals to set an example with 24*7 support among our competitors that we emphasized more on customer building and commitment than to create strong vision statements.</p>

                                <div className={styles.chooseInnerContent}>
                                    <div className={styles.icon}>
                                        <i className="flaticon-laptop"></i>
                                    </div>
                                    <h4>IT solution</h4>
                                    <p>We are giving you best solutions in very few steps quickly.</p>

                                    <ul className={styles.list}>
                                        <li>We <b>Design</b> for you.</li>
                                        <li>We <b>Develop</b> for you.</li>
                                        <li>We <b>Deliver</b> to you</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs;