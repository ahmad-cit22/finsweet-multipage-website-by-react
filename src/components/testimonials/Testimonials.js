import React from 'react'
import Slider from 'react-slick';
import './testimonials.css'

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="carouselIcon carouselIconPrev"
            onClick={onClick}
        >
            <i className="fa-solid fa-angle-left"></i>
        </div>
    );
}

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="carouselIcon carouselIconNext"
            onClick={onClick}
        >
            <i className="fa-solid fa-angle-right"></i>
        </div>
    );
}

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1800,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 800,
        autoplaySpeed: 6500,
        cssEase: "ease-out",
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        appendDots: dots => (
            <div style={{
                justifyContent: "center",
                display: "flex",
            }}
            >
                <ul style={{
                    margin: "0px",
                    listStyle: "none",
                    display: "flex",
                    columnGap: "8px",
                }}>
                    {dots}
                </ul>
            </div>
        ),


    };

    return (
        <div className="testimonials">
            <div className="container testimonialBox commonPadding display-flex">
                <div className="testimonialPart1">
                    <h1 className="textBig">What our clients say about us</h1>
                    <p className="textSmall">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
                <div className="testimonialPart2">
                    <Slider {...settings}>
                        <div className='slideItem'>
                            <div>
                                <h1 className="textBig">"The best agency we’ve worked with so far. They understand our product and are able
                                    to
                                    add new features with a great focus."
                                </h1>
                                <div className="testimonialFooter display-flex">
                                    <div className="customer display-flex">
                                        <img src="images/testimonialImg1.jpg" alt="testimonialImg" />
                                        <div>
                                            <p className="textSmall customerName textMedium">Jericho Wilson</p>
                                            <p className="customerDes">Vice President</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='slideItem'>
                            <h1 className="textBig">"The best agency we’ve worked with so far. They understand our product and are able
                                to
                                add new features with a great focus."
                            </h1>
                            <div className="testimonialFooter display-flex">
                                <div className="customer display-flex">
                                    <img src="images/testimonialImg1.jpg" alt="testimonialImg" />
                                    <div>
                                        <p className="textSmall customerName textMedium">Jericho Wilson</p>
                                        <p className="customerDes">Vice President</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='slideItem'>
                            <h1 className="textBig">"The best agency we’ve worked with so far. They understand our product and are able
                                to
                                add new features with a great focus."
                            </h1>
                            <div className="testimonialFooter display-flex">
                                <div className="customer display-flex">
                                    <img src="images/testimonialImg1.jpg" alt="testimonialImg" />
                                    <div>
                                        <p className="textSmall customerName textMedium">Jericho Wilson</p>
                                        <p className="customerDes">Vice President</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='slideItem'>
                            <h1 className="textBig">"The best agency we’ve worked with so far. They understand our product and are able
                                to
                                add new features with a great focus."
                            </h1>
                            <div className="testimonialFooter display-flex">
                                <div className="customer display-flex">
                                    <img src="images/testimonialImg1.jpg" alt="testimonialImg" />
                                    <div>
                                        <p className="textSmall customerName textMedium">Jericho Wilson</p>
                                        <p className="customerDes">Vice President</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials