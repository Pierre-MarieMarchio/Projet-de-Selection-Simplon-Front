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
    <section>
      <div>
        <h2>Découvrez une blague Carambar !</h2>
        <p>
          Cliquez sur le bouton pour afficher une blague. Préparez-vous à rire !
        </p>
      </div>

      <button onClick={() => handleClick()} disabled={loading}>
        bouton
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <p>{data.question}</p>
          <p>{data.response}</p>
        </div>
      )}
    </section>
  );
};
