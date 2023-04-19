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

  static async update(id, params) {
    try {
      const URL = `http://localhost:3000/api/employees/${id}`
      const res = await axios.put(URL, { 'employee': params });
      console.log(res)
      return res
    } catch (error) {
      throw error
    }
  }
}
