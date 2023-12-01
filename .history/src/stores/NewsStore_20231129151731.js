import { observable } from 'mobx-react-lite';

class NewsStore  {

    @observable newsList = [];


};


export default new NewsStore();