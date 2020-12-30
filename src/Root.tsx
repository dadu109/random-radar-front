import React from 'react';
import Albums from './components/Albums';
import Header from './components/Header'
import styled from 'styled-components'

const Container = styled.div`
  max-width:1270px;
  margin: 0 auto;
  overflow: hidden;
  .main-content{
    @media(min-width: 700px){
      padding-left:35%;
    }
  }
`;

function App() {
  return (
    <Container>
      <Header />
      <div className="main-content">
        <Albums/>
      </div>
    </Container>
  );
}

export default App;
