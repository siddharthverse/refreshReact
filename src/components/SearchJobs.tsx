type Jobs = {
  id: number;
  title: string;
  category: string;
  openings: string;
}[];

type SearchJobsProps = {
  jobs: Jobs;
  title: string;
};

const SearchJobs = ({ jobs, title }: SearchJobsProps) => {
  return (
    <div className="SearchJobsList">
      <h1>{title}</h1>
      {jobs.map((job) => (
        <p> {job.title}</p>
      ))}
    </div>
  );
};

export default SearchJobs;
