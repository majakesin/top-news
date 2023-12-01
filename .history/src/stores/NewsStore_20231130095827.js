import { observable } from 'mobx';
import NewsService from 'src/services/NewsService';

class NewsStore {
    @observable topHeadlinesList = [];
    activeCountry = 'US';

    getTopHeadlinesList = async () => {
        const {data, error} = await NewsService.getTopHeadlinesList(this.activeCountry);
        if(data) {
            this.topHeadlinesList = data;
            return;
        }
       console.warn(error);
    }

    setActiveCountry = (country) => {
        this.activeCountry = country;
        this.setNewsList(country);
    }
}

export default new NewsStore()
