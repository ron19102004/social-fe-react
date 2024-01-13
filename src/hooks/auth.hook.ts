/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/slices/auth.slice";
import axios from "axios";
import { env } from "../helpers/env.helper";
const API_URL: string = env("API_URL") as string;
export const useAuth = () => {
  const dispatch = useDispatch();
  const login = async (data: any) => {
    try {
      const response = await axios.post(`${API_URL}`, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    dispatch(signOut());
  };
  const register = async (data: any) => {
    try {
      const response = await axios.post(`${API_URL}`, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const role = useSelector((state: any) => state?.authReducer?.role);
  const userCurrent = useSelector(
    (state: any) => state?.authReducer?.userCurrent
  );
  return { login, logout, register, role, userCurrent };
};
