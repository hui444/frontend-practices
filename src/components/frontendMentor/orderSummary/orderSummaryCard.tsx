import musicIcon from '../../../assets/frontendMentorInfo/order-summary-component-main/images/icon-music.svg';

interface Card {
  illustration: string;
  altText: string;
  description: string;
  planName: string;
  costPerYear: number;
}

const OrderSummaryCard = (card: Card) => {
  return (
    <div className="os-card__container">
      <div className="os-illustration__container">
        <img src={card.illustration} alt={card.altText} />
      </div>
      <div className="os-content__container">
        <h3>Order Summary</h3>
        <p>{card.description}</p>
        <div className="os-plan-details__container">
          <img className="music-icon" src={musicIcon} alt="music icon" />
          <span className="plan-text">{card.planName}</span>
          <span className="cost-text">${card.costPerYear}/year</span>
          <a className="change-button">Change</a>
        </div>
        <div className="os-buttons__container">
          <button className="os-button primary">Proceed to Payment</button>
          <button className="os-button secondary">Cancel Order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
