import React, { Component } from "react";
import axios from "axios";

export default class TodoService extends Component {
  static async getAll() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
