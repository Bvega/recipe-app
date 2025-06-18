import { useState, useEffect } from 'react'
import './App.css'

function App() {


  // fetch recipes
  // useEffect(() => {}, []);
  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => console.log(data))    
  }, []);

  return (
    <>
     <h1>Recipes App</h1>
    </>
  )
}

export default App