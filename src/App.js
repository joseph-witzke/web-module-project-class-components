import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasks = [
  {
    task: 'Do dishes',
    id: 123, //date.Now()
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  toggleItem = (id) => {
    const newTask = this.state.tasks.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return (item);
      }
    });

    this.setState({
      tasks: newTask
    });
  }

  addTask = (item) => {
    const newItem = {
      task:item,
      id:this.state.tasks.length,
      completed: false
    };

    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  }

  clearCompleted = () => {
    const newTask = this.state.tasks.filter(item => {
      return (item.completed === false)
    });

    this.setState({
      tasks: newTask
    });
  }


  render() {
    return (
      <div className='App'>
        <div className="header">
          <h2>My To Do's</h2>
          <TodoForm addTask={this.addTask}/>
        </div>
        <TodoList clearCompleted={this.clearCompleted}toggleItem={this.toggleItem} tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
