import { useState } from 'react';
import arrowIcon from '../../../assets/frontendMentorInfo/faq-accordion-card-main/images/icon-arrow-down.svg';
import mobileIllustration from '../../../assets/frontendMentorInfo/faq-accordion-card-main/images/illustration-woman-online-mobile.svg';
import floatingIllustration from '../../../assets/frontendMentorInfo/faq-accordion-card-main/images/illustration-box-desktop.svg';

export interface Question {
  question: string;
  answer: string;
}

const FaqAccordionCard = ({ questions }: { questions: Question[] }) => {
  const [expandedQuestionNo, setExpandedQuestionNo] = useState<number>(-1);

  const onClick = (questionNo: number) => {
    if (expandedQuestionNo === questionNo) {
      setExpandedQuestionNo(-1);
    } else {
      setExpandedQuestionNo(questionNo);
    }
  };
  return (
    <div className="fac-card__container">
      <div className="fac-illustration__container">
        <img
          className="floating-illustration"
          src={floatingIllustration}
          alt="illustration of a woman looking at a big screen"
        />
        <img
          className="mobile-illustration"
          src={mobileIllustration}
          alt="illustration of a woman looking at a big screen"
        />
      </div>
      <div className="fac-content__container">
        <h3>FAQ</h3>
        <div className="fac-accordion__container">
          {questions.map((question: Question, index: number) => {
            const isActive: boolean = expandedQuestionNo === index;
            return (
              <div key={index} className="fac-accordion-question__container">
                <div className={`fac-accordion__question ${isActive && 'active'}`} onClick={() => onClick(index)}>
                  <h4>{question.question}</h4>
                  <img src={arrowIcon} alt="arrow icon" />
                </div>
                {isActive && <p className="fac-accordion__answer">{question.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordionCard;
