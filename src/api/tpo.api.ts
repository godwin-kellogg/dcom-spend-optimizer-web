const API_URL = "https://concrete-coherent-redbird.ngrok-free.app/api/trade_promo_pred";
const object = {
    method: "get",
    headers:new Headers({
      "ngrok-skip-browser-warning": "69420",
      "Authorization": "Bearer 123456"
    }),
  }
export const filterApi = async ()=>{
    try {
     const response = await fetch(`${API_URL}/filters`, object);
      return response.ok ? response : false;
    } catch (error) {
      console.log(error);
      return false;
    }
};



const fetchData = async (endpoint:string, queryParams:any) => {
  let queryString = '';
  if (queryParams) {
    const validParams = Object.entries(queryParams)
      .filter(([key, value]) => value !== undefined)
      .map(([key, value]) => `${key}=${value}`);

    if (validParams.length > 0) {
      queryString = validParams.join('&');
    }
  }
  console.log("query params api", queryString);

  try {
    const response = await fetch(`${API_URL}/${endpoint}${queryString ? '?' + queryString : ''}`, object);
    return response.ok ? response.json() : null;
  } catch (error) {
    return null;
  }
};


export const getFilteredData = async (data:any) => {
  try {
    const s2s = await fetchData('s-to-s-ratio', data);
    const spend = await fetchData('spends', data);
    const sales = await fetchData('sales', data);
    const gp = await fetchData('gross-profit', data);
    const offerDepth = await fetchData('offer-depth', data);
    if (s2s === null || spend === null ) return false;
    // console.log("Response TPO API", s2s, spend, sales);
    return {cardData : {s2s, spend, sales, gp, offerDepth}, graphData : {}};
  } catch (error) {
    return false;
  }
};
