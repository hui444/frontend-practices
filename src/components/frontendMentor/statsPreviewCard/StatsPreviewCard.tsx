const StatsPreviewCard = () => {
  return (
    <div className="sp-card__container">
      <div className="sp-card-content__container">
        <div className="sp-card-content__introduction-container">
          <h3>
            Get <em>insights</em> that help your business grow.
          </h3>
          <p>
            Discover the benefits of data analytics and make better decisions regarding revenue, customer experience,
            and overall efficiency.
          </p>
        </div>
        <div className="sp-card-content__stats-container">
          <div>
            <span className="sp-stats--value">10k+</span>
            <span className="sp-stats--title">Companies</span>
          </div>
          <div>
            <span className="sp-stats--value">314</span>
            <span className="sp-stats--title">Templates</span>
          </div>
          <div>
            <span className="sp-stats--value">12M+</span>
            <span className="sp-stats--title">Queries</span>
          </div>
        </div>
      </div>
      <div className="sp-card-image"></div>
    </div>
  );
};

export default StatsPreviewCard;
