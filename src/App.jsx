import React, {Suspense} from 'react'
import './App.css'
import Audio from './components/Audio'
import Video from './components/Video'

function App() {

  return (
    <div className='main-container'>
      <Video />
      <Audio />   
    </div>
  )
}

export default App
