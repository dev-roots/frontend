import axios from "axios";

const authApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/Auth/`,
});

export const login = async (user) => {
  const response = await authApi.post("login", user);
  localStorage.setItem("token", response.data.token);
  return response;
};

export const register = (user) => {
  return authApi.post("register", user);
};

export const logout = () => { 
  localStorage.removeItem("token");
}
