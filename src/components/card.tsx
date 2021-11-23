interface Card {
  title: string;
  description?: string | JSX.Element;
  buttonText?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Card = (card: Card) => {
  return (
    <div className="card__container">
      <div>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
      {card.buttonText && (
        <button className="card__button" onClick={() => card.onClick}>
          {card.buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
