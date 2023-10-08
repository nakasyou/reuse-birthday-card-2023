import { createSignal } from 'solid-js'

function App() {
  const params = new URL(location.href).searchParams

  const targetName = params.get('name')

  return (
    <div>
      <div class="bg-gradient-to-r from-red-500 to-indigo-500 h-screen">
        <div class="text-4xl text-center">
          <div class="font-bold">Happy birthday,</div>
          <div>{ targetName }!!</div>
        </div>
      </div>
      <div class="fixed bottom-0 mx-10">
        <div class="text-xl text-center">By Shotaro Nakamura</div>
      </div>
    </div>
  )
}

export default App
