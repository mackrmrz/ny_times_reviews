import React, {useState} from 'react';
import { FaAngleDown } from 'react-icons/fa';

const BookItem = (props) => {
  const [btnDB, setBtnDB] = useState(false);
  const { title, description, book_image, author } = props.book;
  return (
    <div className="my-6 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md items-center space-x-4">
      <img src={`${book_image}`} alt="" />
      <h1 className="font-bold font-sans">{title}</h1>
      <p className="py-2 leading-7">{description}</p>
      <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
        Buy
        <FaAngleDown className='fill-current h-4 w-4'/>
      </button>
      <div className='lg:hidden absolute rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'>
        {props.book.buy_links.map((buy_link, index) => {
          return (
            <ul key={index}>
              <li className='text-gray-600 font-bold leading-5'>
                <a href={buy_link.url}>{buy_link.name}</a>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default BookItem;
