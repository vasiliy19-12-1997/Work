import axios from "axios";
export default class PostServise {
  static async getAll() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
