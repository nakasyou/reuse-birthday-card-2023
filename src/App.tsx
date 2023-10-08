import { createSignal } from 'solid-js'

function App() {
  const params = new URL(location.href).searchParams

  const targetName = params.get('name')

  return (
    <div>
      <div class="text-4xl">
        <div>Happy birthday,</div>
        <div>{ targetName }</div>
      </div>
    </div>
  )
}

export default App
