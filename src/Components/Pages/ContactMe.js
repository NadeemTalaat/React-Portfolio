import Layout from "./Layout";
import "./ContactMe.css";

function ContactMe() {
  return (
    <Layout>
      <h2>Contact Me</h2>
      <div className="container mt-5">
        <form className="d-flex flex-column">
          <div className="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label for="message">Message:</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="submit-button btn btn-primary align-self-center mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default ContactMe;
