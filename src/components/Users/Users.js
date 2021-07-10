import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
export default function Users(){

    const posts = useSelector(({posts}) => posts)
    const dispatch = useDispatch();

    const fetchPosts = async () => {
       const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        dispatch({
            type: 'Add_POSTS',
            payload: data
        })

    }





    useEffect(() => {
        fetchPosts()
    }, [])


console.log(posts, 'posts')

    return(
        <div>
            {
                posts.map(post => {
                    return <div>{post.name}</div>
                })
            }
        </div>
    )
}