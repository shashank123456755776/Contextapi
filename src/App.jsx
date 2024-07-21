
import './App.css'
import Login from './componenets/Login'
import Profile from './componenets/Profile'
import Usercontextprovider from './context/Usercontextprovider'

function App() {
  return (
    <>
    <Usercontextprovider>
    <h1>React and chai and share is important</h1>
     <Login/>
     <Profile/>
    </Usercontextprovider>
    </>
  )
}

export default App
