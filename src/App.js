/* eslint-disable */ 

import { useState } from 'react';
import './App.css';

function App() {

  let [post, setPost] = useState(['남자 코트 추천', '강남 우동 맛집', '여자 코트 추천']);
  let [like, setLike] = useState(0);

  function update(){
    let copy = [...post];
    copy[0] = '역삼 우동 맛집';
    setPost(copy)
  }
  function 정렬(){
    let copy = [...post];
    setPost(copy.sort());
  }

  return (
    <div className="App">
      <header className='black-nav'>
        <h3 className='logo'><a href='#'>윤's Blog</a></h3>
      </header>

      <main>
        <h3 className='content-title'>글 목록</h3>
        <button onClick={update}>글 변경</button>
        <button onClick={정렬}>가나다 정렬</button>
        <div className='post'>
          <div className='post-top'>
            <h4 className='post-title'>
              <a href='#'>{post[0]}</a>
            </h4>
            <div className='like'>
              <button className='like-btn' onClick={() => { setLike(like + 1) }}>👍</button>
              <span>{like}</span>
            </div>
          </div>
          <p className='post-bottom'>4월 17일(월)</p>
        </div>
        <div className='post'>
          <div className='post-top'>
            <h4 className='post-title'>
              <a href='#'>{post[1]}</a>
            </h4>
            
          </div>
          <p className='post-bottom'>4월 17일(월)</p>
        </div>
        <div className='post'>
          <div className='post-top'>
            <h4 className='post-title'>
              <a href='#'>{post[2]}</a>
            </h4>
          </div>
          <p className='post-bottom'>4월 17일(월)</p>
        </div>

        <Modal></Modal>
      </main>

      <footer></footer>
    </div>
  );
}

function Modal(){
  return(
    <div className='post-modal'>
          <h4 className='modal-title'>글제목</h4>
          <div className='modal-content'>
            <p className='modal-date'>4월 17일</p>
            <div className='clear'></div>
            <p className='modal-detail'>
              이러저런내용<br />
              ddddsfs
            </p>
          </div>
        </div>
  )
}

export default App;
