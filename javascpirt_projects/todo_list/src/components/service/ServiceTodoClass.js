import axios from "axios";
export default class ServiceTodoClass {
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
      return response;
    } else {
      return props.todos;
    }
  }
}
