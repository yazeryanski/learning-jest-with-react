import './App.css';
import React from 'react';
import Entry from './pages/Entry/Entry';
// import Summary from './pages/Summary/Summary';
import { OrderContextProvider } from './contexts/Order/Provider';

function App() {  
  return (
    <div className="App">
      <OrderContextProvider>
        <>
          <h2 className="mb-5">Unit testing</h2>
          {/* <Summary /> */}
          <Entry />
        </>
      </OrderContextProvider>
    </div>
  );
}

export default App;
