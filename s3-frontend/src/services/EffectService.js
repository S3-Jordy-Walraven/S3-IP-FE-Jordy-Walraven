import axios from "axios";

const ACCOUNT_BASE_REST_API_URL = "http://localhost:8080/api/effects";
class EffectService {
  createEffect(effect) {
    return axios.post(ACCOUNT_BASE_REST_API_URL, effect);
  }

  async getAllEffects() {
    try {
      return await axios.get(ACCOUNT_BASE_REST_API_URL);
    } catch {}
  }
}

export default EffectService;
