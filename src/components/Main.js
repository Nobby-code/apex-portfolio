import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

//swiper slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
// import Profile2 from '../Images/apex3.jpg'
import Brand from '../Images/brand.jpg'
import Marketing from '../Images/consumerMarketing.jpg'
import Communication from '../Images/corporateCommunication.jpg'
import Digital from '../Images/digitalMarketing.jpg'
import Etiquette from '../Images/etiquetteTraining.jpg'
import Event from '../Images/eventManagement.jpg'
import Food from '../Images/foodStuff.jpg'
import Supplies from '../Images/officeSupplies.jpg'
import Public from '../Images/publicRelations.jpg'
import Profile2 from '../Images/profile.jpg'
import Logo2 from '../Images/logo2.png'
import { FaPhoneAlt, FaEnvelope, FaMapMarker, FaTimes, FaBars } from 'react-icons/fa'
// import { faBullseye } from '@fortawesome/free-solid-svg-icons';

const Main = () => {

    const aboutRef = useRef(null);
    const homeRef = useRef(null);
    const resumeRef = useRef(null);
    // const techRef = useRef(null);
    const contRef = useRef(null);

    //handle navbar on scroll
    const [scroll, setScroll] = useState({
        y: 0,
        lastY: 0

    });
    const [shownav, setShownav] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(prevState => {
                return {
                    y: window.scrollY,
                    lastY: prevState.y
                }
            })
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)

    }, []);

    useEffect(() => {
        // console.log(scroll)

        if (scroll.y > 100) {
            setShownav(true)
        } else {
            setShownav(false)
        }
    }, [scroll])

    useEffect(() => {
        AOS.init({ duration: 1500 })
    }, []);

    //Toggle menu
    const [activeMenu, setActiveMenu] = useState(false);



    function handleAbout() {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    function handleHome() {
        homeRef.current.scrollIntoView({ bahavior: 'smooth' });
    }

    function handleResume() {
        resumeRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    function handleContact() {
        contRef.current.scrollIntoView({ behavior: 'smooth' });
        console.log("clicked");
    }
    // "my-header hideHeader"

    return (
        <div className='container'>
            <div className={shownav ? 'my-header hideHeader' : 'my-header'}>
                <div className='logo-and-bar'>
                    <button className='bars'
                        onClick={() => setActiveMenu(!activeMenu)}>
                        {activeMenu ? <FaTimes /> : <FaBars />}

                    </button>
                    {/* <div>Logo</div> */}
                    <div className="my-logo">
                        <img src={Logo2} />
                        <p>APEX EAGLE ENTERPRISE LIMITED</p>
                    </div>
                </div>
                {/* <nav className="hidden-menu">
                    <a onClick={handleHome}>Home</a>
                    <a onClick={handleAbout}>About Me</a>
                    <a onClick={handleResume}>Resume</a>
                    <a onClick={handleContact}>Get In Touch</a>
                </nav> */}
                <nav className={activeMenu ? "hidden-menu" : "my-navs"}
                    onClick={() => setActiveMenu(false)}
                >
                    <a onClick={handleHome}>Home</a>
                    <a onClick={handleAbout}>About Me</a>
                    <a onClick={handleResume}>Services</a>
                    {/* <a onClick={handleTech}>Technologies</a> */}
                    <a onClick={handleContact}>Get In Touch</a>
                </nav>
            </div>
            <div ref={homeRef} className="home page">
                <div className='personal-det'>
                    <h3 className='name'>COMPANY OVERVIEW</h3>
                    <br />
                    <div className='o-view'>
                        <div>
                            <div>
                                <h3 className='name'><span>Company Name: </span>Apex Eagle Enterprises Limited</h3>
                            </div>
                            <br />
                            <div>
                                <h3 className='name'><span>Business Address: </span>P.O BOX 8645-00100, Nairobi, Kenya</h3>
                            </div>
                            <br />
                            <div>
                                <h3 className='name'><span>Tel: </span>0733644025</h3>
                            </div>
                            <br />
                            <div>
                                <h3 className='name'><span>Email: </span>apexeagleltd@gmail.com</h3>
                            </div>
                            <br />
                            <div>
                                <h3 className='name'><span>website: </span>www.apexeagle.com</h3>
                            </div>
                        </div>
                    </div>
                    {/* <p className='description-para'>I’m a creative UI/UX designer and web applications developer.
                        <br />
                        I also do CRUD backed
                    </p>
                    <h4>Let's build something profesional</h4> */}
                    <br />
                    <button onClick={handleContact} className='hire-btn'>Contact Us</button>
                    <br />
                    <br />
                    <div className='social-media'>
                        {/* <ul className='social-links'>
                            <li><a href="https://www.facebook.com/gudah.norbert" target="_blank" rel="noreferrer"><em><FaFacebook /></em><span>Facebook</span></a></li>
                            <li><a href="https://twitter.com/home" target="_blank" rel="noreferrer"><em><FaTwitter /></em><span>Twitter</span></a></li>
                            <li><a href="https://www.instagram.com/?utm_source=op_m_sd" target="_blank" rel="noreferrer"><em><FaInstagram /></em><span>Instagram</span></a></li>
                        </ul> */}
                        <img src={Profile2} data-aos="zoom-in" alt='' />
                    </div>
                </div>
                <div className='profile-image'>
                    {/* <img src={Profile} />
                    <img src={Communication} />
                    <img src={Public} /> */}
                    <Swiper
                        modules={[Navigation, EffectFade, Pagination, Autoplay]}
                        navigation
                        autoplay={true}
                        effect='fade'
                        speed={2000}
                        slidesPerView={2}
                        loop
                        pagination={{ clickable: true }}
                    //   className='profile-image'
                    >
                        <SwiperSlide className='my-slider'>
                            <h3>Office Supplies</h3>
                            <img src={Supplies} alt='' />
                        </SwiperSlide>
                        <SwiperSlide className='my-slider'>
                            <h3>Stakeholder Engagement</h3>
                            <img src={Communication} alt='' />
                        </SwiperSlide>
                        <SwiperSlide className='my-slider'>
                            <h3>Policy Communication</h3>
                            <img src={Public} alt='' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>


            <div ref={resumeRef} className="page resume">
                <h4 className='resume-header'>Our Solutions</h4>
                <div className='sol'>
                    <div className='solutions'>
                        <div className='solution-details'>
                            <h3>CORPORATE COMMUNICATIONS</h3>
                            <p>
                                We help businesses communicate effectively with
                                their employees, shareholders, and other
                                stakeholders. It includes creating messaging,
                                handling internal communications, and managing
                                public-facing announcements
                            </p>
                        </div>
                        <div className='img-div'>
                            <img src={Communication} alt="" data-aos="slide-up" />
                        </div>
                    </div>
                    <div className='horizontal'></div>
                    <div className='solutions solution-rev'>
                        <div className='img-div'>
                            <img src={Brand} alt="" data-aos="slide-right" />
                        </div>
                        <div className='solution-details' data-aos="zoom-in">
                            <h3>BRAND & IMAGE MANAGEMENT</h3>
                            <p>
                                Apex focuses on building and maintaining a positive
                                image and reputation for a brand. It includes creating
                                a brand strategy, developing brand guidelines, and
                                managing brand communication across various
                                channels.
                            </p>
                        </div>
                    </div>
                    <div className='horizontal1'></div>
                    <div className='solutions' data-aos="zoom-in">
                        <div className='solution-details'>
                            <h3>DIGITAL MARKETING</h3>
                            <p>
                                Apex helps businesses reach their target audience
                                through online channels such as social media, search
                                engines, and email marketing. It includes creating
                                digital advertising campaigns, managing social media
                                accounts, and developing content marketing
                                strategies.
                            </p>
                        </div>
                        <div className='img-div'>
                            <img src={Digital} alt="" />
                        </div>
                    </div>
                    <div className='horizontal'></div>
                    <div className='solutions solution-rev'>
                        <div className='img-div'>
                            <img src={Public} alt="" />
                        </div>
                        <div className='solution-details'>
                            <h3>MEDIA RELATIONS & MOBILIZATION
                            </h3>
                            <p>
                                Apex helps businesses interact with the media and
                                mobilize their audiences to achieve their
                                communication goals. It includes developing media
                                relations strategies, conducting media outreach, and
                                organizing media events.
                            </p>
                        </div>

                    </div>
                    <div className='horizontal'></div>
                    <div className='solutions'>
                        <div className='solution-details'>
                            <h3>POLICY COMMUNICATION</h3>
                            <p>
                                We help businesses communicate their policy
                                positions to various stakeholders, including
                                government officials, industry associations, and the
                                public. It includes developing policy positions,
                                creating advocacy strategies, and organizing
                                advocacy campaigns.
                            </p>
                        </div>
                        <div className='img-div'>
                            <img src={Communication} alt='' />
                        </div>
                    </div>
                    <div className='horizontal'></div>
                    <div className='solutions solution-rev'>
                        <div className='img-div'>
                            <img src={Public} alt='' />
                        </div>
                        <div className='solution-details'>
                            <h3>PUBLIC RELATIONS & STAKEHOLDER
                                ENGAGEMENT</h3>
                            <p>
                                Apex helps businesses build and maintain
                                relationships with their stakeholders, including
                                customers, employees, investors, and the media. It
                                includes developing communication strategies,
                                creating engaging content, and managing
                                stakeholder relationships.
                            </p>
                        </div>
                    </div>
                    <div className='horizontal'></div>
                    <div className='solutions'>
                        <div className='solution-details'>
                            <h3>CONSUMER MARKETING</h3>
                            <p>
                                Apex helps businesses promote their products and
                                services to consumers through various marketing
                                channels, including advertising, promotions, and
                                content marketing. It includes developing marketing
                                strategies, creating marketing materials, and
                                managing marketing campaigns.
                            </p>
                        </div>
                        <div className='img-div'>
                            <img src={Marketing} alt='' />
                        </div>
                    </div>
                    <div className='horizontal'></div>
                    <div className='solutions solution-rev'>
                        <div className='img-div'>
                            <img src={Etiquette} alt='' />
                        </div>
                        <div className='solution-details'>
                            <h3>ETIQUETTE TRAINING</h3>
                            <p>
                                We help individuals and businesses learn how to
                                behave professionally in various social and business
                                situations. It includes teaching proper etiquette for
                                networking, business meetings, and social events.
                            </p>
                        </div>

                    </div>
                    <div className='horizontal'></div>
                    <div className='solutions'>
                        <div className='solution-details'>
                            <h3>EVENT MANAGEMENT</h3>
                            <p>
                                Apex helps businesses plan and execute events,
                                including conferences, product launches, and
                                corporate parties. It includes event planning,
                                budgeting, and execution, as well as coordinating
                                with vendors and managing logistics.
                            </p>
                        </div>
                        <div className='img-div'>
                            <img src={Event} alt='' />
                        </div>
                    </div>
                    <div className='horizontal'></div>
                    <div className='solutions solution-rev' data-aos="zoom-out">
                        <div className='img-div'>
                            <img src={Food} alt='' />
                        </div>
                        <div className='solution-details'>
                            <h3>FOODSTUFFS SUPPLIES
                            </h3>
                            <p>
                                Non-perishable foods, also known as "shelf-stable"
                                foods, are items that can be safely stored at room
                                temperature. In order for perishable foods such as
                                vegetables to become non-perishable, they need to
                                be dried or treated by heat to destroy any foodborne
                                bugs that could lead to spoilage or cause an illness.
                                Then, this food can be packaged in sterile, airtight
                                containers such as cans. It's worth noting that
                                preservation of these items is crucial; all foods will
                                eventually spoil if they have not been properly
                                preserved. No matter where you live, what your
                                financial situation looks like, or how safe you think
                                your home is, it never hurts to stock up on all the
                                items on a basic list of non-perishable foods.
                            </p>
                        </div>
                    </div>
                    <div className='horizontal'></div>
                </div>
            </div>
            {/* <div ref={techRef} className="page">
                Technologies
            </div> */}
            <div ref={aboutRef} className="about page">
                {/* <h4 className='about-header'>Our Highlights</h4> */}
                <div className='about-div'>

                    <div className='about-info'>
                        <h3 className='about-header'>About Us</h3>
                        <p>
                            Apex Eagle Enterprise Limited is a registered limited company
                            incorporated in the republic of Kenya, with a visionary focus to
                            strategically develop enterprise as the key drive for increased economic
                            opportunities.
                        </p>
                        <p>
                            Apex Eagle enterprise limited is an integrated marketing communication
                            agency that elevates brands above their competition, delivering
                            marketing and PR services that improves sales, increases brand
                            awareness and grow organizations.
                        </p>
                        <p>
                            Apex Eagle Enterprises Limited delivers impactful integrated campaigns
                            providing high quality services across PR, social media management,
                            influencer marketing, email marketing, event management and many
                            more.
                        </p>



                        {/* <a href="CV.pdf" download="Norbert cv" className='cv-download'>
                            <button>Download CV </button>
                        </a> */}

                    </div>
                    <div className='vision'>

                        <h3>Company Vision</h3>
                        <p>
                            Apex Eagle Enterprises
                            Limited’s visionary focus
                            is to increase our market
                            share day by day through
                            serving the Kenyan
                            citizens, the existing and
                            the prospective
                            customers. Our company
                            desires to be recognized
                            as an effective efficient,
                            trustworthy, ethical as
                            well as a professional one
                            as far as our business
                            associates are concerned
                        </p>
                        <br />
                        <br />
                        <h3>Company Mission</h3>
                        <p>

                            Apex Eagle Enterprises
                            Limited’s mission is to be
                            an example by going
                            beyond the expectations
                            of our customers
                            enhanced by committed
                            professional and
                            self-starting members of
                            staff governed by team
                            work.
                        </p>
                    </div>
                </div>
                <div className='my-image'>
                    <img src={Public} alt="" data-aos="zoom-in" />
                </div>
                <div className='core-values'>
                    <div className='vertical'></div>
                    <div className='core-details'>
                        <h3>Our Core Values</h3>
                        <ul>
                            <li> Intergrity & professionalism</li>
                            <li>Direct and open communication</li>
                            <li>Quality care</li>
                            <li>Promptness, fast response and speed</li>
                            <li>Team work and coordination</li>
                            <li>Flexibility and willingness to accept change</li>
                            <li>Cooperation</li>
                        </ul>
                        <h3>Our Commitment</h3>
                        <div>
                            Customer focus- Friendly responsive to the clients. We deliver solutions to meet our client’s
                            requirements
                            Integrity- We believe in individual and corporate honesty. We are accountable to our clients
                            and stake holders.
                            Responsibility- We believe the wellbeing of the community and environment is our collective responsibility. We practice good governance to deliver value of our clients, employees
                            and shareholders.
                            Recognition- We recognize talents and contribution of each staff of our company. We appreciate and reward excellence.
                        </div>
                        <h3>The Financial Capability</h3>
                        <div>
                            We have great financial capability to handle projects which require large capital outlay.
                        </div>
                    </div>
                </div>

            </div>

            <div ref={contRef} className="contacts page">
                {/* <h3 className='contacts-header'>Contacts</h3> */}
                <h4 className='contact-header'>Contact Us</h4>
                <div className='contacts-content'>
                    <div className='first-cont-info'>
                        <h2>For Enquiries, please get in touch with us...</h2>
                        <div className='my-contact'>
                            <ul className='my-contact-icons'>
                                <li><FaPhoneAlt /></li>
                                <li><FaEnvelope /></li>
                                <li><FaMapMarker /></li>
                            </ul>
                            <ul>
                                <li>0733644025</li>
                                <li>apexeagleltd@gmail.com</li>
                                <li>P.O Box 8645-00100, Nairobi, Kenya</li>
                            </ul>
                        </div>
                        {/* <h3 className='sites-header'>Social sites:</h3> */}
                        {/* <ul className='social-links'>
                            <li><a href='#' target="_blank" rel="noreferrer"><em><FaFacebook /></em><span>Facebook</span></a></li>
                            <li><a href='#' target="_blank" rel="noreferrer"><em><FaTwitter /></em><span>Twitter</span></a></li>
                            <li><a href='#' target="_blank" rel="noreferrer"><em><FaInstagram /></em><span>Instagram</span></a></li>
                        </ul> */}
                    </div>
                    <div className='mailing'>
                        <h3>Please mail us here</h3>
                        <form className="contacts-form">
                            <input type='text' placeholder='Name' required /> <br />
                            <input type='text' placeholder='Subject' required /> <br />
                            <input type='email' placeholder='Email' required /> <br />
                            <textarea cols='50' rows='8' placeholder='Message...' required /> <br />
                            <button className="contacts-button">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
            <div className='footer'>
                <img src={Logo2} alt="" />
                <p>Apex Eagle Enterprise Limited @copy; 2023</p>
            </div>
            <button onClick={() => window.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth',
            })} className='scroll-top'>scroll to top</button>
        </div>
    )
}

export default Main