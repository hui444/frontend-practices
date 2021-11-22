import '../../../scss/components/frontendMentor/nftPreviewCard/_nftPreviewCard.scss';
import ethereum from '../../../assets/frontendMentorInfo/nft-preview-card-component-main/images/icon-ethereum.svg';
import clock from '../../../assets/frontendMentorInfo/nft-preview-card-component-main/images/icon-clock.svg';

interface Card {
  previewImage: string;
  title: string;
  description: string;
  value: number;
  numberOfDaysLeft: number;
  creatorName: string;
  creatorAvatar: string;
}

const NftPreviewCard = (card: Card) => {
  return (
    <div className="nft-card-container">
      <div className="nft-preview-img-container">
        <img src={card.previewImage} alt="preview image" />
      </div>
      <div className="nft-content-container">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <div className="nft-info-container">
          <div>
            <img src={ethereum} alt="ethereum" />
            <span className="nft-eth-span">{card.value}ETH</span>
          </div>
          <div>
            <img src={clock} alt="ethereum" />
            <span className="nft-days-span">{card.numberOfDaysLeft} days left</span>
          </div>
        </div>
        <hr />
        <div className="nft-creator-container">
          <img src={card.creatorAvatar} alt="creator avatar" />
          <span>
            Creation of <em>{card.creatorName}</em>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NftPreviewCard;
