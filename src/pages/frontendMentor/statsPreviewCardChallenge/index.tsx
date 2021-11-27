import StatsPreviewCard, { Stats } from '../../../components/frontendMentor/statsPreviewCard/StatsPreviewCard';
import workingPeopleImage from '../../../assets/frontendMentorInfo/stats-preview-card-component-main/images/image-header-desktop.jpg';

const StatsPreviewCardChallenge = () => {
  const stats: Stats[] = [
    {
      title: 'Companies',
      value: '10k+',
    },
    {
      title: 'Templates',
      value: '314',
    },
    {
      title: 'Queries',
      value: '12M+',
    },
  ];
  return (
    <div className="sp-challenge__page">
      <StatsPreviewCard
        title={
          <>
            Get <em>insights</em> that help your business grow.
          </>
        }
        description="Discover the benefits of data analytics and make better decisions regarding revenue, customer experience,
        and overall efficiency."
        stats={stats}
        imageSrc={workingPeopleImage}
      />
    </div>
  );
};

export default StatsPreviewCardChallenge;
