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


export const getExpiringCustomers = async (
  search,
  page,
  lco,
  isp,
  fromDate,
  toDate
) => {
  const params = {
    search,
    page,
  };

  if (lco) {
    params.lco = lco;
  }

  if (isp) {
    params.isp = isp;
  }

  if (fromDate) {
    params.from_date = fromDate;
  }

  if (toDate) {
    params.to_date = toDate;
  }

  const response = await api.get(
    "/client/expiring-soon/",
    { params }
  );

  return response.data;
};

export const listLcoTickets = (params = {}) => {
  return api.get("/ticket/list/lco/", { params });
};
export const createLcoTicket = (data) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    if (key === "files" && Array.isArray(data.files)) {
      data.files.forEach((file) => {
        formData.append("files", file);
      });
    } else {
      formData.append(key, data[key]);
    }
  });

  return api.post("/ticket/lco/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getAllCustomers = async (search = '', page = 1, limit) => {
  const response = await api.get(`/client/customer/?search=${search}&page=${page}&page_size=${limit}`);
  return response.data;
};