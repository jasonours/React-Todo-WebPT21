import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { Body, Name } from "./components/Styles";
import "./styles.css";

const todos = [
  {
    task: "",
    id: "",
    completed: false
  }
// {
//   task: "Organize the Garage",
//   id: "1",
//   completed: false
// },
//   {
//     task: "Bake Cookies",
//     id: 2,
//     completed: false
//   },
//   {
//     task: "Wash the Dishes",
//     id: 3,
//     completed: false
//   },
//   {
//     task: "Mow the Lawn",
//     id: 4,
//     completed: false
//   }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  toggleTodo = todoId => {
    console.log(todoId);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  addNewTodo = todoName => {
    console.log(todoName);
    this.setState({
      todos: [
        ...this.state.todos,
        { task: todoName, completed: false, id: Date.now() }
      ]
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    });
  };

  render() {
    return (
      <Body className="App">
        <div className="header">
          <Name>Task List</Name>
          <TodoForm addNewTodo={this.addNewTodo} />
        </div>
        <TodoList
          toggleTodo={this.toggleTodo}
          todos={this.state.todos}
          clearCompleted={this.clearCompleted}
        />
      </Body>
    );
  }
}

export default App;