import { useNavigate } from 'react-router-dom';

interface Card {
  image?: string;
  title: string;
  description: string;
  difficulty: 1 | 2 | 3 | 4 | 5 | 'newbie' | 'junior' | 'intermediate' | 'advanced' | 'guru';
  withHTMLCSS: boolean;
  withJS?: boolean;
  withAPI?: boolean;
  challengeLink: string;
  to?: string;
}

const FrontendMentorCard = (card: Card) => {
  const navigate = useNavigate();

  const DifficultyTag = () => {
    const difficultyNumArr: number[] = [1, 2, 3, 4, 5];
    const difficultyTextArr: string[] = ['newbie', 'junior', 'intermediate', 'advanced', 'guru'];
    let index = 0;
    if (typeof card.difficulty === 'string') {
      index = difficultyTextArr.indexOf(card.difficulty);
    } else {
      index = difficultyNumArr.indexOf(card.difficulty);
    }

    return (
      <div className={`fm-card-difficulty-tag fm-${difficultyTextArr[index]}`}>
        <span className="fm-difficulty-num">{difficultyNumArr[index]}</span>
        <span className="fm-difficulty-text">{difficultyTextArr[index]}</span>
      </div>
    );
  };

  return (
    <div className="fm-card-container">
      <div className="fm-card-image-container" onClick={() => card.to && navigate(card.to)}>
        <img src={card.image} alt={`${card.title} preview`} />
      </div>
      <div className="fm-card-content">
        <h3>
          <a href={card.to ?? '#'}>{card.title}</a>
        </h3>
        <div className="fm-card-info-container">
          <ul className="fm-card-language-tags">
            {card.withHTMLCSS && (
              <>
                <li className="fm-html-tag">HTML</li>
                <li className="fm-css-tag">CSS</li>
              </>
            )}
            {card.withJS && <li className="fm-js-tag">JS</li>}
            {card.withAPI && <li className="fm-api-tag">API</li>}
          </ul>
          <DifficultyTag />
        </div>
        <p>{card.description}</p>
        <a className="fm-challenge-link" href={card.challengeLink} target="_blank" rel="noreferrer">
          Challenge Link
        </a>
      </div>
    </div>
  );
};

export default FrontendMentorCard;
