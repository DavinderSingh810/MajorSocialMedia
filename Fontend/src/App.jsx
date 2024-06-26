import { Button } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import UserPage from "./pages/UserPage"
import PostPage from "./pages/PostPage"
import AuthPage from "./pages/AuthPage"
import Header from "./compenents/Header"
function App() {
  
  return (
  <Container maxW="620px">
    <Header />
  <Routes>
   <Route path="/" element={<HomePage/>}/>
   <Route path="/auth" element={<AuthPage/>}/>

     < Route path="/:username" element={<UserPage />}></Route>
     <Route path="/:username/Post/:pid" element={<PostPage />}></Route>
  </Routes>
  </Container>
  
 
  
   
  )
}

export default App
