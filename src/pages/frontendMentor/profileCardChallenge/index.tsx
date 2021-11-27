import ProfileCard from '../../../components/frontendMentor/profileCard/profileCard';
import backgroundTopCircle from '../../../assets/frontendMentorInfo/profile-card-component-main/images/bg-pattern-top.svg';
import backgroundBottomCircle from '../../../assets/frontendMentorInfo/profile-card-component-main/images/bg-pattern-bottom.svg';

const ProfileCardChallenge = () => {
  return (
    <div className="pc-challenge__page">
      <img
        className="pc-background-circle--top"
        src={backgroundTopCircle}
        alt="circle with slight gradient (top)"
        aria-hidden
      />
      <img
        className="pc-background-circle--bottom"
        src={backgroundBottomCircle}
        alt="circle with slight gradient (bottom)"
        aria-hidden
      />
      <ProfileCard />
    </div>
  );
};

export default ProfileCardChallenge;
