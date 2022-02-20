import React from 'react'
import './Content.css'
import img1 from '../../img/elon.jpg'
import img2 from '../../img/elon_mini.jpg'

function Content(){
    return(
        <div className='content'>
            <div className='me'>
                <img src={img1}/>
                <p>Elon Musk</p>
            </div>
            <div className='posts'>
                <input placeholder='Enter the post'/>
                <button>To post</button>
                <div className='post'>
                    <img src={img2}/>
                    <span>Elon Musk</span>
                    <p>Hi Everyone</p>
                </div>
            </div>
        </div>
    )
}

export default Content