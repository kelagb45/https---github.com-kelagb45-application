import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/ash.jpg";
import AVTR2 from "../../assets/ima.png";
import AVTR3 from "../../assets/image.jpg";
import AVTR4 from "../../assets/keli.jpg";

// import Swiper core and required modules


const data = [
  {
    avatar: AVTR1,
    name: "Ekema Ashley",
    review:
      "I was so happy with the photos that kelly took of my wedding. she captured the day perfectly and I will cherish her forever.",
  },
  {
    avatar: AVTR2,
    name: "Brenda",
    review:
      "kelly is a true artist. she has a great eye for composition and lighting, and she knows how to capture the beauty in every moment.",
  },
  {
    avatar: AVTR3,
    name: "Malando Tina",
    review:"I was very happy with the work that kelly did on my website. she was able to take my vision and turn it into a reality. The website is exactly what I wanted and it looks great. I would definitely recommend kellyShots to anyone who is looking for a web developer.",
  },
  {
    avatar: AVTR4,
    name: "Makoun Glory",
    review:"kelly was very easy to work with. shee was always responsive to my feedback and she was always willing to make changes to the content until I was happy with the results.",
  },
];
 
function Testimonials () {

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      
      <div>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;