import { NEWS_URL, API_KEY } from 'src/utils/api'

class NewsService {
    getTopHeadlinesList = async (country) => {
        const url = new URL(NEWS_URL)
        url.searchParams.append('country', country.toLowerCase())
        url.searchParams.append('apiKey', API_KEY)

        try {
            const response = await fetch(url)
            if (!response.ok) {
                return { data: null, error: response.status }
            }
            const data = await response.json()
            return { data: data.articles, error: null }
        } catch (error) {
            return { data: null, error }
        }
    }

    getTop5CategoryHeadlinesList = async (category, country) => {
        const url = new URL(NEWS_URL)
        url.searchParams.append('category', category)
        url.searchParams.append('country', country.toLowerCase())
        url.searchParams.append('apiKey', API_KEY)

        try {
            const response = await fetch(url)
            if (!response.ok) {
                return { data: null, error: response.status }
            }
            const data = await response.json()
            return { data: data.articles, error: null }
        } catch (error) {
            return { data: null, error }
        }
    }
}

export default new NewsService()
