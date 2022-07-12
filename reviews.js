import React from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Reviews = (review) => {
  const { id } = useParams();
  const [name, setname] = useState("");
  const [data, setdata] = useState([]);
  const [rating, setRating] = useState(0);
  const [message, setmessage] = useState("");
  const [isloading, setisloading] = useState(false);
  const history = useHistory();

  const handleRating = (rate) => {
    setRating(rate);
  };
  // const slider = function () {
  //   const slides = document.querySelectorAll(".slide");
  //   const btnLeft = document.querySelector(".slider__btn--left");
  //   const btnRight = document.querySelector(".slider__btn--right");
  //   const dotContainer = document.querySelector(".dots");

  //   let curSlide = 0;
  //   const maxSlide = slides.length;

  //   // Functions
  //   const createDots = function () {
  //     slides.forEach(function (_, i) {
  //       dotContainer.insertAdjacentHTML(
  //         "beforeend",
  //         `<button class="dots__dot" data-slide="${i}"></button>`
  //       );
  //     });
  //   };

  //   const activateDot = function (slide) {
  //     document
  //       .querySelectorAll(".dots__dot")
  //       .forEach((dot) => dot.classList.remove("dots__dot--active"));

  //     document
  //       .querySelector(`.dots__dot[data-slide="${slide}"]`)
  //       .classList.add("dots__dot--active");
  //   };

  //   const goToSlide = function (slide) {
  //     slides.forEach(
  //       (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  //     );
  //   };

  //   // Next slide
  //   const nextSlide = function () {
  //     if (curSlide === maxSlide - 1) {
  //       curSlide = 0;
  //     } else {
  //       curSlide++;
  //     }

  //     goToSlide(curSlide);
  //     activateDot(curSlide);
  //   };

  //   const prevSlide = function () {
  //     if (curSlide === 0) {
  //       curSlide = maxSlide - 1;
  //     } else {
  //       curSlide--;
  //     }
  //     goToSlide(curSlide);
  //     activateDot(curSlide);
  //   };

  //   const init = function () {
  //     goToSlide(0);
  //     createDots();

  //     activateDot(0);
  //   };
  //   init();

  //   // Event handlers
  //   btnRight.addEventListener("click", nextSlide);
  //   btnLeft.addEventListener("click", prevSlide);

  //   document.addEventListener("keydown", function (e) {
  //     if (e.key === "ArrowLeft") prevSlide();
  //     e.key === "ArrowRight" && nextSlide();
  //   });

  //   dotContainer.addEventListener("click", function (e) {
  //     if (e.target.classList.contains("dots__dot")) {
  //       const { slide } = e.target.dataset;
  //       goToSlide(slide);
  //       activateDot(slide);
  //     }
  //   });
  // };
  // slider();

  const handlesubmit = (e) => {
    e.preventDefault();

    var review = { name, message, rating };
    setisloading(true);

    fetch("http://localhost:8001/review", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        console.log("new enquiry sent");
        setisloading(false);
        // history.go(-1);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
    //redirect to home page
    // window.location.href = "/";
  };

  // const getreviews = () => {
  //   setisloading(true);
  //   fetch("http://localhost:8001/review", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setdata(data);
  //       // console.log(data);
  //       setisloading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // getreviews();

  return (
    <div className="create">
      <h2>How was your experience!</h2>
      <form onSubmit={handlesubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        ></input>

        <label>Message</label>
        <textarea
          required
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        ></textarea>
        <div className="rating">
          <Rating
            onClick={handleRating}
            ratingValue={rating} /* Available Props */
          />
        </div>

        {!isloading && <button>Submit</button>}
        {isloading && <button restricted>Submitting review...</button>}
      </form>
      <div>
        <h2>{name}</h2>
        <p>{message}</p>
        <p> {rating} </p>
      </div>
      {/* <div className="review">
        {data.map((reviews) => (
          <div key={reviews.id}>
            <Link to={`Reviews/${reviews.name}`}>
              <div className="review-view">
                <h3>{reviews.name}</h3>
                <p>{reviews.message}</p>
                <p>Rating: {reviews.rating}</p>
              </div>
            </Link>
          </div>
        ))}
      </div> */}
      <div className="slider">
        <div className="slide">
          <div className="testimonial">
            {data.map((reviews) => (
              <div key={reviews.id}>
                <Link to={`Reviews/${reviews.name}`}></Link>
                <h5 className="testimonial__header">{reviews.name}</h5>
                <p className="testimonial__text">{reviews.message}</p>

                <h6 className="testimonial__name">Rating: {reviews.rating}</h6>
              </div>
            ))}
          </div>
        </div>

        <button className="slider__btn slider__btn--left">&larr;</button>
        <button className="slider__btn slider__btn--right">&rarr;</button>
        <div className="dots"></div>
      </div>
    </div>
  );
};

export default Reviews;
