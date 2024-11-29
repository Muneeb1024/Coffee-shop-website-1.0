function Contact() {
  return (
    <section className="contact-sec">
      <h1>
        CONTACT <span>US</span>
      </h1>
      <div className="contact-container">
        <div className="contact-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d605.7098989883328!2d68.38000182164726!3d25.398847535696568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71299e9283bf%3A0x6e4ecd23136ddeca!2sJamia%20Masjid%20Bahar-E-Shariyat!5e1!3m2!1sen!2sus!4v1732888184679!5m2!1sen!2sus"
            className="Contact-map"
            // style={"border:0;"}
            //allowfullscreen=""
            // loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-right">
          <h3>GET IN TOUCH</h3>
          <div className="contact-form">
            <form>
              {/* <label htmlFor="name"></label> */}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              ></input>
              {/* <label htmlFor="email"></label> */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              ></input>
              {/* <label htmlFor="subject"></label> */}
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What's your query about?"
              ></input>
              {/* <label htmlFor="message"></label> */}
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
              ></textarea>

              <button type="submit" value="Submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
