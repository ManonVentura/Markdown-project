import {useState, useEffect} from "react";

export default function usePosts() {

    const [post, setPost] = useState([])

    // const handlePost = e => {
    //     // avant : setPost(...e) sauf que <- spread les strings, nous on veut spread tableau
    //     setPost([...post, e]); // = on a un tableau de post, et on rajoute e (= result (string) à la suite de post)
    // }
        useEffect(() => {
            function getPost() {
            fetch('http://localhost:3000/posts')
            .then(response => response.json())
            .then(data => setPost(data.posts))
            .catch(err => console.error(err));
        }
        getPost()
    }, [])
 

    return {
        post,
        // handlePost,
       
    }

}
