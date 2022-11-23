
import './App.css';
import useMarkdown from './hooks/useMarkdown';

function App() {

  const {bind, result} = useMarkdown()
  return (
    <div className="App">
      <textarea className="writeText" placeholder="write here" {...bind}/>
      <div className="showText" dangerouslySetInnerHTML={{__html: result}}/>
    </div>
  );
}

export default App;
