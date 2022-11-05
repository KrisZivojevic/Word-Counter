import { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Navigation from './components/Navigation/Navigation';
import Text from './components/Text/Text';

function App() {
  const [content, setContent] = useState("");
  const [words, setWords] = useState(0);
  const [chars, setChars] = useState(0);

  const handleTextarea = (event) => {
    const value = event.target.value;
    const wordList = value.trim().split(" ");
    const wordCount = value.trim() ? wordList.length : 0;
    const charCount = wordList.join("").length;

    setContent(value);
    setWords(wordCount);
    setChars(charCount);
    
  }

  const handleRefresh = () => {
    setWords(0);
    setChars(0);
    setContent("");
  }

  return (
    <div className='app'>
      <Navigation handleRefresh={handleRefresh} />
      <div className='body'>
        <Text handleTextarea={handleTextarea} content={content} />
        <div>
          <Counter label="Words" value={words}  />
          <Counter label="Characters" value={chars} />
        </div>
      </div>
    </div>
  )
    
  
}

export default App;
