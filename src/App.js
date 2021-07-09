import logo from './logo.svg';
import './App.css';

import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from "react";




const NestedChild = () => {
    const counter = useSelector((state) => {
        console.log('from useSelector', state)

        return state.counter.value
    })

    const posts = useSelector(({posts}) => posts);
    const dispatch = useDispatch()

    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await response.json();

        console.log(json)
        dispatch({
            type: 'ADD_POSTS',
            payload: json
        })

    }


    useEffect(() => {
        fetchPosts();
    }, [])


console.log(posts, 'posts')


    let  [customChange, onCustomChange] = useState('default')

   const onCustomIncrementChange = (e) => {
        onCustomChange(e.target.value)
   }


// Коротший синтаксис
// const NestedChild = () => {
//     const counter = useSelector(({counter: {value}}) => value)


  return(


      <header className="App-header">
          <h1>{counter}</h1>


          <ul>
              {
                  posts.map(post => {
                      <li>{post.title}</li>
                  })

              }
          </ul>



          <button onClick={() => {
            dispatch({type: 'INC-Custom', payload: customChange})
          }}> Increment</button>

          <button onClick={() => {
          dispatch(
              {type: 'DEC'}
          )
          }}>Decrement</button>

          <button onClick={() => {
              dispatch(
                  {type: 'RESET'}
              )
          }}>Reset</button>


              <input type="text" name={'customIncrement'} onChange={onCustomIncrementChange}/>





        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React with okten
        </a>

      </header>
  )

}




function App() {
  return (
    <div className="App">
        <NestedChild/>
    </div>
  );
}

export default App;
