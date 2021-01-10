import React from 'react';
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
    padding: 10px;
    width: 100%;
    border: 1px solid #e6f7ff;
    border-radius: 0 0 10px 10px;
    border-top: 0;
    font-size: 80%;
    line-height: 1.4rem;
  }
`;

export default function ShortReview(props) {
  return (
    <>
      <section css={style}>
        <div className="NameContainer">
          <p>
            Review by: <p>{props.review.author}</p>
          </p>
        </div>
        <div className="ContentContainer">{props.review.content}</div>
      </section>
    </>
  );
}
