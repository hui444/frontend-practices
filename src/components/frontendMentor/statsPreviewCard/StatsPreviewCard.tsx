export interface Stats {
  value: string;
  title: string;
}
interface Card {
  title: string | JSX.Element;
  description: string;
  stats: Stats[];
  imageSrc: string;
}

const StatsPreviewCard = (card: Card) => {
  return (
    <div className="sp-card__container">
      <div className="sp-card-content__container">
        <div className="sp-card-content__introduction-container">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
        <div className="sp-card-content__stats-container">
          {card.stats.map((stats: Stats, index: number) => (
            <div key={index}>
              <span className="sp-stats--value">{stats.value}</span>
              <span className="sp-stats--title">{stats.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="sp-card-image">
        <img src={card.imageSrc} alt="people working in an office" aria-hidden />
      </div>
    </div>
  );
};

export default StatsPreviewCard;
