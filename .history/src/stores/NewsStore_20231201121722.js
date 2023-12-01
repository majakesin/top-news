import { action, makeObservable, observable } from 'mobx'
import NewsService from 'src/services/NewsService'
import { CATEGORIES } from 'src/utils/constants'

class NewsStore {
    topHeadlinesList = []
    loadingTopHeadlines: false;
    searchedTopHeadlinesList = []
    activeCountry = 'US'
    top5CategoryHeadlinesList = {}

    constructor() {
        makeObservable(this, {
            topHeadlinesList: observable,
            searchedTopHeadlinesList: observable,
            activeCountry: observable,
            top5CategoryHeadlinesList: observable,
            loadingTopHeadlines: observable,
            getTop5CategoryHeadlinesList: action,
            getTopHeadlinesList: action,
            updateSearchedList: action,
            setActiveCountry: action,
        })
    }

    getTopHeadlinesList = async () => {
        this.loadingTopHeadlines = true;
        const { data, error } = await NewsService.getTopHeadlinesList(
            this.activeCountry
        )
        if (data) {
            this.topHeadlinesList = data
            this.searchedTopHeadlinesList = data
            return
        }
        console.warn(error)
    }

    getTop5CategoryHeadlinesList = async () => {
        CATEGORIES.forEach(async (category) => {
            const { data, error } =
                await NewsService.getTop5CategoryHeadlinesList(
                    category,
                    this.activeCountry
                )
            if (data) {
                this.top5CategoryHeadlinesList[category] = data
                return
            }
            console.warn(error)
        })
    }

    setActiveCountry = (country) => {
        this.activeCountry = country
    }

    getDetailedHeadline = (index) => {
        return this.topHeadlinesList[index]
    }

    updateSearchedList = (value) => {
        if (value === '') {
            this.searchedTopHeadlinesList = this.topHeadlinesList
        }
        const retVal = this.topHeadlinesList.map((headline) => {
            const searchArray = [
                headline.title ?? '',
                headline.description ?? '',
            ]
            const hasValue = searchArray.some((item) => item.includes(value))
            if (hasValue) {
                return headline
            }
        })
        this.searchedTopHeadlinesList = retVal.filter((val) => !!val)
    }
}

export default new NewsStore()
