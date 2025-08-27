import ReactDOM from 'react-dom';
import Markdown from 'marked-react';

import { useEffect, useRef, useState } from "react";

function App() {
  //state
  const refTexarea = useRef();

  useEffect(()=>{
    refTexarea.current.focus()
  },[])

  const [showprevMardown,setShowprevMardown]= useState("")

  const showMagicMardown = ()=>{
    setShowprevMardown(refTexarea.current.value)
  }

  return (
    <>
      <div className="App">
        <div className="elements">
          <div className="element">
            {/* copy */}
            <textarea ref={refTexarea} defaultValue="# `Prévisualisateur - Bicom Lab`&#13;### Oh ! De la magie !&#13;En réalité, pas vraiment : ceci s'appelle du markdown, et ce projet réalisé entièrement avec React permet de le transformer en *HTML* !&#13;&#13;### Cas d'utilisation&#13;* *italique*&#13;* **gras**&#13;* `monospace`&#13;* ~~barré~~&#13;* # h1&#13;* ## h2&#13;* ### h3&#13;* #### etc&#13;[Believemy](https://believemy.com)" onChange={showMagicMardown}></textarea>
          </div>
          <div className="element">
            {/* previsualisation */}
            {/* <textarea  value={showprevMardown}></textarea> */}
            <Markdown>{showprevMardown}</Markdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
