import { useState } from 'react';
import TrendingJobsList from './TrendingJobsList';

const Home = () => {
  const trendingJobsArray = [
    { id: 1, title: 'Software Engineer', openings: '10' },
    { id: 2, title: 'Frontend Developer', openings: '20' },
    { id: 3, title: 'Backend Developer', openings: '30' },
    { id: 4, title: 'Fullstack Developer', openings: '40' },
    { id: 5, title: 'DevOps Engineer', openings: '50' },
  ];

  const [trendingJobs, setTrendingJobs] = useState<
    { id: number; title: string; openings: string }[]
  >([]);

  const handleSearchClick = () => {
    console.log('Search button clicked');
  };

  const handleShowTrendingJobs = () => {
    setTrendingJobs(trendingJobsArray);

    console.log('Show trending jobs button clicked');
  };

  const searchJobTitle = (
    jobTitle: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log(`Search jobs for ${jobTitle}`);
    console.log(e.target);
  };

  return (
    <div className="home">
      <h1>Find Jobs!</h1>
      <button onClick={handleSearchClick}>Search</button>

      <button onClick={handleShowTrendingJobs}>Trending Jobs</button>

      <button onClick={(e) => searchJobTitle('tech', e)}>
        Search Tech Jobs
      </button>
      <TrendingJobsList trendingJobs={trendingJobs} listTitle="Trending Jobs" />
    </div>
  );
};

export default Home;
