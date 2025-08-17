import React from 'react'

function Chatlink() {
  return (
   <div className="container py-5" style={{ backgroundColor: "#f5f4f1ff" }}>
  <div className="row align-items-center">
    {/* Left Column: Image */}
    <div className="col-12 col-md-6 mb-4 mb-md-0">
      <img 
        src="https://24by7chat.com/assets/link_gen.svg" 
        alt="Illustration" 
        className="img-fluid rounded"
      />
    </div>

    {/* Right Column: Form block */}
    <div className="col-12 col-md-6">
      <div className="p-4 border rounded shadow text-center">
        <h1 className="mb-2 text-success fs-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
          WhatsApp chat link</h1>
        <p className="text-muted mb-4 fs-5">Please provide your WhatsApp number including your country code, but omit the ‘+’ symbol. 
          For example, if your country code is +91 and your WhatsApp number is 9999999999, enter it as 919999999999.</p>

        <form className="mx-auto d-grid gap-3" style={{ maxWidth: 380 }}>
          <div>
            <label htmlFor="whatsappNumber" className="form-label">Whatsapp number</label>
            <input type="number" id="whatsappNumber" className="form-control" placeholder="Enter your number" />
          </div>

          <div>
            <label htmlFor="email" className="form-label">Email ID</label>
            <input type="email" id="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div>
        <h1 className="mb-2 fs-2 text-start py-3">Welcome Message</h1>
        <p className="text-muted mb-4 fs-5">Automatically send this message when a user clicks on your chat link to streamline the start of the conversation.</p>
        <input type='textarea' id='textarea' className='form-control' style={{height:"120px",}}/>
        </div>
         <button type="submit" className="btn btn-success px-4 py-2 fs-5 w-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
</svg>
          Generate link</button>
         </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default Chatlink
