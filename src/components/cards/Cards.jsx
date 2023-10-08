import React from 'react'
import "./Cards.css"
export const Cards = ({data,  handelLikeCick }) => {



  console.log(data)
  return (

<div className='card'>
 <div className='transparent'>
  <div className='hover-text'> 
     <div className='learn-more'>Learn more</div>
     <div className='arrow'><svg xmlns="http://www.w3.org/2000/svg" width="45" height="41" viewBox="0 0 45 41" fill="none">
     <path d="M29.5224 1.56183L43.3706 17.37C44.0582 18.1559 44.4444 19.2213 44.4444 20.3321C44.4444 21.4429 44.0582 22.5083 43.3706 23.2942L29.5249 39.1052C28.836 39.8916 27.9018 40.3333 26.9276 40.3333C25.9534 40.3333 25.0192 39.8916 24.3303 39.1052C23.6415 38.3189 23.2545 37.2524 23.2545 36.1403C23.2545 35.0282 23.6415 33.9617 24.3303 33.1754L31.9092 24.5238H3.67195C2.69808 24.5238 1.76411 24.0822 1.07549 23.2961C0.386865 22.51 0 21.4438 0 20.3321C0 19.2204 0.386865 18.1543 1.07549 17.3682C1.76411 16.5821 2.69808 16.1405 3.67195 16.1405H31.9092L24.3328 7.48885C23.6442 6.7025 23.2576 5.63614 23.2578 4.52435C23.258 3.41256 23.6451 2.3464 24.334 1.56043C25.0228 0.774458 25.957 0.333051 26.9309 0.333313C27.9049 0.333575 28.8388 0.775485 29.5273 1.56183H29.5224Z" fill="white"/>
     </svg></div>
   </div>
  </div>
    <div className='photo'><img src={`${data.photo ? data.photo.images.small.url :"../../assets/Rectangle.jpg"}`} /></div>
        <h2 className='name'>{data.name ? data.name : "restaurant"}</h2>
 <div className='info'>
     <div className='container'>
    
        <div className='rating'>

        <div className='rating-number'>{data.rating ? data.rating : "?.?"}</div>
           <div className='rating-star'><svg xmlns="http://www.w3.org/2000/svg" width="49" height="38" viewBox="0 0 49 38" fill="none">
             <path d="M11.9169 34.8333L15.1705 23.7104L4.25851 16.2292L18.6744 15.2396L24.2805 4.75L29.8867 15.2396L44.3025 16.2292L33.3905 23.7104L36.6441 34.8333L24.2805 28.9354L11.9169 34.8333Z" fill="#FFC700"/>
             </svg>
           </div>
        </div>
    

    <div className='open-like'>
           <div className='available'>{data.is_closed ? "closed" : "open"}</div>
           <div className='like' onClick={()=> handelLikeCick(data.id) }>{data.liked ? 
            
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="33" viewBox="0 0 40 33" fill="none">
             <path d="M20 33L17.1 30.6262C6.8 22.2278 0 16.6708 0 9.89101C0 4.33406 4.84 0 11 0C14.48 0 17.82 1.45668 20 3.7406C22.18 1.45668 25.52 0 29 0C35.16 0 40 4.33406 40 9.89101C40 16.6708 33.2 22.2278 22.9 30.6262L20 33Z" fill="white"/>
             </svg>
             
             :
             
              <svg xmlns="http://www.w3.org/2000/svg" width="49" height="43" viewBox="0 0 49 43" fill="none">
             <path d="M24.6208 33.8604L24.4167 34.0396L24.1921 33.8604C14.4942 26.1383 8.08333 21.0321 8.08333 15.8542C8.08333 12.2708 11.1458 9.58333 15.2292 9.58333C18.3733 9.58333 21.4358 11.375 22.5179 13.8117H26.3154C27.3975 11.375 30.46 9.58333 33.6042 9.58333C37.6875 9.58333 40.75 12.2708 40.75 15.8542C40.75 21.0321 34.3392 26.1383 24.6208 33.8604ZM33.6042 6C30.0517 6 26.6421 7.45125 24.4167 9.72667C22.1912 7.45125 18.7817 6 15.2292 6C8.94083 6 4 10.3179 4 15.8542C4 22.6087 10.9417 28.145 21.4562 36.5121L24.4167 38.8771L27.3771 36.5121C37.8917 28.145 44.8333 22.6087 44.8333 15.8542C44.8333 10.3179 39.8925 6 33.6042 6Z" fill="white"/>
             </svg>}
           </div>
     </div>
    

     </div>
 </div>

 

 </div>
  )
}

 

 
