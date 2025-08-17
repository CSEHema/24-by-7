import React, {useState} from 'react'
import { BsChevronDown } from "react-icons/bs"; 

function Faq() {
const [openIndex, setOpenIndex] = useState(null);

  const dropdowns = [
    { title: "What is 24 by 7 chat?", content: "24by7chat is a comprehensive WhatsApp business communication application designed to streamline customer interactions and improve communication efficiency." },
    { title: "What features does the Unified Inbox offer?", content: "The Unified Inbox allows you to chat with customers, assign agents, send customized WhatsApp templates, and share media files." },
    { title: "How does the broadcast feature work?", content: "Broadcast lets you send bulk WhatsApp messages to your contacts using customized templates for efficient communication." },
    { title: "What can I do with the Insights and Analysis feature?", content: "It provides detailed metrics on chat interactions and chatbot performance, helping you make data-driven decisions." },
    { title: "What is the Autobots feature?", content: "Autobots allows you to create and customize chatbot flows, automate tasks, and share these bots with the public." },
    { title: "How does 24by7 chat handle ticket and user management?", content: "It offers tools to manage support tickets, user roles, and subscription plans all within a centralized system." },
    { title: "Is there a free trial available?", content: "Yes, we offer a free trial period to explore 24by7chat and its features." },
    { title: "Can I change my pricing plan after signing up?", content: "Yes, you can upgrade your plan at any time through your account settings." },
    { title: "How long is the Connect plan valid?", content: "The Connect Plan is valid for 30 days from the date of purchase." },
    { title: "What is the Leverage Plan?", content: "The Leverage Plan is our premium offering, designed to maximize the capabilities of 24by7chat by integrating WhatsApp Business API and providing advanced features." },
    { title: "Can I get support with the Leverage Plan?", content: "Yes, premium support options are available. Contact our support team for any assistance or queries related to the Leverage Plan." },
    { title: "What features are included in the Engage Plan?", content: "The Engage Plan includes: Phone Book Contact Limit is up to 20,000 contacts, Chat Tags for organizing and managing chats, Chat Notes for adding important details to conversations, Chat Bot for creating and managing chatbots to automate responses." },
  ];
  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="d-flex flex-column align-items-center w-100 py-5" style={{backgroundColor:"#95dcbaff",}}>
      {/* Main Heading */}
      <h2 className="text-center mb-4 text-success fs-1">Frequently Asked Questions</h2>
      <p className='text-center text-muted fs-4'>Find answers to common questions about our platform and services</p>

      {/* Dropdowns Container */}
      <div className="w-100" style={{ maxWidth: "900px" }}>
        {dropdowns.map((dd, idx) => (
          <div
            key={idx}
            className="mb-3 rounded"
            style={{
              border: `2px solid ${openIndex === idx ? "#21c948" : "#bae496ff"}`,
              overflow: "hidden",
              transition: "border-color 0.3s ease",
            }}
          >
            {/* Dropdown Title */}
            <div
              className="p-3 fw-medium d-flex justify-content-between align-items-center"
              style={{
                cursor: "pointer",
                backgroundColor: "#f8f9fa",
              }}
              onClick={() => toggleDropdown(idx)}
            >
              
              <span style={{color:`${openIndex === idx ? "#21c948" : "#111"}`}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-patch-question text-success" viewBox="0 0 16 16">
  <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.7 1.7 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745"/>
  <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
  <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0"/>
</svg>   {dd.title}</span>
              <BsChevronDown
                className="transition-transform"
                style={{
                  transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>

            {/* Dropdown Content */}
            {openIndex === idx && (
              <div
                className="p-3 bg-white"
                style={{ textAlign: "left" }}
              >
                {dd.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq
