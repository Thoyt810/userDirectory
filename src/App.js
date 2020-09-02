import React from 'react';
import Main from './componets/Content';
import Wrapper from './componets/Wrapper';
import Header from './componets/Header';


function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
