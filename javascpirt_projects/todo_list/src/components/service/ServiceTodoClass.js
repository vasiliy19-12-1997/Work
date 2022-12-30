import axios from "axios";
export default class ServiceTodo {
  static async getAll(props) {
    if (typeof JSON) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _limit: 100,
            _page: 1,
          },
        }
      );
      return response.data;
    } else {
      return props.todos;
    }
  }
}
