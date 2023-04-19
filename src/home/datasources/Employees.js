import axios from "axios";

export default class Employees {
  static async get(params) {
    try {
      const URL = 'http://localhost:3000/api/employees'
      return await axios.get(URL, { params: params });
    } catch (error) {
      throw error
    }
  }
}
