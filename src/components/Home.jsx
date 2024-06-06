import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css';
import BookCard from './BookCard';
import home from '../assets/home.png';
import right from '../assets/right.png';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const [data,setData] = useState([]);
  const [input_text,setInput] = useState('');

  const fetchBooks = async ()=>{
    const searchvalue = input_text.split(" ").join("+");
    let response = await axios.get(`https://openlibrary.org/search.json?q=${searchvalue}&limit=10&page=1`);
    const res_data = response.data;
    const {docs} = res_data;
    setData(docs);
    console.log(docs);
  }


  useEffect(() => {
    const timer = setTimeout(() => {
      fetchBooks();
    }, 500)

    return () => clearTimeout(timer)
  }, [input_text])


  return (
    <>
      <div className="content">
        <div className="navigation">
          <button className="gotohome"><img src={home} alt="" className="icon1" onClick={()=>{navigate('/')}}/></button>
          <h1 className="title">Personal Bookshelf</h1>
          <button className="gotohome" onClick={()=>{navigate('/bookshelf')}}>My Bookshelf<img src={right} alt="" className="icon1 icon2" /></button>
        </div>
        <div className="search_area"><span className="search_text">Search Book Name: </span> <input type="search" className="search" placeholder='type to search...' onChange={(event)=>{setInput(event.target.value)}} value={input_text}/></div>
        <div className="container">
          { (data.length == 0 && input_text.length != 0)?
            <h2>Finding books...</h2>:
            data.map((item,index)=>{
              return (
                <BookCard  key={index} data={item}/>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home