import React from "react";
import './adv.css';
import { useNavigate } from "react-router-dom";


function Adv() {
  const navigate = useNavigate();
  const adv = [
    {
      image: "https://24by7chat.com/media/tWpOOTFfEPZg9vMlIIBNkTvFPprijsTt.png",
      adv: "Best Practices for Creating User-Friendly Chatbot Flows",
      content:
        "In an era where digital interaction is a cornerstone of business, chatbots have become essential tools for enhancing customer engagement and automating services. However, the effectiveness of a chatbot largely depends on the q...",
    },
    {
      image: "https://24by7chat.com/media/WsFGbxjiDPHnutov13kqPEWRVoRUT7de.png",
      adv: "Broadcast: Reach Your Audience with Precision",
      content:
        "In today’s fast-paced digital world, delivering the right message to the right audience at the right time is crucial for effective communication. 24by7chat’s Broadcast feature empowers you to do just th ...",
    },
    {
      image: "https://24by7chat.com/media/zn9S0cEXtN3nn3skWRwt4jQ69f42RH7S.jpg",
      adv: "Comprehensive Management: Tickets, Users, and Plans",
      content:
        "Efficient communication isn't just about interacting with customers—it's also about effectively managing the internal processes that support those interactions. 24by7chat's Comprehensive Management features provide ro ...",
    },
    {
      image: "https://24by7chat.com/media/VtvQHT6eNcaXxvYg5i132sj4zIFtETwV.jpg",
      adv: "Transform Your Business Automation with Autobots: Custom Chatbot Flows Explained",
      content:
        "In a world where efficiency and speed are paramount, automation is not just an advantage—it's a necessity. The Autobots feature by 24by7chat takes automation to the next level, allowing you to design and imple ...",
    },
    {
      image: "https://24by7chat.com/media/5Rddybe8QnwbImfp6eOldCq81KjPZ2IC.jpg",
      adv: "Transform Your Customer Interactions: WhatsApp Messaging Guidelines",
      content:
        "WhatsApp is a simple, secure and reliable way to send messages and make calls. No one, not even WhatsApp, can see your personal messages which are end-to-end encrypted by default.These Messaging Guidelines (these “Guidelines”) apply to ...",
    },
    {
      image: "https://24by7chat.com/media/a9dMFtcwaqfUtv0KMI4lA2DFFG9N3jtz.png",
      adv: "WhatsApp Business Terms of Service",
      content:
        "1. Introduction: You and the company or business that you are authorized to represent (“you,” “your,” or “Company”) agree to these WhatsApp Business Terms of Service and all other applicable terms, policies, and documentation (collective ...",
    },
    {
      image: "https://24by7chat.com/media/fyg5fIuaAhLLNwIOeFJotv9SWkiDCKpn.png",
      adv: "WhatsApp Business Messaging Policy Best Practices",
      content:
        "To effectively implement opt-in best practices, businesses must ensure that users are fully aware of the types of messages they will receive and how to manage their preferences. Here’s a detailed breakdown: 1. Setting Clear Expectations ...",
    },
    {
      image: "https://24by7chat.com/media/7Mh6xJS8CnYFkCAtaRKP19YItBj11t7a.jpg",
      adv: "Steps to Take if Your Account is Suspended or Terminated",
      content:
        "When your WhatsApp Business Account is suspended or terminated, it can be a significant disruption to your communication with customers. However, understanding the reasons behind such enforcement and knowing the steps to appeal can help you navigate this challenge effectively. Here's a detailed guide on wh",
    },
    {
      image: "https://24by7chat.com/media/cqJvOXtbg4rqc2OZTdEx4WTVxR8x5Jda.png",
      adv: "Policy for WhatsApp Commerce Features (including offering goods or services for sale)",
      content:
        "When using WhatsApp’s commerce features to offer goods or services for sale, it's crucial to understand and adhere to the platform's policies to ensure smooth operations and compliance. WhatsApp's Commerce Policy outlines the responsibilities and restrictions that businesses must f ...",
    },
    {
      image: "https://24by7chat.com/media/BOmCc7yxQ53cVqDjWYIeZCtIwLoWkeAk.jpg",
      adv: "Policy on Government and Political Use",
      content:
        "When it comes to the use of the WhatsApp Business Platform, particularly by government and political entities, there are specific policies in place to ensure that the platform is used responsibl ...",
    },
    {
      image: "https://24by7chat.com/media/tGhra5wc4QaQpDYQWhYjHazvjTIF4m3y.jpg",
      adv: "WhatsApp Business Messaging Policy Overview",
      content:
        "Overview: WhatsApp Business Services (as defined in the WhatsApp Business Terms of Service), enable rich, conversational experiences between businesses and WhatsApp users. Creating valuable experiences for u ...",
    },
    {
      image: "https://24by7chat.com/media/9PhjKuOKePHXdqB1rKkeqAdHOVxE1Y0e.png",
      adv: "Understanding WhatsApp Business Platform's New Conversation-Based Pricing",
      content:
        "Conversation Based Pricing: This document explains how conversation-based pricing works on the WhatsApp Business Platform. Charges are applied ...",
    },
    {
      image: "https://24by7chat.com/media/zE1l0HJFN3NQBVYF06wGr6Dk7VPGofV0.jpg",
      adv: "Facebook / Meta Business Manager Account Creation",
      content:
        "Steps to create a Facebook / Meta Business Suite and Business Manager: To create a business portfolio ....",
    },
    {
      image: "https://24by7chat.com/media/7LSA7zZep8OFyKjpJidYSuFbYiP1KPkX.png",
      adv: "Facebook Business Manager Account Verification Guide",
      content:
        "Verifying your Facebook Business Manager account is essential if you want to send WhatsApp messages to more than 50 unique users per day. Once your Facebook B ...",
    },
  ];
const groupSize = 3;
const slides = [];

// Split into groups of 3, without wrap-around
for (let i = 0; i < adv.length; i += groupSize) {
  const group = adv.slice(i, i + groupSize);
  slides.push(group);
}


return (
  <div className="container px-3 py-3 w-full" style={{ backgroundColor: "#f5f4f1" }}>
    {/* Section Heading */}
    <p className="text-center px-3 py-3 fs-4 fw-bold">
      <span className="text-success">Advantage of </span>
      <span
        style={{
          textDecoration: "underline",
          textDecorationThickness: "3px",
          textUnderlineOffset: "5px",
          textDecorationColor: "#21c948",
        }}
      >
        24 by 7 Cha
      </span>
      t Cloud
    </p>

    <div
      id="advCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000" // Auto move every 2s
    >
      <div className="carousel-inner">
        {slides.map((group, idx) => (
          <div
            key={idx}
            className={`carousel-item ${idx === 0 ? "active" : ""}`}
          >
            <div className="d-flex justify-content-center carousel-slide">
              {group.map((item, i) => (
                <div
                  key={i}
                  className="card mx-2 shadow"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.adv}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.adv}</h5>
                    <p className="card-text card-texts">{item.content}</p>
<a
      href="/pages"
      className="text-success"
      onClick={(e) => {
        e.preventDefault();
        navigate("/pages", { state: { title: item.adv, image: item.image } });
      }}
    >
      Read more &rarr;
    </a>                 </div>
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
        data-bs-target="#advCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" style={{filter: "invert(1) brightness(1.2)",}} ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#advCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" style={{filter: "invert(1) brightness(1.2)",}}></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
);

}

export default Adv;
