import instance from "../instance"

// GUEST 조회
export const getSearchGuestAPI = async () => {
  const response = await instance.get("/order/searchGuest");
  console.log(response);
  return response.data;
}

// GUEST 주문 추가
export const addOrderGuestAPI = async (payload) => {
  const response = await instance.post("/order/guest/add", payload);
  return response.data;
}

// CLEANER 조회
export const getSearchCleanerAPI = async (params) => {
  // GET 요청 시 params 설정을 하면 URL 뒤에 ?roomId=201&orderDate=2024-05-20 형태로 붙습니다.
  const response = await instance.get('/order/searchCleaner', { params });
  return response.data;
};

// GUEST 주문 업데이트
export const updateOrderCleanerAPI = async (payload) => {
  const response = await instance.put("/order/updateCleaner", payload);
  return response.data;
}

// HOST 조회
export const getSearchHostAPI = async (params) => {
  const response = await instance.get('/order/searchHost', { params });
  console.log(response);
  return response.data;
}

// HOST 조회 : 투숙 기간 조회
export const getSearchStayPeriodHostAPI = async (params) => {
  const response = await instance.get('/order/searchStayPeriodHost', { params });
  console.log(response);
  return response.data;
}