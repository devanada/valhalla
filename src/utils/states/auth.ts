import { type StateCreator } from "zustand";
import { toast } from "sonner";

import { router } from "@/routes";
import { LoginSchema, RegisterSchema } from "@/utils/types/auth";
import axiosWithConfig from "@/utils/constants/axiosWithConfig";

export interface AuthStore {
  token: string;
  login: (data: LoginSchema) => void;
  register: (data: RegisterSchema) => void;
  logout: () => void;
}

export const authStoreCreator: StateCreator<AuthStore> = (set) => ({
  token: localStorage.getItem("token") ?? "",
  login: async (data) => {
    try {
      const response = await axiosWithConfig.post(`/login`, data);
      const result = response.data;

      localStorage.setItem("token", result.payload?.token);
      set({ token: result.payload?.token });
      toast("Login successfully");

      router.navigate("/");
    } catch (error: any) {
      const { message } = error.response.data;

      toast(message);
    }
  },
  register: async (data) => {
    try {
      const response = await axiosWithConfig.post(`/register`, data);
      const result = response.data;

      toast(result.message);

      router.navigate("/login");
    } catch (error: any) {
      const { message } = error.response.data;

      toast(message);
    }
  },
  logout: () => {
    try {
      localStorage.removeItem("token");
      set({ token: "" });
      toast("Logout successfully");

      router.navigate("/login");
    } catch (error) {
      toast("Logout failed");
    }
  },
});
