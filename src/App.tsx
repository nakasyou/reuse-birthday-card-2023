import { createSignal, For } from 'solid-js'

interface Balloon {
  x: number
  y: number
  color: string
}
function App() {
  const params = new URL(location.href).searchParams

  const targetName = params.get('name')

  const [balloons, setBalloons] = createSignal<Balloon[]>([])
  const onClick = () => {
    alert('x')
    setBalloons([...balloons(), {
      color: '#f00',
      x: 0,
      y: 0
    }])
  }
  const loop = () => {
    setBalloons(balloons().map(balloon => {
      balloon.y += 10
      return balloon
    }))
    requestAnimationFrame(loop)
  }
  loop()
  
  return (
    <div>
      <div>
        <For each={balloons()}>{(balloon) => 
          <div class="fixed" style={{
            'top': balloon.y,
            'left': balloon.x,
          }}>
            s
          </div>
        }</For>
      </div>
      <div class="bg-gradient-to-r from-red-500 to-indigo-500 w-screen h-screen">
        <div class="flex items-center justify-center w-screen h-screen">
          <div class="text-4xl text-center">
            <div class="font-bold">Happy birthday,</div>
            <div>{ targetName }!!</div>
            <button onClick={onClick}>Button</button>
          </div>       
        </div>
      </div>
      <div class="fixed bottom-0 w-screen">
        <div class="text-xl text-center">By Shotaro Nakamura</div>
      </div>
    </div>
  )
}

export default App
