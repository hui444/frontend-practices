//started at 1030

import cardIllustration from '../../../assets/frontendMentorInfo/order-summary-component-main/images/illustration-hero.svg';
import musicIcon from '../../../assets/frontendMentorInfo/order-summary-component-main/images/icon-music.svg';

const OrderSummaryCard = () => {
  return (
    <div className="os-card__container">
      <div className="os-illustration__container">
        <img src={cardIllustration} alt="illustration of a girl listening to music and dancing" />
      </div>
      <div className="os-content__container">
        <h3>Order Summary</h3>
        <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        <div className="os-plan-details__container">
          <img className="music-icon" src={musicIcon} alt="music icon" />
          <span className="plan-text">Annual Plan</span>
          <span className="cost-text">$59.99/year</span>
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
