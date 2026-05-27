import React, { useState } from 'react'
import axios from 'axios'

function App(){

  const [data , setData]  = useState([])

  axios.get('https://my-backend-m09f.onrender.com/')
  .then(res => setData(res.data))
  .catch(err => console.log("Error accurred" , err))
  return(
    <div>
     <h2>{data.message}</h2>

    </div>
  )
}

export default App