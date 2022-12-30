import axios from "axios";
export const ServiceTodo = async (props) => {
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
};
