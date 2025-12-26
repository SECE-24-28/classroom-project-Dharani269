import { useEffect, useState } from 'react';
import axios from 'axios';
const UseEffectAPI = () => {
    const[postsParameter,setPostsParameter] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            setPostsParameter(res.data);
            console.log(res.data);
        }).catch(() => {
            console.log("Can't Fetch from the API");
        })
        },[]);
     return (
        <div>
            <h3>UseEffectAPI Component</h3>
            <p> It is going to fetch data from JSON Typicode Placeholder API.</p>
    <ol>
        <p>The API Values which fetched was</p>
                   {postsParameter.map((postTitle) => (
                      <li key={postTitle.id}>{postTitle.title}</li>
                    ))}
    </ol>
        </div>
            );
};
export default UseEffectAPI;
