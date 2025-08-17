import React from "react";
import './Multicarousel.css';

function Review() {
  const reviews = [
    { title: "Revolutionized Our Customer Interactions", 
      text: '"24by7chat has completely transformed how we manage customer interactions. The Unified Inbox feature has streamlined our communication, allowing us to handle chats effortlessly, assign agents...' ,
      author:'Prithvi',
      letter:'P',
      position:'Customer Support Manager'
    },
    { title: "Broadcast Feature Boosted Our Campaigns", 
      text: '"The Broadcast feature of 24by7chat has revolutionized our outreach strategy. Sending bulk WhatsApp messages with customized templates is both efficient and effective. Our campaigns have see...', 
      author:'Shritha',
      letter:'S',
      position:'Marketing Director'
    },
    { title: "Customizable Chatbot Flows are a Game-Changer", 
      text: '"The Autobots feature is fantastic! We’ve created and customized chatbot flows that perfectly fit our business needs. Automating repetitive tasks and handling common inquiries has significantly improved...' ,
      author:'Rohit',
      letter:'R',
      position:'IT Solutions Architect'
    },
    { title: "Data-Driven Insights for Better Service", 
      text: '"What stands out about 24by7chat is its powerful Insights and Analysis feature. It offers detailed metrics on chat interactions and chatbot performance, helping us identify trends and measure customer...' ,
      author:'Kiran',
      letter:'K',
      position:'Customer Experience Specialist'
    },
    { title: "Unified Inbox and Broadcast are Essential", 
      text: '"24by7chat’s Unified Inbox and Broadcast features have been pivotal in refining our communication strategy. The ability to manage customer chats, broadcast messages in bulk, and analyze interactions...' ,
      author:'Sidharth',
      letter:'S',
      position:'Product Development Lead'
    },
    
  ];

  const groupSize = 3; // how many reviews per slide
  const slides = [];

  // Split reviews into groups of 3 for each slide
  for (let i = 0; i < reviews.length; i++) {
  const group = [];
  for (let j = 0; j < groupSize; j++) {
    group.push(reviews[(i + j) % reviews.length]); // wrap around
  }
  slides.push(group);
}

  return (
    <div className="container px-3 py-3 w-full" style={{ backgroundColor: "aqua" }}>
      <p className="text-center px-3 py-3 fs-3 fw-bold">
        Ov
        <span
          style={{
            textDecoration: "underline",
            textDecorationThickness: "3px",
            textUnderlineOffset: "5px",
            textDecorationColor: "#111",
          }}
        >
          er 8,000 custom
        </span>
        ers
      </p>
      <p className="text-center fw-bold fs-5">
        What some of our 8,000+ customers across 100+ countries think of
        24by7Chat.
      </p>
       
    <div id="multiItemCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {slides.map((group, idx) => (
          <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
            <div className="d-flex justify-content-between">
              {group.map((review, i) => (
                <div className="card shadow-sm border-0 rounded-3 mx-2" key={i} style={{ flex: "0 0 32%" }}>
  <div className="card-body d-flex flex-column">
    <h5 className="card-title fw-bold text-dark mb-2">{review.title}</h5>
    <p className="card-text text-muted mb-3 fst-italic text-center">{review.text}</p>

    <div className="d-flex align-items-center mt-auto">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" 
           fill="currentColor" className="bi bi-person-circle me-2 text-success" 
           viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8
          m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 
          4.805 10 8 10s4.757 1.225 5.468 2.37A7 
          7 0 0 0 8 1"/>
      </svg>
      <div>
        <p className="mb-0 fw-semibold">{review.author}</p>
        <small className="text-muted">{review.position}</small>
      </div>
    </div>
  </div>
</div>

              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#multiItemCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#multiItemCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>

    </div>
  );
}

export default Review;
