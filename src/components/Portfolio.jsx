import React from 'react'
import amazonclone from '../assets/portfolio/amazonclone.png';
import tictac from '../assets/portfolio/tictac.png';
import agecal from '../assets/portfolio/agecal.png';
import facebook from '../assets/portfolio/facebook.png';
import note from '../assets/portfolio/note.png';



const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: amazonclone,
            title:"AmazonClone",
            href:"https://curious-otter-03af56.netlify.app/",
            href1:"https://github.com/bipinlongjam/amazon_clone_react"
        },
        {
            id:2,
            src: tictac,
            title:"Tic-Tac-Toe",
            href:"https://bipinlongjam.github.io/react_project/",
            href1:"https://github.com/bipinlongjam/react_project1"
        },
        {
            id:3,
            src: agecal,
            title:"Age Calculator",
            href:"https://bipinlongjam.github.io/age_Calculator/",
            href1:"https://github.com/bipinlongjam/age_Calculator"
        },
        {
            id:4,
            src: facebook,
            title:"Facebook Login Page",
            href:"https://bipinlongjam.github.io/Facebook_login/",
            href1:"https://github.com/bipinlongjam/Facebook_login"
        },
        {
            id:5,
            src: note,
            title:"Notes Making",
            href:"https://bipinlongjam.github.io/Notes_Creating/",
            href1:"https://github.com/bipinlongjam/Notes_Creating"
        }
       
    ]

  return (
    <div name="portfolio" 
    className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
           
                <div  className='grid sm:grid-cols-2 md:grid-cols-3 text-center gap-8 px-12 sm:px-0'>
                    {  portfolios.map(({id, src,title, href, href1}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img 
                         src={src}
                         alt="" 
                         className='rounded-md duration-200 hover:scale-105'/>
                         <p className='mt-1'>{title}</p>
                        <div className='flex items-center justify-center'>
                          <a href={href} target="_blank" without rel="noreferrer">
                            <button className='w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105'>Demo</button>
                            </a>  
                          <a href={href1} target="_blank" without rel="noreferrer"> <button className='w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105'>Code</button></a>
                        </div>
                    </div>
                        ))}
                        
                </div>
                <div className='w-full h-full py-20'>
                <div className='w-full h-full py-20'>
                    </div>
                </div>
        </div>
        
    </div>
  )
}

export default Portfolio