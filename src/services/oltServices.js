import api from "./axios";

export const getAllOlts = async (
  page = 1,
  limit = 10,
  search = ""
) => {
  let url = `/network/olts/?page=${page}&page_size=${limit}`;

  if (search) {
    url += `&search=${encodeURIComponent(search)}`;
  }

  const response = await api.get(url);
  return response.data;
};
