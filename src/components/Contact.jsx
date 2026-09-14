import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section contact-section">

      <div className="contact-left">

        <div className="section-heading">
          <h2>RESTONS EN CONTACT</h2>
          <span></span>
        </div>

        <p>
          Vous avez un projet en tête ou vous souhaitez
          collaborer ? N'hésitez pas à me contacter.
        </p>

        <div className="contact-info">

          <div>
            <FaEnvelope />
            <span>joramnzietchou@gmail.com</span>
          </div>

          <div>
            <FaPhone />
            <span>+237 6 59 48 43 81</span>
          </div>

          <div>
            <FaMapMarkerAlt />
            <span>Yaoundé, Cameroun</span>
          </div>

        </div>

      </div>

      <div className="contact-form-container">

        <form className="contact-form">

          <div className="form-row">

            <input
              type="text"
              placeholder="Votre nom..."
            />

            <input
              type="email"
              placeholder="Votre email..."
            />

          </div>

          <input
            type="text"
            placeholder="Sujet"
          />

          <textarea
            placeholder="Votre message..."
            rows="6"
          ></textarea>

          <button
            type="submit"
            className="btn btn-primary"
          >
            ENVOYER LE MESSAGE
            <FaPaperPlane />
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;