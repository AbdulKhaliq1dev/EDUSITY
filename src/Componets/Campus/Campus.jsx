import React from 'react'
import '../Campus/Campus.css'
import Galary_1 from '../../assets/gallery-1.png'
import Galary_2 from '../../assets/gallery-2.png'
import Galary_3 from '../../assets/gallery-3.png'
import Galary_4 from '../../assets/gallery-4.png'
import White_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallary">
            <img src={Galary_1} alt="" />
            <img src={Galary_2} alt="" />
            <img src={Galary_3} alt="" />
            <img src={Galary_4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={White_arrow} alt="" /></button>
    </div>
  )
}

export default Campus