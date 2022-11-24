
import './App.css';
import useMarkdown from './hooks/useMarkdown';
import usePosts from './hooks/usePosts';

function App() {
  const {bind, result} = useMarkdown()
  const {post, handlePost} = usePosts()


  let falseData = []
  console.log('result',result)
  console.log('post', post)
  const posts = post.map((data, i) => {
    return (
      <div className='post' key= {i} dangerouslySetInnerHTML={{__html: data}}> 
      </div>
  )
  }
  )

  return (
    <div className="App">
      <div className='header'>
        <h1>My blog</h1>
      </div>
      <div className="writeContainer">
      <textarea className="writeText" placeholder="write here" {...bind}/>
      <div className="showText" dangerouslySetInnerHTML={{__html: result}}/>
      <button onClick={() => handlePost(result)} className="postBtn">Post</button>
      </div>
      <div className="displayPostsContainer">
        {posts}
      </div>
    </div>
  );
}

export default App;
