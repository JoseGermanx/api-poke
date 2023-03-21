import Data from "../../Data/data";

const CardPoke = ({ url }) => {
  const state = Data(url);
  const { loading, data } = state;

  return (
    <div>
      {
        loading 
        ? 
        <h1>Loading..</h1>
        : 
        <div className="cards" style={{ width: "14rem" }}>
          <div className="cards-header">
            <h5 className="card-title">{data.id}</h5>
          </div>
          <div className="card-body">
            <img src={data.sprites.front_default} alt="pokemon" />
          </div>
          <div className="card-footer">
            <p className="card-text text-capitalize">{data.forms[0].name}</p>
          </div>
        </div>
      }
    </div>
  );
};

export default CardPoke;
