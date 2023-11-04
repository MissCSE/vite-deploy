import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
    return(
        <div>
            <h1>Custom Function!</h1>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  Myapp()
   
 
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <App />
    <Myapp />
    </>
     
   
  )
