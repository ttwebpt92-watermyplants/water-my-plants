import React from 'react'
import styled from 'styled-components'

import './App.css';

function App() {
  return (
    <mainDiv>
      <header>
        <p>
          Water My Plants
        </p>
      </header>
    </mainDiv>
  );
}

export default App;

const mainDiv = styled.div`
  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: "0px 1px 6px -2px rgb(128, 127, 127)";
  margin: 16px 8px;
  padding: 16px;
  background-color: white;
`;