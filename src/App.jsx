import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <div className='w-[1000px] mx-auto'>
    <Header></Header>
    <Outlet></Outlet>
    </div>
  )
}

export default App