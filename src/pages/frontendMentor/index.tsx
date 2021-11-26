import { PATHS } from '../../common/paths';

import FrontendMentorCard, { FMCard } from '../../components/frontendMentorCard';
import nft_previewImage from '../../assets/frontendMentorInfo/nft-preview-card-component-main/design/desktop-preview.jpg';
import os_previewImage from '../../assets/frontendMentorInfo/order-summary-component-main/design/desktop-preview.jpg';
import sp_previewImage from '../../assets/frontendMentorInfo/stats-preview-card-component-main/design/desktop-preview.jpg';

// image?: string;
// title: string;
// description: string;
// difficulty: 1 | 2 | 3 | 4 | 5 | 'newbie' | 'junior' | 'intermediate' | 'advanced' | 'guru';
// withHTMLCSS: boolean;
// withJS?: boolean;
// withAPI?: boolean;
// challengeLink: string;
// to?: string;
const challengeDataSet: FMCard[] = [
  {
    image: nft_previewImage,
    title: 'NFT preview card component',
    description:
      'This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.',
    difficulty: 1,
    withHTMLCSS: true,
    challengeLink: 'https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U',
    to: PATHS.NFT_PREVIEW_CARD_CHALLENGE,
  },
  {
    image: os_previewImage,
    title: 'Order summary component',
    description: 'A perfect project for newbies who are starting to build confidence with layouts!',
    difficulty: 1,
    withHTMLCSS: true,
    challengeLink: 'https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj',
    to: PATHS.ORDER_SUMMARY_CHALLENGE,
  },
  {
    image: sp_previewImage,
    title: 'Stats preview card component',
    description:
      "This is a great small challenge to help get you used to building to a design. There's no JS in this project, so you'll be able to focus on your HTML & CSS skills.",
    difficulty: 1,
    withHTMLCSS: true,
    challengeLink: 'https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62',
    to: PATHS.STATS_PREVIEW_CARD_CHALLENGE,
  },
];
const FrontendMentorHome = () => {
  return (
    <div className="fm-cards__container">
      {challengeDataSet.map((challengeData: FMCard, index: number) => (
        <FrontendMentorCard
          key={index}
          image={challengeData.image}
          title={challengeData.title}
          description={challengeData.description}
          difficulty={challengeData.difficulty}
          withHTMLCSS={challengeData?.withHTMLCSS}
          withJS={challengeData.withJS}
          withAPI={challengeData.withAPI}
          challengeLink={challengeData.challengeLink}
          to={challengeData.to}
        />
      ))}
    </div>
  );
};

export default FrontendMentorHome;
