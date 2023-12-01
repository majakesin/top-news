import { NEWS_URL } from 'src/utils/api';

class NewsService {


    getNewsList = async (region) => {
      try {
        const response = await fetch(NEWS_URL);
        return {data: response.data, error: response.error}
      }
      catch(error) {
          return {data: null, error}
      }
    }


};

export default new NewsService();