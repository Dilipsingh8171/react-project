import Check from './Check';
import Another from './components/Another';
import  Todo  from './components/todo3/Todo';
import { useEffect, useState } from 'react';


function App() {
const[data,setata]=useState('welcome app')

  return (
    <>
    {data}
<Check/>
    </>
  );
}

export default App;