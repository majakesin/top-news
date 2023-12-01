

class NewsStore {
    newsList = [];
    activeCountry = 'US';

    setNewsList = (country) => {

    }

    setActiveCountry = (country) => {
        this.activeCountry = country;
        this.setNewsList(country);
    }
}

export default new NewsStore()
