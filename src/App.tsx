import { createSignal } from 'solid-js'
import './App.css'

function App() {
  const params = new URL(location.href).searchParams

  const targetName = params.get('name')

  return (
    <div>
      { targetName }
    </div>
  )
}

export default App
