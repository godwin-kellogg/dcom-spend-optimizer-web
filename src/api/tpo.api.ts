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
  if (Object.keys(queryParams).length > 0) {
    queryString = Object.entries(queryParams)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
  };

  try {
    const response = await fetch(`${API_URL}/${endpoint}${queryString ? '?' + queryString : ''}`, object);
    return response.ok ? response.json() : null;
  } catch (error) {
    return null;
  }
};


export const getFilteredData = async (data:any) => {
  const queryParams = {
    from_time: "2022-01-01",
    to_time: "2023-08-31"
  };

  try {
    const s2s = await fetchData('s-to-s-ratio', queryParams);
    const spend = await fetchData('spends', queryParams);
    // const sales = await fetchData('sales', queryParams);
    if (s2s === null || spend === null ) return false;
    // console.log("Response TPO API", s2s, spend, sales);
    return {cardData : {s2s, spend}};
  } catch (error) {
    return false;
  }
};
