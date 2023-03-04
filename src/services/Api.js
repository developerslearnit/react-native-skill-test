import aixos from "axios";
import { API_URL } from "../config";

export const AllProducts = async () => {
  return await axios.get(`${API_URL}/products`);
};

export const ProductsInCategory = async (category) => {
  return await axios.get(`${API_URL}/products/category/${category}`);
};
