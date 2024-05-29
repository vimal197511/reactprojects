import { useState } from 'react'
import './password.css'

function PasswordGen(){
    const [lengths,setlength] = useState(8)
    const [upper,setupper] = useState(true)
    const [lower,setlower] = useState(true)
    const [number,setnumber] = useState(true)
    const [symbol,setsymbol] = useState(true)
    const [passwrd,setpasswrd] = useState("")

    const generatePasswrd = () =>{
        let charset = " "
        if (upper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
        if (lower) charset += "abcdefghijklmnopqrstuvwxyz";
    
        if (number) charset += "0123456789";
        
        if (symbol) charset += "!@#$%^&*()+-_=";
        
        console.log("charset",charset)
        
        let genratedpass = "" ;

        for (let i=0 ;i < lengths;i++){
            const rand = Math.floor(Math.random() * charset.length)
            console.log("rand",rand)
            genratedpass += charset[rand]
            console.log("genratedpass",genratedpass)
        }
        setpasswrd(genratedpass)
    }

    const copypass=()=>{
        navigator.clipboard.writeText(passwrd)
        alert("password copied")
    }
    return(
        <div className="password">
        <h2>Strong Password Generator</h2>
        <div className="input-group">
        <label htmlFor="num">Password Length:</label>
        <input type="number" id="num" value={lengths} onChange={(e)=>setlength(parseInt(e.target.value))}/>
        </div>
        <div className="checkbox-group">
        <input type="checkbox" id="upper" checked={upper} onChange={(e)=>setupper(e.target.checked)}/>    
        <label htmlFor="upper">Include UpperCase</label>
        </div>
        <div className="checkbox-group">
        <input type="checkbox" id="lower" checked={lower} onChange={(e)=>setlower(e.target.checked)}/>    
        <label htmlFor="lower">Include LowerCase</label>
        </div>
        <div className="checkbox-group">
        <input type="checkbox" id="numbers" checked={number} onChange={(e)=>setnumber(e.target.checked)}/>    
        <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className="checkbox-group">
        <input type="checkbox" id="symbol" checked={symbol} onChange={(e)=>setsymbol(e.target.checked)}/>    
        <label htmlFor="symbol">Include Symbols</label>
        </div>
        <button className='gen-pass' onClick={generatePasswrd}>Generator Password</button>
        <div className="generated-password">
            <input type="text" readOnly value={passwrd}/>
            <button className="copy-btn" onClick={copypass}>Copy</button>
        </div>
        </div>
    )
}

export default PasswordGen