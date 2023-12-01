

class NewsStore {
    newsList = [];
    activeCountry = 'US';

    setNewsList = () => {

    }

    setActiveCountry = (country) => {
        this.activeCountry = country;
    }
}

export default new NewsStore()
