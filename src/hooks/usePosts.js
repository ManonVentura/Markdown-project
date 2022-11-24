import {useState} from "react";

export default function usePosts() {

    const [post, setPost] = useState([])

    const handlePost = e => {
        console.log('e', e)
        // avant : setPost(...e) sauf que <- spread les strings, nous on veut spread tableau
        setPost([...post, e]); // = on a un tableau de post, et on rajoute e (= result (string) à la suite de post)
    }

    return {
        post,
        handlePost,
    }

}
