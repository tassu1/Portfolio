export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <h2 className="section--title">Contact Me</h2>
      <div className="contact--form--container">
        <form
          action="https://formspree.io/f/xvgzrvpr"
          method="POST"
          className="contact--form"
        >
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="contact--input"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="contact--input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="contact--input"
            required
          />
          <textarea
            name="message"
            placeholder="Your message..."
            className="contact--input"
            rows="4"
            required
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}