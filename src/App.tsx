import './globals.css'
import {Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route path='/sign-in' element={<SignInForm/>} />
        

        {/* protected routes */}
        <Route index element={<Home/>} />

      </Routes>
   </main>
  )
}

export default App
