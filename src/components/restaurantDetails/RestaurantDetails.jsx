import React from 'react'
import "./RestaurantDetails.css"


export const RestaurantDetails = () => {
  return (
    <div className='Details'>
      



      <div className='more-info'>
          <div className='res-image'></div>
          <div className='description'>
            
            
            <div className='first-line'>
             <div className='res-name'>tablati res</div>
             <div className='rating'><div className='rating-number'>5.0</div><div className='rating-star'><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 49 38" fill="none">
             <path d="M11.9169 34.8333L15.1705 23.7104L4.25851 16.2292L18.6744 15.2396L24.2805 4.75L29.8867 15.2396L44.3025 16.2292L33.3905 23.7104L36.6441 34.8333L24.2805 28.9354L11.9169 34.8333Z" fill="#FFC700"/>
             </svg></div></div>
            </div>


             <div className='delivery'>delivery: available</div>
             <div className='delivery'>work hours: time</div>
             <div className='delivery'>open:yes </div>
             <div className='delivery'>location</div>

          </div>
          </div>
    </div>
  )
}
