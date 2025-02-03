import './App.css';
import TodoList from "./components/TodoList";

function App(props) {
    return (
        <div className="App">
            <TodoList
                newTaskText={props.state.posts.newTaskText}
                tasks={props.state.posts.tasks}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default App;
