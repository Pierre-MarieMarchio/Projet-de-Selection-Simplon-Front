import "./presentation-banner.css";
import carambarImgBanner from "/banner.jpg";

export const PresentationBanner = () => {
  return (
    <section className=" container direction-col presentation-banner-container">
      <img src={carambarImgBanner} alt="Baniere Carambar" />
      <div className="container direction-col presentation-text-container">
        <div className="container direction-col presentration-title">
          <h2 className="title-black">Carambar</h2>
          <h2 className="title-red">c'est de la Barre !</h2>
        </div>

        <p className="text-primary-imp m-1">
          Qui est jaune, drôle et complètement barré ?
        </p>
        <p className="text-primary">
          À question évidente, réponse évidente : c’est Carambar !{" "}
        </p>
      </div>
    </section>
  );
};
