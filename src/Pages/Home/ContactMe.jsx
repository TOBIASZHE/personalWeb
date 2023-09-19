import emailjs from "@emailjs/browser"
const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_xn3twpa', 'template_8e9aa6j', e.target, 'okrFTToajiK_fP0FT');
  alert("email sent");
}
 

export default function ContactMe() {
    return (
      <section id="Contact" className="contact--section">
        <div>
          <p className="sub--title">Get In Touch</p>
          <h2>Contact Me</h2>
          <p className="text-lg">
            Lorem ipsum dolor, sit ametonsectetur adipisicing elit. In, odit.
          </p>
        </div>
        <form className="contact--form--container" onSubmit={sendEmail}>
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name*</span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email*</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">phone-number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
              />
            </label>
          </div>
          <label htmlFor="choode-topic" className="contact--label">
            <span className="text-md">Choose a topic</span>
            <select id="choose-topic" className="contact--input text-md">
              <option>Select One...</option>
              <option>job oppertunity</option>
              <option>contect me</option>
              <option>others</option>
            </select>
          </label>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message*</span>
            <textarea
              className="contact--input text-md"
              id="message"
              name="message"
              rows="8"
              placeholder="Type your message..."
              required
            />
          </label>
          <div>
            <button className="btn btn-primary contact--form--btn">Submit
            </button>
          </div>
        </form>
      </section>
    );
  }
  