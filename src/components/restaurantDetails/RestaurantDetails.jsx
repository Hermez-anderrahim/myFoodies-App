import React from "react";
import "./RestaurantDetails.css";
import { useParams } from "react-router-dom";

export const RestaurantDetails = ({ restaurant, handelLikeCick }) => {
  const ResData = [
    {
      id: "1",
      name: "The Gourmet Hut",
      rating: "4.5",
      photo: {
        images: {
          large: {
            url: "https://example.com/photo1_large.jpg",
          },
        },
      },
      is_closed: false,
      address_obj: {
        country: "USA",
      },
      liked: true,
    },
    {
      id: "2",
      name: "Cafe Delight",
      rating: "4.2",
      photo: {
        images: {
          large: {
            url: "https://example.com/photo2_large.jpg",
          },
        },
      },
      is_closed: true,
      address_obj: {
        country: "Canada",
      },
      liked: false,
    },
    {
      id: "3",
      name: "Sushi World",
      rating: "4.8",
      photo: {
        images: {
          large: {
            url: "https://example.com/photo3_large.jpg",
          },
        },
      },
      is_closed: false,
      address_obj: {
        country: "Japan",
      },
      liked: true,
    },
  ];
  const { id } = useParams();

  // let ResData;
  // ResData = restaurant[id]

  if (ResData && ResData[id]) {
    return (
      <div className="Details">
        <div className="more-info">
          <div className="res-image">
            <img
              src={`${ResData.photo ? ResData.photo.images.large.url : ""}`}
            />
          </div>
          <div className="description">
            <div className="first-line">
              <div className="res-name">{ResData.name}</div>
              <div className="rating">
                <div className="rating-number2">{ResData.rating}</div>
                <div className="rating-star2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 49 38"
                    fill="none"
                  >
                    <path
                      d="M11.9169 34.8333L15.1705 23.7104L4.25851 16.2292L18.6744 15.2396L24.2805 4.75L29.8867 15.2396L44.3025 16.2292L33.3905 23.7104L36.6441 34.8333L24.2805 28.9354L11.9169 34.8333Z"
                      fill="#FFC700"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 49 38"
                    fill="none"
                  >
                    <path
                      d="M11.9169 34.8333L15.1705 23.7104L4.25851 16.2292L18.6744 15.2396L24.2805 4.75L29.8867 15.2396L44.3025 16.2292L33.3905 23.7104L36.6441 34.8333L24.2805 28.9354L11.9169 34.8333Z"
                      fill="#FFC700"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 49 38"
                    fill="none"
                  >
                    <path
                      d="M11.9169 34.8333L15.1705 23.7104L4.25851 16.2292L18.6744 15.2396L24.2805 4.75L29.8867 15.2396L44.3025 16.2292L33.3905 23.7104L36.6441 34.8333L24.2805 28.9354L11.9169 34.8333Z"
                      fill="#FFC700"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 49 38"
                    fill="none"
                  >
                    <path
                      d="M11.9169 34.8333L15.1705 23.7104L4.25851 16.2292L18.6744 15.2396L24.2805 4.75L29.8867 15.2396L44.3025 16.2292L33.3905 23.7104L36.6441 34.8333L24.2805 28.9354L11.9169 34.8333Z"
                      fill="#FFC700"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="delivery">delivery: available</div>
            <div className="delivery">work hours: 9:00am - 12pm </div>
            <div className="delivery">
              open:{ResData.is_closed ? "No" : "Yes"}
            </div>
            <div className="delivery">location : Algeria</div>

            {/* <button className="like" onClick={() => handelLikeCick(id)}>
              {ResData.liked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="33"
                  viewBox="0 0 40 33"
                  fill="none"
                >
                  <path
                    d="M20 33L17.1 30.6262C6.8 22.2278 0 16.6708 0 9.89101C0 4.33406 4.84 0 11 0C14.48 0 17.82 1.45668 20 3.7406C22.18 1.45668 25.52 0 29 0C35.16 0 40 4.33406 40 9.89101C40 16.6708 33.2 22.2278 22.9 30.6262L20 33Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49"
                  height="43"
                  viewBox="0 0 49 43"
                  fill="none"
                >
                  <path
                    d="M24.6208 33.8604L24.4167 34.0396L24.1921 33.8604C14.4942 26.1383 8.08333 21.0321 8.08333 15.8542C8.08333 12.2708 11.1458 9.58333 15.2292 9.58333C18.3733 9.58333 21.4358 11.375 22.5179 13.8117H26.3154C27.3975 11.375 30.46 9.58333 33.6042 9.58333C37.6875 9.58333 40.75 12.2708 40.75 15.8542C40.75 21.0321 34.3392 26.1383 24.6208 33.8604ZM33.6042 6C30.0517 6 26.6421 7.45125 24.4167 9.72667C22.1912 7.45125 18.7817 6 15.2292 6C8.94083 6 4 10.3179 4 15.8542C4 22.6087 10.9417 28.145 21.4562 36.5121L24.4167 38.8771L27.3771 36.5121C37.8917 28.145 44.8333 22.6087 44.8333 15.8542C44.8333 10.3179 39.8925 6 33.6042 6Z"
                    fill="white"
                  />
                </svg>
              )}
            </button> */}
            <button className="getStarted">
              <div className="innerText">Book food</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
};
