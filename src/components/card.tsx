import '../scss/components/_card.scss';

interface Card {
  title: string;
  description?: string | JSX.Element;
  buttonText?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Card = (card: Card) => {
  return (
    <div className="card-container">
      <div className="card-text-container">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
      {card.buttonText && (
        <button className="card-button" onClick={() => card.onClick}>
          {card.buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
