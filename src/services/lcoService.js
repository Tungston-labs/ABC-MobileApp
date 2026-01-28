import api from "./axios";

export const getAllLcos = async (
  page = 1,
  limit = 10,
  search = ""
) => {
  let url = `/lcos/lco/?page=${page}&page_size=${limit}`;

  if (search) {
    url += `&search=${encodeURIComponent(search)}`;
  }

  const response = await api.get(url);
  return response.data;
};
