
import './App.css'
import Background from './components/Background'
import Forground from './components/Forground'

function App() {

  return (
    <>
      <div className=' relative bg-zinc-800 w-full h-screen'>
    <Background/>
        <div className='fixed top-0 left-0 w-full h-full   z-10'>

        </div>
      </div>
      
      
    </>
  )
}

export default App
