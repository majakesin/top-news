import { NEWS_URL } from 'src/utils/api'

class NewsService {
    getNewsList = async (country) => {
        try {
            const response = await fetch(NEWS_URL)
            return { data: response.data.json(), error: response.error }
        } catch (error) {
            return { data: null, error }
        }
    }
}

export default new NewsService()
