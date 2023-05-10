
import React,{useState,useEffect} from 'react'
import '../UI/clock.css'
const Clock = () => {
    const [days,setdays]=useState()
    const [hours,sethours]=useState()
    const [minitues,setminitues]=useState()
    const [seconds,setseconds]=useState()
    let interval;
    const countDown =()=>{
        const destination = new Date('May 30,2023').getTime()
        interval= setInterval(()=>{
            const now=new Date().getTime()
            const different= destination-now
            const days=Math.floor(different/(1000*60*60*24))

            const hours=Math.floor(different % (1000*660*60*24)/(1000*60*60))
            const minitues=Math.floor(different % (1000*60*60)/(1000*60))
            const seconds=Math.floor(different % (1000*60)/1000)
            if(destination<0) clearInterval(interval.current)
            else {
                setdays(days)
                sethours(hours)
                setminitues(minitues)
                setseconds(seconds)
            }
        })
    }
    useEffect(()=>{
        countDown()
    })

  return (
    <div className='clocK_wrapper d-flex align-items-center gap-3'>
        <div className='clock_data d-flex align-items-center gap-3'>
            <div>
                <h1 className='text-white fs-3 mb-2'>{days} </h1>
                <h5 className='text-white fs-6'>Days</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>
        <div className='clock_data d-flex align-items-center gap-3'>
            <div>
                <h1 className='text-white fs-3 mb-2'>{hours} </h1>
                <h5 className='text-white fs-6'>Hours</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>
        <div className='clock_data d-flex align-items-center gap-3'>
            <div>
                <h1 className='text-white fs-3 mb-2'>{minitues} </h1>
                <h5 className='text-white fs-6'>Minutes</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>
        <div className='clock_data d-flex align-items-center gap-3'>
            <div>
                <h1 className='text-white fs-3 mb-s'>{seconds} </h1>
                <h5 className='text-white fs-6'>Seconds</h5>
            </div>
            
        </div>
    </div>

  )
}

export default Clock