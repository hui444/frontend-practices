import banner from '../../../assets/frontendMentorInfo/profile-card-component-main/images/bg-pattern-card.svg';
import avatar from '../../../assets/frontendMentorInfo/profile-card-component-main/images/image-victor.jpg';

const ProfileCard = () => {
  return (
    <div className="pc-card__container">
      <img className="pc-card__banner" src={banner} alt="banner filled with bubbles" />
      <img className="pc-card__avatar" src={avatar} alt="user avatar" />
      <div className="pc-card__content-container">
        <div className="pc-card__profile-container">
          <h3>
            Victor Crest <span>26</span>
          </h3>
          <p>London</p>
        </div>
        <hr />
        <div className="pc-card__stats-container">
          <div>
            <span className="pc-card__value">80K</span>
            <span className="pc-card__title">Followers</span>
          </div>
          <div>
            <span className="pc-card__value">803K</span>
            <span className="pc-card__title">Likes</span>
          </div>
          <div>
            <span className="pc-card__value">1.4K</span>
            <span className="pc-card__title">Photos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
