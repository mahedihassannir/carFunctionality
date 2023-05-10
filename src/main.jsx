import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Routes/router.jsx'
import ContexProvider from './Components/AuthProvider/ContexProvider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='w-11/12 mx-auto'>

    <React.StrictMode>

      <ContexProvider>

        <RouterProvider router={router}></RouterProvider>
        
      </ContexProvider>



    </React.StrictMode>

  </div>

)
