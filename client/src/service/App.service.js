import axios from 'axios';

class AppService {
  api = 'http://localhost:5000/game-list';

  config = {
    header: {
      'Content-Type': 'application/json'
    }
  }

  getGameList() {
    return axios.get(this.api, this.config);
  }

}

export default AppService;
