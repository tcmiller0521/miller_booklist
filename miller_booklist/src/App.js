import './App.css';
import BookForm from './components/form';
import BookCard from './components/card';
import { useState } from 'react'
import BookInfo from './components/bookinfo';

function App() {
  const [content, setContent] = useState(BookInfo)

  return (
    <>
      <BookForm setContent={setContent} content={content} />
      <BookCard content={content} />
    </>
  );
}

export default App;
