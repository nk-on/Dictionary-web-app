import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Container from './Components/Container.tsx'
import { BrowserRouter,Routes,Route } from 'react-router'
import Heading from './Components/Heading/Heading.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
          <Route path='/' element = {<Container />}> 
            <Route path='/' element = {<Heading />}></Route>
            <Route path='/:id' element = {<Heading />}></Route>
          </Route>
          
       </Routes>
    </BrowserRouter>
  </StrictMode>,
)
