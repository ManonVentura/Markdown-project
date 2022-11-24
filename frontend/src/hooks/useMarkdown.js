import {useState} from "react";
import * as MarkdownIt from "markdown-it"
var emoji = require('markdown-it-emoji')


export default function useMarkdown() {
    const [text, setText] = useState({post : "", author : 'Manon', date : new Date()})
    // Markdown --> modifier mise en page texte via des commandes style **texte en gras** ou # titre
    var md = new MarkdownIt();
    md.use(emoji)
    
    const handleChange= (e) => {
        var result = md.render(e.target.value, emoji);
        console.log(result)
        setText({post : result, author: 'Manon', date : new Date()});
    }
    
    const postingArticle = () => {
        fetch('http://localhost:3000/', {
        method: 'POST', 
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(text)
        }).then(response => response.json())
        .then(data => {
          if (!data) {
            console.log('oupsi')
          }
          })
        }
    
    
    return {
        text,
        postingArticle,
        //
        bind: {
            onChange: handleChange,
        }
    }
}