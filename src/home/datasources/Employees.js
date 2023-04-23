import client from "../../lib/Client";

export default class Employees {
  static async get(params) {
    try {
      const URL = '/api/employees'
      return await client.get(URL, { params: params });
    } catch (error) {
      throw error
    }
  }

  static async update(id, params) {
    try {
      const URL = `/api/employees/${id}`
      const res = await client.put(URL, { 'employee': params });
      console.log(res)
      return res
    } catch (error) {
      throw error
    }
  }
}
