interface Job {
  id: number;
  title: string;
  openings: string;
}

interface TrendingJobsListProps {
  trendingJobs: Job[];
  listTitle: string;
}

const TrendingJobsList = (props: TrendingJobsListProps) => {
  return (
    <div className="trendingJobsList">
      <h2 className="title">{props.listTitle}</h2>
      {props.trendingJobs.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <span>{job.openings} jobs</span>
          <br />
          <span>------------</span>
        </div>
      ))}
    </div>
  );
};

export default TrendingJobsList;
