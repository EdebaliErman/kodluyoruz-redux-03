import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <TodoList />
    </div>
  );
}

export default App;
