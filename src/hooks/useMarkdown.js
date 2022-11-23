import {useState} from "react";
import * as MarkdownIt from "markdown-it"


export default function useMarkdown() {
    const [text, setText] = useState("")
    // Markdown --> modifier mise en page texte via des commandes style **texte en gras** ou # titre
    var md = new MarkdownIt();
    var result = md.render(text);

    const handleChange= e => 
    setText(e.target.value);

    return {
        result,
        //
        bind: {
            onChange: handleChange,
        }
    }
}