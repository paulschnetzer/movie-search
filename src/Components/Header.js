/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useRef, useEffect, useState } from 'react';
let useClickOutside = (handler) => {
  let domNode = useRef();
  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener('mousedown', maybeHandler);
    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return domNode;
};

const style = (toggle) => css`
  width: 100%;
  height: 80px;
  background-color: #e6f7ff;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    a {
      text-decoration: none;
      color: rgb(24, 27, 30);
      letter-spacing: 2px;
      cursor: pointer;
    }
  }
  nav {
    width: 30vw;
    ul {
      margin: 0;
      display: flex;
      justify-content: space-around;
      button {
        background-color: transparent;
        border: none;
        font-size: 16px;
        color: rgb(24, 27, 30);
        letter-spacing: 2px;
        outline: none;
        padding: 0;
        margin-top: -3px;
      }
      li {
        list-style: none;
        z-index: 10000;
        display: relative;
        .dropdown-content {
          display: ${toggle ? 'block' : 'none'};
          position: absolute;
          width: 120px;
          margin: 3px 0 0 -10px;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
          background-color: #e6f7ff;
          overflow: hidden;
          border-radius: 10px;
          div {
            padding: 12px 16px;
            :hover {
              background-color: #ade5ff;
            }
          }
        }
      }
    }
  }
`;

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  let handleToogle = () => {
    setIsOpen(!isOpen);
  };
  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });
  let handleClick = (option) => {
    props.setTotalMovieData('');
    props.setSearchBy(option);
  };

  return (
    <header css={style(isOpen)}>
      <div className="navigation">
        <h1>
          {' '}
          <a href="/">Filmy.com</a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li ref={domNode}>
              <button onClick={handleToogle}>
                Search by{isOpen ? '⏶' : '⏷'}
              </button>
              <div className="dropdown-content">
                <div onClick={() => handleClick('title')}>Title</div>
                <div onClick={() => handleClick('detail')}>Details</div>
                <div>Actors</div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
