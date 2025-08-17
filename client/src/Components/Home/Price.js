import React from 'react'

const plans = [
  {
    name: "Leverage",
    price: "Contact Support",
    features: ["Contact Limit: 10,000", "Chat Tags", "Chat Note", "Auto Chatbot", "Cloud API"],
    vals: [true, true, true, true, true],
    color: "#3ae66aff",
  },
  {
    name: "Connect",
    price: "699",
    features: ["Contact Limit: 100", "Chat Tags", "Chat Note", "Auto Chatbot", "Cloud API"],
    vals: [true, true, true, false, false],
    color: "#3ae66aff",
  },
  {
    name: "Engage",
    price: "4,999",
    features: ["Contact Limit: 10,000", "Chat Tags",  "Chat Note", "Auto Chatbot", "Cloud API"],
    vals: [true, true, true, true, true],
    color: "#3ae66aff",
  },
  {
    name: "Premium Plan",
    price: "19,999",
    features: ["Contact Limit: 1,000,000", "Chat Tags",  "Chat Note", "Auto Chatbot", "Cloud API"],
    vals: [true, true, true, true, true],
    color: "#3ae66aff",
  },
];

function Price() {

   const groupSize = 3; // number of cards per slide
  const slides = [];

  for (let i = 0; i < plans.length; i += groupSize) {
    slides.push(plans.slice(i, i + groupSize));
  }

  return (
    <div className="container my-5 d-flex flex-column ">
      <h2 className='fw-bold text-white fs-2 text-center rounded px-4 py-2' style={{backgroundColor:"#5cef94ff"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
</svg>
        Prices
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
</svg>
        </h2>
  <h2 className="fw-bold text-success fs-1 text-center mb-4">Choose your Plan</h2>
  <p className="text-muted mb-4 fs-5 text-center ">
        Select the perfect plan that fits your business needs and budget
      </p>

  <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {plans.reduce((rows, plan, index) => {
        if (index % 2 === 0) rows.push([plan]);
        else rows[rows.length - 1].push(plan);
        return rows;
      }, []).map((group, i) => (
        <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
          <div className="row justify-content-center">
            {group.map((plan, index) => (
              <div key={index} className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                <div
                  className="card shadow-sm rounded text-center"
                  style={{ minHeight: "420px", width: "90%" ,
    border: plan.name === "Premium Plan" ? "4px solid #28a745" : "2px solid #fff",
  }}
                >
                  <div className="position-relative py-3" style={{ backgroundColor: plan.color }}>
                    <h5 className="mb-0 fs-2 fw-bold text-white py-5 px-3">{plan.name}</h5>
                    <div
                      className="position-absolute top-100 start-50 translate-middle rounded-circle d-flex align-items-center justify-content-center fw-semibold"
                      style={{
                        width: "140px",
                        height: "100px",
                        backgroundColor: "#fff",
                        color: "#28a745",
                        border: "2px solid #28a745",
                        fontSize: "1.5rem",
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>
                      {plan.price}
                    </div>
                  </div>
                  <div className="card-body px-3 d-flex flex-column justify-content-between" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
                    <p className="text-success fw-semibold mb-3">What's included?</p>
  <ul className="list-unstyled text-start mb-4">
  {plan.features.map((feature, i) => (
    <li className="mb-2 d-flex align-items-center" key={i}>
      {plan.vals[i] ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-check2-square text-success me-2 flex-shrink-0"
          viewBox="0 0 16 16"
        >
          <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
          <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-x-square text-danger me-2 flex-shrink-0"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zm-4.354 4.354a.5.5 0 1 0-.708-.708L8 6.293 6.354 4.646a.5.5 0 1 0-.708.708L7.293 7l-1.647 1.646a.5.5 0 0 0 .708.708L8 7.707l1.646 1.647a.5.5 0 0 0 .708-.708L8.707 7l1.647-1.646z"/>
        </svg>
      )}

      {/* Apply special span only for Contact Limit */}
      {feature.includes("Contact Limit") ? (
        <>
          Contact Limit:{" "}
          <span
            className="fw-bold rounded px-2 py-2"
            style={{ backgroundColor: "#71e361ff" }}
          >
            10,000
          </span>
        </>
      ) : (
        feature
      )}
    </li>
  ))}
</ul>

                    <div className="d-flex justify-content-center mt-3">
  <button
    className="px-3 py-3 text-white border-white rounded-3 w-50 text-center"
    style={{ backgroundColor: plan.color }}
  >
    Select Plan
  </button>
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
    <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" style={{filter: "invert(0.6) brightness(1.2)", /* white + brighter */
  width: "3rem",height: "3rem"}} ></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" style={{filter: "invert(0.6) brightness(1.2)", /* white + brighter */
  width: "3rem",height: "3rem"}}></span>
    </button>
  </div>
</div>

  );
}

export default Price
