const API_URL = "https://7268-49-205-99-110.ngrok-free.app";
const object = {
    method: "get",
    headers:new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
  }
export const filterApi = async ()=>{
    try {
     const response = await fetch(`${API_URL}/api/trade_promo_pred`, object);
     return response.json();
    } catch (error) {
        console.log(error);
    }
};

