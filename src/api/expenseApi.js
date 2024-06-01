import axios from "axios";
import urls from "./urls.js";

export const CreateExpenseApi = async (data) => {
  try {
    return await axios.post(`${urls.expense.create_product}`, data.data, {
      headers: { Authorization: data.token },
    });
  } catch (error) {
    return error.response;
  }
};

export const UpdateExpenseApi = async (data) => {
  try {
    return await axios.put(
      `${urls.expense.update_product}/${data.id}`,
      data.data,
      {
        headers: { Authorization: data.token },
      }
    );
  } catch (error) {
    return error.response;
  }
};

export const deleteExpenseApi = async (data) => {
  try {
    console.log(data);
    return await axios.delete(`${urls.expense.delete_product}/${data.id}`, {
      headers: { Authorization: data.token },
    });
  } catch (error) {
    return { status: 400, message: error.response?.data?.message };
  }
};

export const GetAllExpenseApi = async (data) => {
  try {
    return await axios.get(`${urls.expense.getall_product}`, {
      headers: { Authorization: data.token },
    });
  } catch (error) {
    return error.response;
  }
};

export const GetSingleExpenseApi = async (data) => {
  try {
    return await axios.get(`${urls.expense.update_product}/${data.id}`, {
      headers: { Authorization: data.token },
    });
  } catch (error) {
    return { status: 400, message: error.response?.data?.message };
  }
};

export const SearchExpenseApi = async (data) => {
  try {
    return await axios.get(
      `${urls.expense.search_product}/?searchTerm=${data.query}`,
      {
        headers: { Authorization: data.token },
      }
    );
  } catch (error) {
    return error.response;
  }
};
