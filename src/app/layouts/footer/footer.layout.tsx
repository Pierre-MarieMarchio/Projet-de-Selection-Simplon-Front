import "./footer.css";
export const FooterLayout = () => {
  return (
    <div className="footer-container text-white footer-text">
      <p className="m-1">
        Pour votre santé, évitez de grignoter entre les repas -{" "}
        <span>
          <a className="footer-url" href="https://www.mangerbouger.fr/">
            mangerbouger.fr
          </a>
        </span>
      </p>
      <p>Copyright © 2025 Carambar&Co</p>
    </div>
  );
};
