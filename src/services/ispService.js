import api from "./axios";

export const getAllIsp = async (page = 1, limit = 10, search = "") => {
  let url = `/network/isp/?page=${page}&page_size=${limit}`;

  if (search) {
    url += `&search=${encodeURIComponent(search)}`;
  }

  const response = await api.get(url);
  return response.data;
};
