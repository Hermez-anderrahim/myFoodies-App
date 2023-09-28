import React from 'react'
import "./Cards.css"
export const Cards = () => {

  const  offset = window.scrollY
  
  return (

<div className='card'>
    <div className='photo'></div>
 <div className='info'>
     <div className='container'>
        <h2>name</h2>
    
        <div className='rating'>

        <div className='rating-number'>5.0</div>
           <div className='rating-star'><svg xmlns="http://www.w3.org/2000/svg" width="49" height="38" viewBox="0 0 49 38" fill="none">
             <path d="M11.9169 34.8333L15.1705 23.7104L4.25851 16.2292L18.6744 15.2396L24.2805 4.75L29.8867 15.2396L44.3025 16.2292L33.3905 23.7104L36.6441 34.8333L24.2805 28.9354L11.9169 34.8333Z" fill="#FFC700"/>
             </svg>
           </div>
        </div>
    

    <div className='open-like'>
           <div className='available'>open</div>
           <div className='like'><svg xmlns="http://www.w3.org/2000/svg" width="49" height="43" viewBox="0 0 49 43" fill="none">
             <path d="M24.6208 33.8604L24.4167 34.0396L24.1921 33.8604C14.4942 26.1383 8.08333 21.0321 8.08333 15.8542C8.08333 12.2708 11.1458 9.58333 15.2292 9.58333C18.3733 9.58333 21.4358 11.375 22.5179 13.8117H26.3154C27.3975 11.375 30.46 9.58333 33.6042 9.58333C37.6875 9.58333 40.75 12.2708 40.75 15.8542C40.75 21.0321 34.3392 26.1383 24.6208 33.8604ZM33.6042 6C30.0517 6 26.6421 7.45125 24.4167 9.72667C22.1912 7.45125 18.7817 6 15.2292 6C8.94083 6 4 10.3179 4 15.8542C4 22.6087 10.9417 28.145 21.4562 36.5121L24.4167 38.8771L27.3771 36.5121C37.8917 28.145 44.8333 22.6087 44.8333 15.8542C44.8333 10.3179 39.8925 6 33.6042 6Z" fill="white"/>
             </svg>
           </div>
     </div>
    

     </div>
 </div>

 

 </div>
  )
}
