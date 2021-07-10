
import './App.css';

import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from "react";
import Users from "./components/Users/Users";


const NestedChild = () => {

    // Custom Increment
    let [customChange, setCustomChange] = useState('')

    const onCustomIncrementChange = (e) => {
        setCustomChange(e.target.value)
    }


    const counterApp = useSelector(({counter: {value}}) => value)
    const dispatch = useDispatch()






    return(
        <div>
            {/*Users component*/}
            <Users/>
            <h1>{counterApp}</h1>


            {/*Increment*/}
            <form action="#">
                <input  type={'number'}  onChange={onCustomIncrementChange} />

                <button onClick={() => {
                    dispatch({type: 'INC-CUSTOM', payload: customChange})
                }
                }>Increment</button>
            </form>

            {/*Decrement*/}
            <form action="#">
                <input type={'number'} onChange={onCustomIncrementChange}/>
                <button onClick={() => {
                    dispatch({
                        type: 'DEC-CUSTOM', payload: customChange
                    })

                }}>Decrement</button>
            </form>



            {/*Reset*/}
            <button onClick={() => {
                dispatch({
                    type: 'RESET'


                })


            }}>Reset</button>



        </div>
    )

}





function App() {
  return (
      <div>
        <div className="App">
          <NestedChild/>
        </div>
      </div>

  );
}

export default App;
