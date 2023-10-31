const API_URL = "https://32a0-120-88-40-203.ngrok-free.app";
const object = {
    method: "get",
    headers:new Headers({
      "ngrok-skip-browser-warning": "69420",
      "Authorization": "Bearer 123456"
    }),
  }
export const filterApi = async ()=>{
    try {
     const response = await fetch(`${API_URL}/api/trade_promo_pred/filters`, object);
      return response.ok ? response : false;
    } catch (error) {
      console.log(error);
      return false;
    }
};

