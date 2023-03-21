import CardPoke from "./CardPoke";
import style from "./style.module.css";

const Card = ({ results }) => {
  return (
    <div className="container">
      <ul className={style.cards}>
        {
          results.map(pokemon => (
            <li className={style.cardsItem} key={pokemon.name}>
              <CardPoke url={pokemon.url} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Card;
