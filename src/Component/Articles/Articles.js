import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './Article';
require('dotenv').config();

const ArticlesNYT = () => {
  const [articles, setArticles] = useState([]);
  const [docs, setDoc] = useState([]);
  console.log('STATE', docs);
  const fetchArticles = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    try {
      await axios
        .get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}`
        )
        .then((res) => {
          return setArticles(res.data.response), setDoc(res.data.response.docs);
        });
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  };

  // const mapArticles = () => {
  //   return articles.docs.map((article, index) => {
  //     return <Article key={index} article={article} />;
  //   });
  // };
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      {docs.map((article, index) => {
        return <Article key={index} article={article} />;
      })}
    </div>
  );
};

export default ArticlesNYT;
