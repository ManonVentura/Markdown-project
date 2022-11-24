import {  useState } from 'react';
import './App.css';
import useMarkdown from './hooks/useMarkdown';
import usePosts from './hooks/usePosts';

function App() {
  const {bind, postingArticle, text} = useMarkdown()

  const {post} = usePosts()


  const posts = post.slice(0).reverse().map((data, i) => {
  console.log(data.date)
    var dateString = data.date;
    return (
      <div className='post'>
        <div className='postText' key= {i} dangerouslySetInnerHTML={{__html: data.post}}></div>
        <div className="infoPost">
          <p>Author : {data.author}</p>
          <p>Written on {dateString} </p>
        </div>
      </div>
  );
  });

  function click() {    
    postingArticle(text)
  }
  return (
    <div className="App">
      <div className='header'>
        <p>Home | About | FAQ </p>
        <h1 className="title">ROAD TO SUCCESS </h1>
      </div>
      <div className='separator'></div>
        <div className='explanationsContainer'>
        <p className='explanations'>Write here ...</p>
        <p className='explanations'>... see the preview of your post here !</p>
        </div>
      <div className="writeContainer">
      <textarea className="writeText" placeholder="write here" {...bind}/>
      <div className="showText" dangerouslySetInnerHTML={{__html: text.post}}/>
      <button onClick={() => click()} className="postBtn">Post</button>
      </div>
      <div className='separator'></div>
      <div className="displayPostsContainer">
        {posts}
      </div>
    </div>
  );
}

export default App;
