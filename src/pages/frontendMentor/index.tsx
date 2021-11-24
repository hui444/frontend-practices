import { PATHS } from '../../common/paths';

import FrontendMentorCard from '../../components/frontendMentorCard';
import nft_previewImage from '../../assets/frontendMentorInfo/nft-preview-card-component-main/design/desktop-preview.jpg';
import os_previewImage from '../../assets/frontendMentorInfo/order-summary-component-main/design/desktop-preview.jpg';

const FrontendMentorHome = () => {
  return (
    <div className="fm-cards__container">
      <FrontendMentorCard
        image={nft_previewImage}
        title="NFT preview card component"
        description="This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with."
        difficulty={1}
        withHTMLCSS
        challengeLink="https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U"
        to={PATHS.NFT_PREVIEW_CARD_CHALLENGE}
      />
      <FrontendMentorCard
        image={os_previewImage}
        title="Order summary component"
        description="A perfect project for newbies who are starting to build confidence with layouts!"
        difficulty={1}
        withHTMLCSS
        challengeLink="https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj"
        to={PATHS.ORDER_SUMMARY_CHALLENGE}
      />
    </div>
  );
};

export default FrontendMentorHome;
