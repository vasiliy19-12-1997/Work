import axios from "axios";
export default class TodoServise {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );

    return response;
  }
  static async getById(id) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/" + id
    );

    return response;
  }
  static async getCommentsByTodoId(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}/comments`
    );

    return response;
  }
}
