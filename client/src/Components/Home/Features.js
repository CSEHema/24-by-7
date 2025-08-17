import React from "react";
import { useNavigate } from "react-router-dom";
function Features() {
  const nav = useNavigate();
  return (
    <div>
      <h1 className="text-success text-center">Features</h1>
      <p className="text-muted mb-4 fs-5 text-center ">
        Discover the powerful features that will transform your business
        communication
      </p>
      <div className="container py-5" style={{ backgroundColor: "#f5f4f1ff" }}>
        <div className="row align-items-center">
          {/* Left Column: Image */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img
              src="https://www.wati.io/wp-content/uploads/2023/09/Broadcasst.webp"
              alt="Illustration"
              className="img-fluid rounded"
            />
          </div>
          {/* Right Column: Text */}
          <div className="col-12 col-md-6">
            <div className="p-4 border rounded shadow text-center">
              <h1 className="mb-2 text-success fs-2">Broadcast</h1>
              <ul className="text-start py-3">
                <li className="mb-4 fs-5">
                  Maximize campaign reach and interaction through WhatsApp
                  messages with exceptional response rates
                </li>
                <li className="mb-4 fs-5">
                  Organize contacts efficiently, categorize them, and tailor
                  messages for targeted communication.
                </li>
                <li className="mb-4 fs-5">
                  Foster lasting customer connections and cultivate sales
                  opportunities by consistently engaging with your audience
                  through WhatsApp interactions.
                </li>
              </ul>
              <button className="btn btn-success px-3 py-2 fw-bold text-dark d-flex align-items-center">
                Get Started
                <span className="ms-2" style={{ fontSize: "1.5em" }}>
                  &rarr;
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5" style={{ backgroundColor: "#bcf68dff" }}>
        <div className="row align-items-center">
          {/* Left Column: Text */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="p-4 border rounded shadow text-center">
              <h1 className="mb-2 text-success fs-2">Chatbots</h1>
              <ul className="text-start py-3">
                <li className="mb-4 fs-5">Generate instant responses to frequent inquiries effortlessly using no-code chatbots.</li>
                <li className="mb-4 fs-5">Streamline personalized communication and mass messaging with automated solutions.</li>
                <li className="mb-4 fs-5">Increase sales by efficiently converting customer interactions into actionable leads through WhatsApp.</li>
                </ul>
                <button className="btn btn-success px-3 py-2 fw-bold text-dark d-flex align-items-center">
                Get Started
                <span className="ms-2" style={{ fontSize: "1.5em" }}>
                  &rarr;
                </span>
              </button>
              </div>
          </div>
          <div className="col-12 col-md-6">
          <img
              src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXeUlG2tscDUlNv2-20IRDKMLARB-ON0Cea26fQ8JYnn4BgqLJXY51QtaxKA7a2WSeZwJUpsslaiidNV_dTg7HhopaiZEpy4VavsIlT_PATD-eC4ggNgprIp3yCE2FpdqRM3qHIzUQ?key=mjwGkV_vBzVLJFjd4Txvcg"
              alt="Illustration"
              className="img-fluid rounded w-full"
            />
        </div>
        </div>
      </div>

      <div className="container py-5" style={{ backgroundColor: "#f5f4f1ff" }}>
        <div className="row align-items-center">
          {/* Left Column: Image */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img
              src="https://24by7chat.com/assets/chat_feature.png"
              alt="Illustration"
              className="img-fluid rounded"
            />
          </div>
          {/* Right Column: Text */}
          <div className="col-12 col-md-6">
            <div className="p-4 border rounded shadow text-center">
              <h1 className="mb-2 text-success fs-2">Online Chat CRM</h1>
              <ul className="text-start py-3">
                <li className="mb-4 fs-5">
                  Collaborate seamlessly across your team by sharing the 24by7Chat inbox, delivering exceptional support via WhatsApp.
                </li>
                <li className="mb-4 fs-5">
                  Easily incorporate customer context with pre-built integrations, enhancing communication efficiency.
                </li>
                <li className="mb-4 fs-5">
                  Deliver timely post-sales updates, manage order inquiries, and promptly address support issues via WhatsApp.
                </li>
              </ul>
              <button className="btn btn-success px-3 py-2 fw-bold text-dark d-flex align-items-center">
                Get Started
                <span className="ms-2" style={{ fontSize: "1.5em" }}>
                  &rarr;
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex container py-5 justify-content-evenly rounded" style={{ backgroundColor: "#abd787ff" }}>
        <div>
          <h2>Ready to get started?</h2>
          <p>Try our solution today and transform your business communication.</p>
        </div>
        <div className="d-flex gap-3 px-3 py-3">
        <button onClick={() => nav("/login")} className="btn btn-success px-3 py-3 text-dark">Try Now</button>
        <button onClick={() => nav("/signup")} className="btn btn-light border border-dark px-3 py-3 text-dark align-items-center"><span className="ms-2" style={{ fontSize: "1.5em" }}>
                  &rarr;
                </span> or Book a Demo Today</button>
        </div>
      </div>
    </div>
  );
}

export default Features;
