import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Greeting from './components/Greeting';

function App() {
  return (
    <div>
      <Greeting name="Dmitiy" />
      <Info />
      <Form />
    </div>
  );
}

export default App;
