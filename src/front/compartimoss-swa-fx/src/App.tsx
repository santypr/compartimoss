import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [hello, setHello] = useState('');

  /* add a call to the api with one useEffect */

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/hellocompartimoss?name=CompartiMOSS');
      console.log(response);
      const data = await response;
      console.log(data);
      setHello(data.toString());
      console.log(hello);
    })();
  }, []);


  return (
    <>
      <div>
        <h1>Message from Fx Api: {hello}  v0.1</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
