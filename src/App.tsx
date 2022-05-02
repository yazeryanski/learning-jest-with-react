import './App.css';
import React from 'react';
import Entry from './pages/Entry/Entry';
// import Summary from './pages/Summary/Summary';
import { OrderContextProvider } from './contexts/Order/Provider';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <OrderContextProvider>
        <Container>
          <h2 className="mb-5">Unit testing</h2>
          {/* <Summary /> */}
          <Entry />
        </Container>
      </OrderContextProvider>
    </div>
  );
}

export default App;
