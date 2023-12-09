import './App.css'
import KamariBg from "../src/assets/1.png"

function App() {
  const fontCode = '#2D4651';
  return (
    <>
      <div className='w-full h-screen'>
        <img src={KamariBg} className='w-full h-full object-cover object-center'/>
        <div className='w-full h-full absolute top-0 p-4 flex flex-col items-center justify-between bg-gradient-to-b from-black/50 to-black via-transparent py-8'>
          <div className='p-4 text-center font-bold uppercase text-white'>
            <h1 className='text-5xl'>Kamari</h1>
            <p className='text-sm'>chill coffee talk</p>
          </div>
          <div className='p-4 bg-white w-10/12 text-center font-bold text-2xl  rounded-full'>
            <a className='' href={`/dashboard`}>
              <button className='fontcolor'>Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
