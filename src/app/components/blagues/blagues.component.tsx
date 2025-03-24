import "./blague.css"
import { useFetch } from "../../hooks/useFetch";
import { Blague } from "../../interfaces/Blague.interface";

export const BlaguesComponet = () => {
  const { error, loading, data, fetchData, resetData } = useFetch<Blague>(
    "https://projet-de-selection-simplon-back-1.onrender.com/api/V1/blagues/random"
  );

  const handleClick = () => {
    resetData();
    fetchData();
  };

  return (
    <section className="container direction-col blague-container ">
      <div className="container">
        <button
          className="blague-button  "
          onClick={() => handleClick()}
          disabled={loading}
        >
          Rire garanti
        </button>
        {loading && <div className="spinner"></div>}
        {error && (
          <div>
            <p className="title-black">OUUUPS ! Une erreur c'est produite !</p>
            <p>
              Ressayer plus tard. Si l'erreur persiste veuillez nous contacter{" "}
            </p>
          </div>
        )}
        {!error && data && (
          <div className="container">
            <p className="text-primary-imp m-1">{data.question}</p>
            <p className="text-primary">{data.response}</p>
          </div>
        )}
      </div>
    </section>
  );
};
