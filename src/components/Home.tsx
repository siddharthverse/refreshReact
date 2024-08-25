const Home = () => {

    const handleSearchClick = () => {
        console.log('Search button clicked')
    }
    
    const handleShowTrendingJobs = () => {
        console.log('Show trending jobs button clicked')
    }

    const searchJobTitle = (jobTitle: string, e) => {
        console.log(`Search jobs for ${jobTitle}`)
        console.log(e.target)
    }
    return ( 
        <div className="home">
            <h1>
                Find Jobs!
            </h1>
            <button onClick={handleSearchClick}>Search</button>

            <button onClick={handleShowTrendingJobs}>Trending Jobs</button>

            <button onClick={(e)=>searchJobTitle('tech', e)}>Search Tech Jobs</button>
        </div>
        );
}

export default Home;