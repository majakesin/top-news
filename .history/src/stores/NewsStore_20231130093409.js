import NewsService from 'src/services/NewsService';

class NewsStore {
    newsList = [];
    activeCountry = 'US';

    getNewsList = async () => {
        const {data, error} = await NewsService.getNewsList(this.activeCountry);
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
