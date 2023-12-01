import { action, makeObservable, observable } from 'mobx'
import NewsService from 'src/services/NewsService'

class NewsStore {
    topHeadlinesList = []
    activeCountry = 'US'

    constructor() {
        makeObservable(this, {
            topHeadlinesList: observable,
            activeCountry: observable,
            getTopHeadlinesList:action,
            setActiveCountry: action,
        })
    }

    getTopHeadlinesList = async () => {
        const { data, error } = await NewsService.getTopHeadlinesList(
            this.activeCountry
        )
        if (data) {
            this.topHeadlinesList = data
            return
        }
        console.warn(error)
    }

    setActiveCountry = (country) => {
        this.activeCountry = country
        this.getTopHeadlinesList(country)
    }

    getDetailedHeadline = (index) => {
       return  this.topHeadlinesList[index];
    }

    getSearchedList = (value) => {
      if(value === '') {
          return this.topHeadlinesList;
      }
      return this.topHeadlinesList.map((headline) => headline.some((property) => property.includes(value)));  
    }
}

export default new NewsStore()
