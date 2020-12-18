import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const styles = () => css`
  position: fixed;
  width: calc(100% - 150px);
  height: calc(100vh - 150px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(24, 27, 30);
  border-radius: 10px;

  p {
    margin: 3px 0;
  }
  h5 {
    margin: 12px 0 0 0;
  }
  button {
    margin-top: 10px;
  }
`;
const overlay = () => css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(240, 248, 255, 0.6);
  z-index: 1000;
`;

export default function DetailView(props) {
  if (!props.modalDetailView) return null;

  return (
    <>
      <div css={overlay()}>
        <div css={styles()}>
          <button onClick={() => props.setModalDetailView(false)} />
        </div>
      </div>
    </>
  );
}
