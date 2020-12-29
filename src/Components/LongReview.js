import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const style = () => css`
  margin: 20px 0px;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .NameContainer {
    border: 1px solid #e6f7ff;
    padding: 5px 10px 7px 10px;
    border-radius: 10px 10px 0 0;
    width: 100%;
    background-color: rgb(41, 45, 49);
    p {
      display: inline;
      font-size: 70%;
      p {
        font-style: italic;
        font-size: 100%;
      }
    }
  }
  .ContentContainer {
    background-color: rgb(35, 39, 43);
    width: 100%;
    padding: 10px;
    border: 1px solid #e6f7ff;
    border-radius: 0 0 10px 10px;
    border-top: 0;
    font-size: 80%;
    line-height: 1.4rem;
  }
  button {
    width: 100px;
    background-color: transparent;
    border: 1px solid #e6f7ff;
    border-top: 0;
    border-radius: 0 0 10px 10px;
    color: #e6f7ff;
    padding: 5px;
    outline: none;
  }
`;

export default function LongReview(props) {
  const [toggle, setToogle] = useState(false);
  let handleToggle = () => {
    setToogle(!toggle);
  };
  let shortendContent = props.review.content.slice(0, 500) + ' . . .';
  return (
    <section css={style}>
      <div className="NameContainer">
        <p>
          Review by: <p>{props.review.author}</p>
        </p>
      </div>
      <div className="ContentContainer">
        {toggle ? props.review.content : shortendContent}
      </div>
      <button onClick={handleToggle}>
        {toggle ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
}
