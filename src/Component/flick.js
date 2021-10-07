import React from 'react';

const Flick = (props) => {
  //   console.log('Not ERROR ', props.reviews);

  const {
    byline,
    link,
    headline,
    display_title,
    multimedia,
    summary_short,
    mpaa_rating
  } = props.reviews;
  //   const { src, type } = multimedia; try to find a way to unpack this object
  const { type, url, suggested_link_text } = link;
  return (
    <div className="p-5 border-3 block text-left shadow-md">
      <h1 className="font-bold">{headline}</h1>
      <h2>{display_title}</h2>
      <h4 className="font-sans tex-center text-red-300">{byline}</h4>
    </div>
  );
};

export default Flick;
