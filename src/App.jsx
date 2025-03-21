import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hero, Workout, Generotor} from './components/Index.jsx'
import { generateWorkout } from './utils/functions.js'

function App() {
  
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] =useState([])
  const [goal, setGoal] = useState('strength_power')
  const [workout, setWorkout] = useState(null)

  function updateWorkout() {
    if (muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout({ poison, muscles, goal })
    setWorkout(newWorkout)

    window.location.href = '#workout'
  }


  return (


    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero/>
      <Generotor
       poison={poison}
       setPoison={setPoison}
       muscles={muscles}
       setMuscles={setMuscles}
       goal={goal}
       setGoal={setGoal}
       updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App
