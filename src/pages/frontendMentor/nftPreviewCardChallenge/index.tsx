import NftPreviewCard from '../../../components/frontendMentor/nftPreviewCard/nftPreviewCard';
import equilibriumImg from '../../../assets/frontendMentorInfo/nft-preview-card-component-main/images/image-equilibrium.jpg';
import avatarImg from '../../../assets/frontendMentorInfo/nft-preview-card-component-main/images/image-avatar.png';

import '../../../scss/pages/frontendMentor/_nftPreviewCard.scss';
const NftPreviewCardChallenge = () => {
  return (
    <div className="nft-page">
      <NftPreviewCard
        previewImage={equilibriumImg}
        title="Equilibrium #3429"
        description="Our Equilibrium collection promotes balance and calm"
        value={0.041}
        numberOfDaysLeft={3}
        creatorName="Jules Wyvern"
        creatorAvatar={avatarImg}
      />
    </div>
  );
};

export default NftPreviewCardChallenge;
