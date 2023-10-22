import { createSignal, For } from 'solid-js'

interface Balloon {
  x: number
  y: number
  color: string
  vy: number
}
function App() {
  const params = new URL(location.href).searchParams

  const targetName = params.get('name')

  const [balloons, setBalloons] = createSignal<Balloon[]>([])
  const onClick = () => {
    setBalloons([...balloons(), {
      color: '#' + Math.random().toString(16).slice(2, 8),
      x: Math.random() * 100,
      y: Math.random() * 100,
      vy: Math.random()
    }])
  }
  const loop = () => {
    try {
      setBalloons(balloons().map(balloon => {
        balloon.y -= balloon.vy
        return balloon
      }))
      requestAnimationFrame(loop)
    } catch (error) {
      alert(error)
    }
  }
  loop()
  
  return (
    <div>
      <div>
        {balloons().map((balloon) => 
          <div class="fixed" style={{
            'top': balloon.y + 'vh',
            'left': balloon.x + 'vw',
          }}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={71.90642 / balloon.vy} height={145.82958 / balloon.vy} viewBox="0,0,71.90642,145.82958">
              <g transform="translate(-204.04679,-139.53092)">
                <g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill={balloon.color} fill-rule="nonzero" stroke="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal">
                  <path d="M275.95321,180c0,22.35045 -16.0968,40.46908 -35.95321,40.46908c-19.85641,0 -35.95321,-18.11863 -35.95321,-40.46908c0,-22.35045 16.0968,-40.46908 35.95321,-40.46908c19.85641,0 35.95321,18.11863 35.95321,40.46908z" stroke-width="0" />
                  <path d="M248.5903,285.36051c-2.5,0 -2.5,-2.5 -2.5,-2.5l0.17881,-0.07152c-1.47097,-3.69891 -2.13576,-7.44623 -3.09793,-11.29771c-2.57158,-10.29385 -5.93943,-20.53091 -7.31297,-31.08204c-0.26666,-2.04841 -0.99022,-4.72728 -1.42514,-7.30041c-0.03079,0.00112 -0.06171,0.00169 -0.09278,0.00169c-1.38071,0 -2.5,-1.11929 -2.5,-2.5v-2.5l0.11223,0c-0.03206,-0.0943 -0.06411,-0.18859 -0.09617,-0.28289l0.13059,-0.26019l-0.08263,-0.01907l0.246,-1.066c-0.09532,-0.31582 -0.17684,-0.66425 -0.24314,-1.04747c-0.08415,-0.48641 -0.05083,-1.05595 0.08178,-1.67582c-0.08732,-0.92594 -0.00291,-1.89069 -0.12613,-2.81369c-0.4067,-3.04635 -1.33673,-5.93357 -1.7506,-9.00446c0,0 -0.33041,-2.47807 2.14766,-2.80848c2.47807,-0.33041 2.80848,2.14766 2.80848,2.14766c0.20185,1.5319 0.40267,3.15777 0.62634,4.79568c0.73873,-0.86261 1.81044,-1.36303 3.29563,-1.21429c0.10678,-0.05126 0.21381,-0.0997 0.32101,-0.14518l0.36165,-0.60275c0.43183,-0.74893 1.24069,-1.25305 2.16731,-1.25305c0.46926,0 0.90832,0.12929 1.28351,0.35419c0.22697,-0.06778 0.46748,-0.10419 0.71649,-0.10419c1.38071,0 2.5,1.11929 2.5,2.5c0,0.12613 -0.00934,0.25009 -0.02737,0.3712l-0.48697,3.65227c-0.22951,3.23586 0.13279,9.01751 -3.82296,10.55396c-0.76958,0.29891 -1.62634,0.35982 -2.50549,0.23918c0.01105,0.28611 0.03174,0.56925 0.07004,0.84688c0.60196,4.36398 1.09001,8.92939 1.95491,13.23883c1.7409,8.67419 4.34136,17.14056 6.48696,25.71691c0.91248,3.64733 1.49504,7.20778 2.90207,10.70229l0.17881,1.92848c0,0 0,2.5 -2.5,2.5z" stroke-width="0.5" />
                </g>
              </g>
            </svg>
          </div>
        )}
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
