import React, { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchEffect = () => {
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
      .then(response => response.json())
      .then(data => { setJoke(data.joke); setLoading(false) }) //this will render if data retreival is successful, can be manipulated
      .catch(error => console.error("Error fetching user:", error)); //this will render if data retreival is fails
  }

  useEffect(() => {
    fetchEffect()
  }, [])

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      <JokeDisplay joke={joke} loading={loading} />
      {/* Step 5: Pass the function to FetchButton so it can fetch a new joke on click */}
      <FetchButton fetchJoke={fetchEffect} />
    </div>
  )
}

export default App
