import React from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import Flex from './components/Flex';
import Console from './components/Console';


const AppWrapper = styled.div`
width:100%;
min-height:100vh;
padding:2rem;
background:black;
`

function App() {
  return (
    <AppWrapper>
      <Flex justify={'center'}>
        <Title color={'green'}>Console cmd 20223. 18 August</Title>
      </Flex>
      <Console/>
    </AppWrapper>
  );
}

export default App;
