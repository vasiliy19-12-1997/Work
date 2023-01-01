import axios from "axios";
export default class ServiceTodo {
  static async getAll(limit = 10, page = 1) {
    if (typeof JSON) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _limit: limit,
            _page: page,
          },
        }
      );
      return response;
    } else {
      return this.props.todos;
    }
  }
  static async getById(id) {
    if (typeof JSON) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + id
      );
      return response;
    } else {
      return this.props.todos;
    }
  }
  static async getCommment(id) {
    if (typeof JSON) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      return response;
    } else {
      return this.props.todos;
    }
  }
}
