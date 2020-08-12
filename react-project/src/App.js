import React from 'react';
import {Switch} from 'my-react-library';

const App = () => {
  return (
    <div>
      <Switch />
      <style jsx global>{`
        *{
          margin:0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default App;