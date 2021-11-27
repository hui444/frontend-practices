import ColPreviewCard, { ColCard } from '../../../components/frontendMentor/colPreviewCard/colPreviewCard';
import sedanCarIcon from '../../../assets/frontendMentorInfo/3-column-preview-card-component-main/images/icon-sedans.svg';
import suvCarIcon from '../../../assets/frontendMentorInfo/3-column-preview-card-component-main/images/icon-suvs.svg';
import luxuryCarIcon from '../../../assets/frontendMentorInfo/3-column-preview-card-component-main/images/icon-luxury.svg';

const ColPreviewCardChallenge = () => {
  const carDetails: ColCard[] = [
    {
      iconSrc: sedanCarIcon,
      carName: 'Sedans',
      description:
        'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      buttonText: 'Learn More',
      cardColor: 'bright-orange',
    },
    {
      iconSrc: suvCarIcon,
      carName: 'SUVs',
      description:
        'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      buttonText: 'Learn More',
      cardColor: 'dark-cyan',
    },
    {
      iconSrc: luxuryCarIcon,
      carName: 'Luxury',
      description:
        'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
      buttonText: 'Learn More',
      cardColor: 'very-dark-cyan',
    },
  ];
  return (
    <div className="cp-challenge__container">
      <div className="cp-challenge__content-container">
        {carDetails.map((carInfo: ColCard, index: number) => (
          <ColPreviewCard
            key={index}
            iconSrc={carInfo.iconSrc}
            carName={carInfo.carName}
            description={carInfo.description}
            buttonText={carInfo.buttonText}
            cardColor={carInfo.cardColor}
          />
        ))}
      </div>
    </div>
  );
};

export default ColPreviewCardChallenge;
