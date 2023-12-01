import { action, makeObservable, observable } from 'mobx'
import NewsService from 'src/services/NewsService'

class NewsStore {
    topHeadlinesList = []
    searchedTopHeadlinesList = []
    activeCountry = 'US'

    constructor() {
        makeObservable(this, {
            topHeadlinesList: observable,
            searchedTopHeadlinesList: observable,
            activeCountry: observable,
            getTopHeadlinesList: action,
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
        return this.topHeadlinesList[index]
    }

    updateSearchedList = (value) => {
        if (value === '') {
            this.searchedTopHeadlinesList = this.topHeadlinesList
        }
        this.searchedTopHeadlinesList = this.topHeadlinesList.map((headline) =>
            headline.some((property) => property.includes(value))
        )
    }
}

export default new NewsStore()
