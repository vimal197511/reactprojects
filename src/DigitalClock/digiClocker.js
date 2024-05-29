import { useEffect, useState } from "react"
import "./styling.css"

function Clocker(){
    const [currTime,setcurrTime] = useState(new Date())
    useEffect(()=>{
const timer = setInterval(()=>{
    setcurrTime(new Date())
},1000)
return ()=> clearInterval(timer)
},[])

const formhourTiming = (num)=>{
    return num < 10 ? `0${num}` : num
}

const formathour = (hour)=>{
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
};

const formatdays =(date)=>{
    const options = {weekday:"long",year:"numeric",month:"long",day:"numeric"}
    return date.toLocaleDateString(undefined,options)
}
    return(
        <>
        <div className="digital-clock">
            <h1>Digital Clock</h1>
            <div className="time">
                {formhourTiming(formathour(currTime.getHours()))}
                :{formhourTiming(currTime.getMinutes())}:
                {formhourTiming(currTime.getSeconds())} 
                 {currTime.getHours() >= 12 ? " PM" : " AM"}
                </div>
            <div className="days">{formatdays(currTime)}</div>
        </div>
        </>
    )
}

export default Clocker