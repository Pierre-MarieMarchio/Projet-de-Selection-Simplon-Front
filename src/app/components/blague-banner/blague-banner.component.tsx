import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Blague } from "../../interfaces/Blague.interface";
import "./presentation-banner.css";
import carambarImgBanner from "/banner.jpg";

export const BlagueBanner = () => {
  const { error, loading, data, refreshBlague } = useBlague();

  return (
    <section className=" container direction-col blague-banner-container">
      <img src={carambarImgBanner} alt="Baniere Carambar" />
      <div className="container direction-col blague-text-container">
        <div className="container direction-col blague-title">
          <h2 className="title-black">Carambar</h2>
          <h2 className="title-red blague-title-buton">c'est de la Barre ! </h2>
          <button
            className="blague-button title-black"
            onClick={() => refreshBlague()}
            disabled={loading}
          >
            Rire garanti !
          </button>
        </div>

        <div className="container m-1">
          {loading && <div className="spinner"></div>}
          {error && (
            <div>
              <p className="title-black">
                OUUUPS ! Une erreur c'est produite !
              </p>
              <p>
                Ressayer plus tard. Si l'erreur persiste veuillez nous contacter{" "}
              </p>
            </div>
          )}
          {!error && !loading && data && (
            <div className="container">
              <p className="text-primary-imp m-1">{data.question}</p>
              <p className="text-primary">{data.response}</p>
            </div>
          )}
          {!error && !loading && !data && (
            <div className="container">
              <p className="text-primary-imp m-1">
                Qui est jaune, drôle et complètement barré ?
              </p>
              <p className="text-primary">
                À question évidente, réponse évidente : c’est Carambar !
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const useBlague = () => {
  const { error, loading, data, fetchData, resetData } = useFetch<Blague>(
    "https://projet-de-selection-simplon-back-1.onrender.com/api/V1/blagues/random"
  );

  const [delayedLoading, setDelayedLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setDelayedLoading(false), 1000);
      return () => clearTimeout(timer);
    } else {
      setDelayedLoading(true);
    }
  }, [loading]);

  const refreshBlague = () => {
    resetData();
    fetchData();
    setDelayedLoading(true);
  };

  return { error, loading: delayedLoading, data, refreshBlague };
};
