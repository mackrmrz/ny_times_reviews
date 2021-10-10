import React from 'react';

const BookItem = (props) => {
  console.log('STATE', props.book);
  const { title, description, book_image, author } = props.book;
  return (
    <div className="my-6 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md items-center space-x-4">
      {/* <img src={`${book_image}`} alt="" />
      <h1>{title}</h1>
      <p>{description}</p> */}
    </div>
  );
};

export default BookItem;
