import { action, makeObservable, observable } from 'mobx'
import NewsService from 'src/services/NewsService'

class NewsStore {
    topHeadlinesList = []
    searchedTopHeadlinesList = []
    activeCountry = 'US'
    top5CategoryHeadlinesList = [];

    constructor() {
        makeObservable(this, {
            topHeadlinesList: observable,
            searchedTopHeadlinesList: observable,
            activeCountry: observable,
            top5CategoryHeadlinesList: observable,
            getTop5CategoryHeadlinesList: action,
            getTopHeadlinesList: action,
            setActiveCountry: action,
        })
    }

    getTopHeadlinesList = async () => {
        const { data, error } = await NewsService.getTopHeadlinesList(this.activeCountry)
        if (data) {
            this.topHeadlinesList = data
            this.searchedTopHeadlinesList = data
            return
        }
        console.warn(error)
    }

    getTop5CategoryHeadlinesList = async () => {
        const { data, error } = await NewsService.getTop5CategoryHeadlinesList();
        if (data) {
            this.top5CategoryHeadlinesList = data;
            return
        }
        console.warn(error)
    }

    setActiveCountry = (country) => {
        this.activeCountry = country
        this.getTopHeadlinesList(country)
    }

    getDetailedHeadline = (index) => {
        return this.topHeadlinesList[index]
    }

    updateSearchedList = (value) => {
        if (value === '') {
            this.searchedTopHeadlinesList = this.topHeadlinesList
        }
       const retVal = this.topHeadlinesList.map(
            (headline) => {
                const searchArray = [headline.title ?? "", headline.description ?? ""]
                const hasValue = searchArray.some((item) => item.includes(value));
                 if(hasValue) {
                     return headline;
                 }
            }
        )
        this.searchedTopHeadlinesList = retVal.filter((val) => !!val)
    }
}

export default new NewsStore()
