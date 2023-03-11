import axios from "axios";

export default class Employees {
  static async get(params) {
    try {
      // TODO: API完成時に入れ替える
      const URL = 'http://localhost:3002/employees'
      return await axios.get( URL, { params: params });
    } catch (error) {
      throw error
    }
  }
}
