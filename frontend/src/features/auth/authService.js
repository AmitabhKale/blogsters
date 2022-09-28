import axios from "axios";

const API_URL = "api/users";

// Register User
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("blogUser", JSON.stringify(response.data));
  }
  return response.data;
};

// Logout User
const logout = () => localStorage.removeItem("blogUser");

const authService = {
  register,
  logout,
};

export default authService;