export interface ColCard {
  iconSrc: string;
  carName: string;
  description: string;
  buttonText: string;
  cardColor: 'bright-orange' | 'dark-cyan' | 'very-dark-cyan';
}

const ColPreviewCard = (card: ColCard) => {
  return (
    <div className={`cp-card__container ${card.cardColor}`}>
      <div className="cp-card__content-container">
        <img src={card.iconSrc} alt="car icon" />
        <h3>{card.carName}</h3>
        <p>{card.description}</p>
      </div>
      <button className="cp-card__button">{card.buttonText}</button>
    </div>
  );
};

export default ColPreviewCard;
