import {useState} from "react";
import * as MarkdownIt from "markdown-it"
var emoji = require('markdown-it-emoji')


export default function useMarkdown() {
    const [text, setText] = useState("")
    // Markdown --> modifier mise en page texte via des commandes style **texte en gras** ou # titre
    var md = new MarkdownIt();
    md.use(emoji)
    var result = md.render(text, emoji);

    const handleChange= (e) => {
        setText(e.target.value);
    }
    
    
    return {
        result,
        //
        bind: {
            onChange: handleChange,
        }
    }
}