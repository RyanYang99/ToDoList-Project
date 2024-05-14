import { useState } from 'react'
import './App.css'

function App() {
  const initialState = [
    { id: 1, title: "오늘할일", detail: "리액트 복습하기" },
    { id: 2, title: "내일할일", detail: "리액트 복습하기2" },
  ];

  const [texts, setTexts] = useState(initialState);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const addText = (e) => {
    e.preventDefault();

    if (!title || !detail) {
      alert("제목과 내용을 모두 입력해주세요!")
      return;
    }

    setTexts([
      ...texts,
      {
        id: Date.now(),
        title,
        detail,
      },
    ]);

    setTitle("");
    setDetail("");
  };

  const removeText = (id) => {
    setTexts(texts.filter((text) => text.id !== id));
  };


  return (
    <>
      <li className='TodoTemplate'>
        <div className='header-box'>
          <h1> My To Do List </h1>
        </div>
        
        <div className='search-bar'>
          <form onSubmit={addText}>
            <input className='title-input'
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input className='text-input'
              type="text"
              placeholder="내용"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
            <button className='submit-btn' type="submit">Submit</button>
          </form>
        </div>
        
        <div className='card'>
          <ul>
            {texts.map((text) => (
              <li key={text.id} style={{ display: "flex", alignItems: "center" }}>
                <span>Title: {text.title}, Detail: {text.detail}</span>
                <button onClick={() => removeText(text.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>  
      </li>  
    </>
  );
}
export default App;
