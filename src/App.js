/* eslint-disable */ 

import { useRef, useState } from 'react';
import './App.css';

function App() {

  let [post, setPost] = useState([
    {id : 0, title : '남자 코트 추천', date: '4월 17일(월)', content: '별 내용 없음', like : 0},
    {id : 1, title : '강남 우동 맛집', date: '4월 17일(월)', content: '별 내용 없음', like : 0},
    {id : 2, title : '여자 코트 추천', date: '4월 17일(월)', content: '별 내용 없음', like : 0}
  ]);
  let [modal, setModal] = useState(false);
  let [modalIndex, setModalIndex] = useState(0);
  let [text, setText] = useState('');

  function 글제목수정(){
    let copy = [...post];
    copy[0].title = "군산 떡볶이 맛집";
    setPost(copy);
  }
  function showModal(i){
    setModal(true);
    setModalIndex(i)
  }
  function addLike(i){
    let copy = [...post];
    copy[i].like++;
    setPost(copy);
  }
  function addPost(){
    if(text == '' || text == null){
      alert('글제목 입력해라')
    } else{
      let copy = [...post];
      let newId = copy[copy.length -1].id + 1;

      let now = new Date();
      let month = now.getMonth()+1;
      let day = now.getDate();
      let week = ['일','월','화','수','목','금','토'];
      let date = month + "월 " + day + '일(' + week[now.getDay()] +')';

      copy.push(
        {id : newId, title : text, date: date, like : 0},
      );
      setPost(copy);
      setText('');
    }
  }
  function removePost(i){
    let copy = [...post];
    copy.splice(i,1);
    setPost(copy);
  }
  console.log(post)

  return (
    <div className="App">
      <header className='black-nav'>
        <h3 className='logo'><a href='#'>윤's Blog</a></h3>
      </header>

      <main>
        <h3 className='content-title'>글 목록</h3>

        {
          post.map((item, i) => {
            return(
              <div className='post' key={item.id}>
                <div className='post-top'>
                  <h4 className='post-title' onClick={()=>{showModal(i)}}>
                    <a href='#'>{item.title}</a>
                  </h4>
                  <div className='like'>
                    <button className='like-btn' onClick={()=>{addLike(i)}}>👍</button>
                    <span>{item.like}</span>
                  </div>
                  <button onClick={()=>{removePost(i)}}>삭제</button>
                </div>
                <p className='post-bottom'>{item.date}</p>
              </div>
            )
          })
        }

        <input onChange={(e)=>{setText(e.target.value)}} value={text}/>
        <button onClick={addPost}>발행</button>

        {
          modal == true ? <Modal modalIndex={modalIndex} post={post} 글제목수정={글제목수정}></Modal> : null
        }

        
      </main>

      <footer></footer>
    </div>
  );
}

function Modal(props){
  let post = props.post[props.modalIndex];
  return(
    <div className='post-modal'>
          <h4 className='modal-title'>{post.title}</h4>
          <div className='modal-content'>
            <p className='modal-date'>{post.date}</p>
            <div className='clear'></div>
            <p className='modal-detail'>
              {post.content}
            </p>
            <button onClick={props.글제목수정}>글 수정</button>
          </div>
        </div>
  )
}

export default App;
