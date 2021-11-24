import OrderSummaryCard from '../../../components/frontendMentor/orderSummary/orderSummaryCard';
import cardIllustration from '../../../assets/frontendMentorInfo/order-summary-component-main/images/illustration-hero.svg';

const OrderSummaryChallenge = () => {
  return (
    <div className="os-challenge__page">
      <OrderSummaryCard
        illustration={cardIllustration}
        altText="illustration of a girl listening to music and dancing"
        description="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
        planName="Annual Plan"
        costPerYear={59.99}
      />
    </div>
  );
};

export default OrderSummaryChallenge;
