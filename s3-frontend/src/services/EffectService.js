import axios from "axios";

const ACCOUNT_BASE_REST_API_URL = "http://localhost:8080/api/effects";
class EffectService {
  createEffect(effect) {
    return axios.post(ACCOUNT_BASE_REST_API_URL, effect).catch((error) => {
    });
  }

  async getEffectById(effectId) {
    return await axios.get(ACCOUNT_BASE_REST_API_URL + "/" + effectId).catch((error) => {
    });
  }

  async getAllEffects() {
    return await axios.get(ACCOUNT_BASE_REST_API_URL).catch((error) => {
    });
  }

  async getEffectsByUser(id){
    return await axios.get(ACCOUNT_BASE_REST_API_URL + "/user/" + id).catch((error) => {
    });
  }
}

export default EffectService;
