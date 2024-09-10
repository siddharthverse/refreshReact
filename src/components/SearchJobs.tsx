type SearchJobsProps = {
  id: string;
  title: string;
  category: string;
  openings: string;
};

type searchProps = {
  jobsDataSrc: SearchJobsProps[];
  filterByCategory?: string;
};

const SearchJobs = ({ jobsDataSrc, filterByCategory }: searchProps) => {
  const filteredJobs = filterByCategory
    ? jobsDataSrc.filter((job) => job.category)
    : jobsDataSrc;
  //   if (filterByCategory) {
  //     return <div>{jobsDataSrc.filter((job) => job.category === 'tech')}</div>;
  //   } else {
  return (
    <div>
      {filteredJobs.map((job) => (
        <div key={job.id}>
          <span>{job.title}</span>,<span>{job.category}</span>,
          <span>{job.openings}</span>
        </div>
      ))}
    </div>
  );
  //   }
};

export default SearchJobs;
