import { useState } from "react"

const useCountdown = (date) =>{

    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [second, setSecond] = useState()

    const countDown = () => {
        const countDate = new Date(date).getTime()
        const now = new Date().getTime();
    
       const interval = countDate - now;
    
       const second = 1000;
       const minutes = second * 60;
       const hours = minutes * 60;
       const days = hours * 24;
    
       const dayNumber = Math.floor(interval / days);
       const dayMinutes = Math.floor((interval % hours) / minutes);
       const dayHours = Math.floor((interval % days) / hours);
       const daySeconds = Math.floor((interval % minutes) / second);

       setDays(dayNumber);
       setHours(dayHours);
       setMinutes(dayMinutes);
       setSecond(daySeconds);
    }
    
   
  setInterval(countDown, 1000);
    return [days, hours, minutes, second];
}

export default useCountdown;