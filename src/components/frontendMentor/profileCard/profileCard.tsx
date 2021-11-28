import banner from '../../../assets/frontendMentorInfo/profile-card-component-main/images/bg-pattern-card.svg';

export interface Stats {
  value: string;
  title: string;
}
interface ProfileCard {
  avatarSrc: string;
  name: string;
  age: number;
  location: string;
  stats: Stats[];
}

const ProfileCard = (card: ProfileCard) => {
  return (
    <div className="pc-card__container">
      <img className="pc-card__banner" src={banner} alt="banner filled with bubbles" />
      <img className="pc-card__avatar" src={card.avatarSrc} alt="user avatar" />
      <div className="pc-card__content-container">
        <div className="pc-card__profile-container">
          <h3>
            {card.name} <span>{card.age}</span>
          </h3>
          <p>{card.location}</p>
        </div>
        <hr />
        <div className="pc-card__stats-container">
          {card.stats.map((stats: Stats, index: number) => (
            <div key={index}>
              <span className="pc-card__value">{stats.value}</span>
              <span className="pc-card__title">{stats.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
