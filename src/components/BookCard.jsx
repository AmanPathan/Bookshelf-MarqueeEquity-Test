import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const BookCard = (props) => {
  const { author_name, title, cover_i } = props.data;

  const handleClick = () => {

    var curr_data = localStorage.getItem('item');

    curr_data = curr_data ? JSON.parse(curr_data) : [];

    curr_data.push({
      "author": author_name[0],
      "title": title,
      "id": cover_i
    });

    localStorage.setItem('item', JSON.stringify(curr_data));
    toast.success('Book added to Bookshelf');

  }
  const image_url = `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false} />
      <div className="book-card">
        <div className="book-img"><img src={image_url} alt="error" className="image" /></div>
        <div className="book-info">
          <h3 className="book-title">{title}</h3>
          <h4 className="book-author"><span>Author: </span>{author_name[0]}</h4>
          <button className="book-btn" onClick={() => { handleClick() }}>Add to Bookshelf</button>
        </div>
      </div>
    </>
  )
}

export default BookCard