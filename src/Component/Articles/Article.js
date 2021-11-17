import React from 'react';

const Article = (props) => {
  const { headline, section_name, snippet, uri, web_url, pub_date, abstract } =
    props.article;
  return (
    <div className="p-3 border-b-4 container text-center">{headline.main}</div>
  );
};

export default Article;
