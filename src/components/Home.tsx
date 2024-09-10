import { useState } from 'react';
import SearchJobs from './SearchJobs';

const Home = () => {
  const trendingJobsArray = [
    {
      id: crypto.randomUUID(),
      title: 'Software Engineer',
      category: 'tech',
      openings: '10',
    },
    {
      id: crypto.randomUUID(),
      title: 'Frontend Developer',
      category: 'tech',
      openings: '20',
    },
    {
      id: crypto.randomUUID(),
      title: 'Backend Developer',
      category: 'tech',
      openings: '30',
    },
    {
      id: crypto.randomUUID(),
      title: 'Banking',
      category: 'finance',
      openings: '40',
    },
    {
      id: crypto.randomUUID(),
      title: 'Credit Card',
      category: 'finance',
      openings: '50',
    },
  ];

  type JobsType = {
    id: string;
    title: string;
    category: string;
    openings: string;
  };

  const [allJobs, setAllJobs] = useState<JobsType[]>(trendingJobsArray);
  const [filterTitle, setFilterTitle] = useState<string>('');

  const handleShowAllJobs = () => {
    setFilterTitle('All Jobs');
    setAllJobs(allJobs);
    // console.log(allJobs);
    // const jobs = allJobs.map((job) => job.title);
    // console.log(jobs);
  };
  const handleShowTechJobs = () => {
    setFilterTitle('Tech Jobs');
  };
  const handleShowFinanceJobs = () => {
    setFilterTitle('Finance Jobs');
  };

  return (
    <div className="home">
      <h1>The best jobs on the planet.</h1>
      <div className="filters">
        <button onClick={handleShowAllJobs}>Show All Jobs</button>
        <button onClick={handleShowTechJobs}>Show Tech Jobs</button>
        <button onClick={handleShowFinanceJobs}>Show Finance Jobs</button>
      </div>
      <div className="jobsList">
        <h2>{filterTitle}</h2>
        <SearchJobs jobsDataSrc={allJobs} />
        <SearchJobs jobsDataSrc={allJobs} filterByCategory="tech" />
      </div>
    </div>
  );
};

export default Home;
