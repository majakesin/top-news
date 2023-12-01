import NewsService from 'src/services/NewsService';

class NewsStore {
    newsList = [];
    activeCountry = 'US';

    setNewsList = async (country) => {
        const {response, error} = await NewsService.getNewsList(country);
    }

    setActiveCountry = (country) => {
        this.activeCountry = country;
        this.setNewsList(country);
    }
}

export default new NewsStore()
