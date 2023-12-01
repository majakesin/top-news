import NewsService from 'src/services/NewsService';

class NewsStore {
    topHeadlinesList = [];
    activeCountry = 'US';

    getTopHeadlinesList = async () => {
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
