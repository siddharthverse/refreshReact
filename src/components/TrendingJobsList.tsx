interface Job {
  id: number;
  title: string;
  category: string;
  openings: string;
}

interface TrendingJobsListProps {
  trendingJobs: Job[];
  listTitle: string;
}

const TrendingJobsList = ({
  trendingJobs,
  listTitle,
}: TrendingJobsListProps) => {
  return (
    <div className="trendingJobsList">
      <h2 className="title">{listTitle}</h2>
      {trendingJobs.map((job) => (
        <div key={job.id}>
          <span className="jobTitle">{job.title}</span>
          <span className="jobVacancies">{job.openings} jobs</span>
        </div>
      ))}
    </div>
  );
};

export default TrendingJobsList;
