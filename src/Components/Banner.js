import React from 'react';
import cinema from '../img/cinema.jpg';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const style = () => css`
  height: 300px;
  color: #e6f7ff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-family: Bebas Neue;
    font-size: 300%;
    font-weight: 100;
    margin: 0 0 30px 0;
    letter-spacing: 3px;
  }
  p {
    font-weight: 400;
    line-height: 1.5rem;
    opacity: 0.9;
  }
  background-color: #070812;
  img {
    height: 300px;
  }
  section {
    margin: 50px;
    width: 40vw;
  }
`;

export default function Banner() {
  return (
    <div css={style}>
      <section>
        <h1>Want Movies?</h1>
        <p>
          <b>We have over 500.000!</b>
          <br />
          Don't know what to watch or just want some info on your favorite
          Movie?
          <br /> We got you covered!
        </p>
      </section>
      <img src={cinema} alt="" />
    </div>
  );
}
