import Card from '../components/card';
import FrontendMentorCard from '../components/frontendMentorCard';
import '../scss/pages/_home.scss';
import previewImage from '../assets/frontendMentorInfo/nft-preview-card-component-main/design/desktop-preview.jpg';
const Home = () => {
  return (
    <div>
      <Card
        title="frontend mentor practices"
        description={
          <>
            practices from{' '}
            <a className="card-link" href="https://frontendmentor.io" target="_blank" rel="noreferrer">
              frontendmentor.io
            </a>
          </>
        }
        buttonText="View"
      />
      <FrontendMentorCard
        image={previewImage}
        title="NFT preview card component"
        description="This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with."
        difficulty={1}
        withHTMLCSS
        challengeLink="https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U"
      />
    </div>
  );
};

export default Home;
