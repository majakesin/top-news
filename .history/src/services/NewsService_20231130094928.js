import { NEWS_URL, API_KEY } from 'src/utils/api'

class NewsService {
    getTopHeadlinesList = async (country) => {
    const url = new URL(NEWS_URL);
    url.searchParams.append('country', country.toLowerCase());
    url.searchParams.append('apiKey', API_KEY);

        try {
            const response = await fetch(url)
            const data = await response.json();
            return { data: data.articles, error: response.error }
        } catch (error) {
            return { data: null, error }
        }
    }
}

export default new NewsService()
