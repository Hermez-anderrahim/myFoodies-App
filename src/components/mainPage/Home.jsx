import React from "react";
import "./Home.css";
import { Cards } from "../cards/Cards";
import "animate.css";

import { Link } from "react-router-dom";

export const Home = ({ restaurant, setrestaurant }) => {
  const scrool = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };
  const resData = [
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
  //handle when the like button gets clicked
  //adding new items to the api object that can help earlier

  const newArray = Object.values(restaurant);

  const arrayWithIds = newArray.map((obj, index) => ({
    ...obj,
    id: index + 1,
  }));
  console.log(arrayWithIds);

  return (
    <div className="home">
      <div className="hero">
        <div className="Hero-text animate__animated animate__fadeInDown">
          Find the best
          <p className="text1">restaurant</p>
          in your area with
          <p className="text2">myFoodies</p>
        </div>

        <button className="getStarted">
          <div className="innerText" onClick={scrool}>
            Get started
          </div>
        </button>

        <div className="shade"></div>
        <div className="image"></div>
      </div>

      <div className="browsing">
        <h1 className="browse-title">your nearby restaurant</h1>
        <div className="search-bar">
          <input placeholder="find a restaurant" />
          <button className="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg``"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M40.8333 43.75L27.7083 30.625C26.6667 31.4583 25.4687 32.1181 24.1146 32.6042C22.7604 33.0903 21.3194 33.3333 19.7917 33.3333C16.0069 33.3333 12.8042 32.0222 10.1833 29.4C7.5625 26.7778 6.25139 23.575 6.25 19.7917C6.25 16.0069 7.56111 12.8042 10.1833 10.1833C12.8056 7.5625 16.0083 6.25139 19.7917 6.25C23.5764 6.25 26.7792 7.56111 29.4 10.1833C32.0208 12.8056 33.3319 16.0083 33.3333 19.7917C33.3333 21.3194 33.0903 22.7604 32.6042 24.1146C32.1181 25.4687 31.4583 26.6667 30.625 27.7083L43.75 40.8333L40.8333 43.75ZM19.7917 29.1667C22.3958 29.1667 24.6097 28.2549 26.4333 26.4312C28.2569 24.6076 29.1681 22.3944 29.1667 19.7917C29.1667 17.1875 28.2549 14.9736 26.4312 13.15C24.6076 11.3264 22.3944 10.4153 19.7917 10.4167C17.1875 10.4167 14.9736 11.3285 13.15 13.1521C11.3264 14.9757 10.4153 17.1889 10.4167 19.7917C10.4167 22.3958 11.3285 24.6097 13.1521 26.4333C14.9757 28.2569 17.1889 29.1681 19.7917 29.1667Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="Cards">
        {resData.map((item) => {
          return (
            <Link key={item.id} to={`/myfoodies/${item.id}`}>
              <Cards data={item} key={item.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
