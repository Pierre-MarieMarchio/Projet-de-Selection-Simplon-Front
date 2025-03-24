import carambarImgBanner from "/banner.jpg";

export const PresentationBanner = () => {
  return (
    <>
      <img src={carambarImgBanner} alt="Baniere Carambar" />
      <div>
        <h1>
          <span>Carambar</span>
          <span>c'est de la Barre !</span>
        </h1>
        <p>Qui est jaune, drôle et complètement barré ?</p>
        <p>À question évidente, réponse évidente : c’est Carambar ! </p>
      </div>
    </>
  );
};
