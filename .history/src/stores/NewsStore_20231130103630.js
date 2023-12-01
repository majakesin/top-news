import { action, makeAutoObservable, observable } from 'mobx'
import NewsService from 'src/services/NewsService'

class NewsStore {
    topHeadlinesList = []
    activeCountry = 'US'

    constructor() {
        makeAutoObservable(this, {
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
        this.setNewsList(country)
    }
}

export default new NewsStore()
