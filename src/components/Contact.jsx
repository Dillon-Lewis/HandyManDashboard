import styles from "../modules/contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.headingText}>Get in Touch</h2>
        <p className={styles.infoText}>
          Have a question, feedback, or just want to say hi? Send us a message!
        </p>
      </div>

      <form className={styles.form}>
        <input type="text" placeholder="Your Name" className={styles.input} />
        <input type="email" placeholder="Your Email" className={styles.input} />
        <textarea
          placeholder="Your Message"
          className={styles.textarea}
          rows={5}
        ></textarea>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
