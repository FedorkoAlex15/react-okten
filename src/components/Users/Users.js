import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import User from "../User/Users";
export default function Users(){

    const users = useSelector(({users}) => users)
    const dispatch = useDispatch();

    const fetchPosts = async () => {
       const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        dispatch({
            type: 'Add_USERS',
            payload: data
        })

    }





    useEffect(() => {
        fetchPosts()
    }, [])


console.log(users, 'users')

    return(
        <div>
            <h1>Users</h1>

            {
                users.map(user => {
                    return <div key={user.id}> <User val={user}/></div>
                })
            }

        </div>
    )
}