import React, { useState } from 'react'
import './faq.css'

const Faq = () => {
    let [accordionFAQ, setAccordionFAQ] = useState([
        {
            qs: 'How much time does it take?',
            ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            statusIcon: 'fa-solid fa-xmark',
            status: true
        },
        {
            qs: 'What is your class naming convention?',
            ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            statusIcon: 'fa-solid fa-plus',
            status: false
        },
        {
            qs: 'How do you communicate?',
            ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            statusIcon: 'fa-solid fa-plus',
            status: false
        },
        {
            qs: 'I have a bigger project. Can you handle it?',
            ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            statusIcon: 'fa-solid fa-plus',
            status: false
        },
        {
            qs: 'What is your class naming convention?',
            ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            statusIcon: 'fa-solid fa-plus',
            status: false
        }
    ]);

    const handleFAQ = (clickIndex) => {
        accordionFAQ.map((item, index) => {
            if (index == clickIndex) {
                item.status = true;
                item.statusIcon = 'fa-solid fa-xmark';
            } else {
                item.status = false;
                item.statusIcon = 'fa-solid fa-plus';
            }
            setAccordionFAQ([...accordionFAQ]);
        })
    }

    return (
        <div className="faq">
            <div className="container faqBox commonPadding display-flex">
                <div className="faqTxtBox">
                    <h1>Frequently asked questions</h1>
                    <a href="#">
                        <p>Contact us for more info</p>
                    </a>
                </div>
                <div className="faqQsBox">
                    {accordionFAQ.map((item, index) =>
                        <div className="faqQs display-flex">
                            <p>{index + 1 < 10 ? `0${index + 1}` : index + 1}</p>
                            <div className="qsField display-flex">
                                <p className="qs" onClick={() => handleFAQ(index)} >{item.qs}</p>
                                {item.status && <p className="ans">{item.ans}</p>}
                            </div>
                            <span><i className={item.statusIcon}></i></span>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Faq