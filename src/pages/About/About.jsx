import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'

const About = () => {

    const navigate = useNavigate()

    const changeDir = (dir) =>{
        navigate(dir)
    }

  return (
    <div className='About'>
        <div className="text-3xl text-[green]">About Page</div>
        <button className={`bg-[#3498db] p-[10px] text-[white] rounded-md hover:bg-[red] hover:text-[#3498db]`} onClick={()=>{changeDir(ROUTES.Home)}}>Go Back To Home</button>
    </div>
  )
}

export default About