import ProfileCard, { Stats } from '../../../components/frontendMentor/profileCard/profileCard';
import backgroundTopCircle from '../../../assets/frontendMentorInfo/profile-card-component-main/images/bg-pattern-top.svg';
import backgroundBottomCircle from '../../../assets/frontendMentorInfo/profile-card-component-main/images/bg-pattern-bottom.svg';
import avatar from '../../../assets/frontendMentorInfo/profile-card-component-main/images/image-victor.jpg';

const ProfileCardChallenge = () => {
  const userStats: Stats[] = [
    {
      value: '80K',
      title: 'Followers',
    },
    {
      value: '803K',
      title: 'Likes',
    },
    {
      value: '1.4K',
      title: 'Photos',
    },
  ];
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
      <ProfileCard avatarSrc={avatar} name="Victor Crest" age={26} location="London" stats={userStats} />
    </div>
  );
};

export default ProfileCardChallenge;
