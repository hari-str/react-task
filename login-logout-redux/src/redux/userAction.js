import axios from "axios";
import { toast } from "react-hot-toast";

//Login
export const login = (username, password) => async (dispatch) => {
  try {
    const { data } = await axios.post("https://reqres.in/api/login", {
      username,
      password,
    });
    dispatch({ type: "USER_LOGIN", payload: data });
    toast.success("Login Success");
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.error);
  }
};

//Logout
export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: "USER_LOGOUT" });
  toast.success("Logout Success");
};
