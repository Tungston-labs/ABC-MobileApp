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

export const getOltCustomers = async (oltId, page = 1, port = "") => {
  try {
    let url = `/network/olt/${oltId}/customers/?page=${page}&page_size=10`;

    // ✅ Add port filter
    if (port !== "" && port !== null) {
      url += `&port=${port}`;
    }

    const response = await api.get(url);

    return {
      customers: response.data?.results?.customers || [],
      total_customers: response.data?.results?.total_customers || 0,
      total_ports_used: response.data?.results?.total_ports_used || 0,
      used_ports: response.data?.results?.used_ports || [], // 🔥 NEW
      total_pages: response.data?.total_pages || 1,
      current_page: response.data?.current_page || 1,
      count: response.data?.count || 0,
      next: response.data?.next || null,
      previous: response.data?.previous || null,
    };
  } catch (error) {
    console.error("Error fetching OLT customers:", error);
    throw error;
  }
};