import NewsService from 'src/services/NewsService';

class NewsStore {
    newsList = [];
    activeCountry = 'US';

    setNewsList = async (country) => {
        const {data, error} = await NewsService.getNewsList(country);
        if(data) {
            this.newsList = data;
        }
       console.warn(error);
    }

    setActiveCountry = (country) => {
        this.activeCountry = country;
        this.setNewsList(country);
    }
}

export default new NewsStore()
