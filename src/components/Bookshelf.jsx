import React, { useEffect, useState } from 'react'
import '../App.css';
import home from '../assets/home.png';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Bookshelf = () => {

  const navigate = useNavigate();

  const book_data = localStorage.getItem('item');
  const data = book_data ? JSON.parse(book_data) : [];
  const [books, setData] = useState([]);
  useEffect(() => {
    setData(data);
  }, []);


  const handleClick = (id) => {
    const updated_data = books.filter((element, index) => index !== id);
    localStorage.setItem('item', JSON.stringify(updated_data));
    setData(updated_data);
    toast.success('Book has been removed!');
  }
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false} />
      <div className="content">
        <h1 className="title title1">My Bookshelf</h1>
        <div className="bookshelf_content">
          {
            books.length == 0 ?
              <>
                <h2 className='title title2'>Add some books to Bookshelf to read later... <a onClick={() => { navigate('/') }} className="link">Go Back</a></h2>

              </> :
              <div className="container">
                {
                  books.map((item, index) => {
                    const { id, author, title } = item;
                    const image_url = `https://covers.openlibrary.org/b/id/${id}-M.jpg`;
                    return (
                      <div className="book-card">
                        <div className="book-img"><img src={image_url} alt="error" className="image" /></div>
                        <div className="book-info">
                          <h3 className="book-title">{title}</h3>
                          <h4 className="book-author"><span>Author: </span>{author}</h4>
                          <button className="book-btn" onClick={() => { handleClick(index) }}>Remove</button>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
          }
        </div>

      </div>
    </>
  )
}

export default Bookshelf