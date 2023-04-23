import Cookies from "js-cookie";
import client from "../../lib/Client";
import axios from "axios";
import { RequestError } from "../../lib/Errors";

export default class Auth {

  static async getCurrentUser() {
    if (!Cookies.get("_access_token") || !Cookies.get("_client") || !Cookies.get("_uid")) return;

    try {
      return await client.get("/api/auth/sessions", {
        headers: {
          "access-token": Cookies.get("_access_token"),
          "client": Cookies.get("_client"),
          "uid": Cookies.get("_uid"),
        },
      });
    } catch (error) {
      if (axios.isAxiosError(error)) throw new RequestError(error)
      throw error
    }
  }

  static async signOut() {
    try {
      return await client.delete("/api/auth/sign_out", {
        headers: {
          "access-token": Cookies.get("_access_token"),
          "client": Cookies.get("_client"),
          "uid": Cookies.get("_uid"),
        },
      });
    } catch (error) {
      if (axios.isAxiosError(error)) throw new RequestError(error)
      throw error
    }
  }

  static async signIn(params) {
    try {
      return client.post("/api/auth/sign_in", params);
    } catch (error) {
      if (axios.isAxiosError(error)) throw new RequestError(error)
      throw error
    }
  }

  static async signUp(params) {
    try {
      return client.post("/api/auth", params);
    } catch (error) {
      if (axios.isAxiosError(error)) throw new RequestError(error)
      throw error
    }
  }
}
