import { useState } from 'react';
import TrendingJobsList from './TrendingJobsList';
import SearchJobs from './SearchJobs';

const Home = () => {
  const trendingJobsArray = [
    { id: 1, title: 'Software Engineer', category: 'tech', openings: '10' },
    { id: 2, title: 'Frontend Developer', category: 'tech', openings: '20' },
    { id: 3, title: 'Backend Developer', category: 'tech', openings: '30' },
    {
      id: 4,
      title: 'Banking',
      category: 'finance',
      openings: '40',
    },
    { id: 5, title: 'Credit Card', category: 'finance', openings: '50' },
  ];

  const [trendingJobs, setTrendingJobs] = useState<
    { id: number; title: string; category: string; openings: string }[]
  >([]);

  const [searchJobs, setSearchJobs] = useState<
    {
      id: number;
      title: string;
      category: string;
      openings: string;
    }[]
  >([]);

  const handleSearchJobs = () => {
    setSearchJobs(trendingJobsArray);
    console.log('Search button clicked');
  };

  const handleShowTrendingJobs = () => {
    setTrendingJobs(trendingJobsArray);

    console.log('Show trending jobs button clicked');
  };

  const searchTechJobs = (
    jobTitle: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log(`Search jobs for ${jobTitle}`);
    console.log(e.target);
  };

  return (
    <div className="home">
      <h1>Find Jobs!</h1>
      <button onClick={handleSearchJobs}>Search</button>
      <button onClick={handleShowTrendingJobs}>Show Trending Jobs</button>
      <button onClick={(e) => searchTechJobs('tech', e)}>
        Search Tech Jobs
      </button>
      <TrendingJobsList trendingJobs={trendingJobs} listTitle="Trending Jobs" />
      <TrendingJobsList
        trendingJobs={trendingJobs.filter((jobs) => jobs.category === 'tech')}
        listTitle="Tech Jobs"
      />
      <TrendingJobsList
        trendingJobs={trendingJobs.filter(
          (jobs) => jobs.category === 'finance'
        )}
        listTitle="Finance Jobs"
      />
      <SearchJobs jobs={searchJobs} title="Search Results" />
    </div>
  );
};

export default Home;
