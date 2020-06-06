/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import Container from "../Global/Container";

const Input = ({inputValue, setInputValue, handleInput}) => {
  return (
    <Container>
      <h1 style={{textAlign: "center"}}>React Movie App</h1>
      <form style={{display: "flex", justifyContent: "center"}} onSubmit={handleInput}>
        <input type="text" css={styles} value={inputValue} onChange={e => setInputValue(e.target.value)}/>
      </form>
    </Container>
  );
};

const styles = css`
  width: 100%;
  max-width: 600px;
`

export default Input;
