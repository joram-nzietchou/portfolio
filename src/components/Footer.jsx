function Footer() {
  return (
    <footer className="footer">

      <p>
        © 2026 Joram Nzietchou. Tous droits réservés.
      </p>

      <button
        className="back-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        ↑
      </button>

    </footer>
  );
}

export default Footer;