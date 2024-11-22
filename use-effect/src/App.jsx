import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);  
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json));
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      <p>Screen Size: {windowWidth}</p>
      <div>
        {items.map(item => {
          return <pre key={item.id}>{JSON.stringify(item)}</pre>
        })}
      </div> 

    </>
  )
}

export default App
