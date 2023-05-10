import { motion } from 'framer-motion'
import React from 'react'
import '../Services/services.css'
import serviceData from '../assets/services_data'
import { Container } from 'reactstrap'
const Services = () => {
  return (
    <section className='services'>
        <Container>
            <div className='row'>
                {
                    serviceData.map((item,index)=>(
                        <div className='col-lg-3 col-md-4' key={index}>
                        <motion.div whileHover={{scale:1.1}}  className='service_item' >
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox={item.viewbox} width='30px' height='30px'>
                                <path d={item.icon}/></svg>
                            </span>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </div>
                        </motion.div>
                    </div>
                    ))
                }







               
            </div>
        </Container>
    </section>
  )
}

export default Services