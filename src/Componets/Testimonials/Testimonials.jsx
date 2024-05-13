import React from 'react'
import '../Testimonials/Testimonials.css'
import Next_icon from '../../assets/next-icon.png'
import Back_icon from '../../assets/back-icon.png'
import User_1 from '../../assets/user-1.png'
import User_2 from '../../assets/user-2.png'
import User_3 from '../../assets/user-3.png'
import User_4 from '../../assets/user-4.png'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <img src={Next_icon} alt="" className='next-btn'/>
        <img src={Back_icon} alt="" className='back-btn'/>

        <div className="slider">
            <ul>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={User_1}alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                                <div>
                                    <p>
                                        Choosing to pursue my degree at Edusity was one of the best decisions 
                                        I've ever made. The supportive community, state-of-the-art facilities, and
                                        commitment to academic excellence have truly exceeded my expectations
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={User_2}alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                                <div>
                                    <p>
                                        Choosing to pursue my degree at Edusity was one of the best decisions 
                                        I've ever made. The supportive community, state-of-the-art facilities, and
                                        commitment to academic excellence have truly exceeded my expectations
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={User_3}alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                                <div>
                                    <p>
                                        Choosing to pursue my degree at Edusity was one of the best decisions 
                                        I've ever made. The supportive community, state-of-the-art facilities, and
                                        commitment to academic excellence have truly exceeded my expectations
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={User_4}alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                                <div>
                                    <p>
                                        Choosing to pursue my degree at Edusity was one of the best decisions 
                                        I've ever made. The supportive community, state-of-the-art facilities, and
                                        commitment to academic excellence have truly exceeded my expectations
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

        </div>

    </div>
  )
}

export default Testimonials
