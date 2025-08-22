import React, { useState } from 'react'
import {toast} from "react-hot-toast"
const Contact = () => {
    const [greet,setGreet]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        setGreet("Hello User")
        toast.success("Greeted Successfully!",{duration:5000})
        toast.error("Really an error?")
        
    }
  return (
    <div style={{marginBottom:"10px"}}>
        <h1>This is Contact us page...!</h1>
        <span>{greet}</span><br />
        <button type='submit' onClick={handleSubmit}>
            Click
        </button>
    </div>
  )
}

export default Contact