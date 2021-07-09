import {useSelector} from "react-redux";
import {useEffect} from "react";

const CreateTodoForm = () => {

}

const Todos = () => {}

function App() {

  const store = useSelector(store => store)

  console.log(store)


 const fetchTodos = async () => {
    const resp = await fetch('https://localhost:9999/get-todos', {mode: 'no-cors'})
    const  data = await resp.json();
    console.log(data, 'data')
  }


  useEffect(() => {
    fetchTodos()
  }, [])



  return (
    <div className="App">



    </div>
  );
}

export default App;
