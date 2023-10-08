import { createSignal } from 'solid-js'

function App() {
  const params = new URL(location.href).searchParams

  const targetName = params.get('name')

  return (
    <div>
      <div class="text-4xl text-center">
        <div class="font-bold bg-gradient-to-r from-red-500 to-indigo-500">Happy birthday,</div>
        <div>{ targetName }!!</div>
      </div>
      <div class="fixed bottom-0 mx-10">
        <div>By Shotaro Nakamura</div>
      </div>
    </div>
  )
}

export default App
