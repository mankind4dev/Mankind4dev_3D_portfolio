import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles';
import { navLinks } from '../constants';
import { mylogo4, mylogo2, menu, close } from '../assets';


const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);


  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}>

      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link 
          to='#/' 
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          >
          
          <img src={mylogo2} alt="logo" className='w-12 h-12 object-contain' />
          {/* <p className='text-white text-[18px] font-bold cursor-pointer'>Mankind &nbsp; <span className='sm:block hidden'> <span className='text-[#FFD700]'>4 Developer</span></span></p> */}
        </Link>
        <span className='hire'>
          <p >Ready to work, <a href='#contact'><button>Hire Me</button></a></p>
        </span>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-[#FFD700]" : "text-[#F1E5AC] ul"
              } hover:text-[#b29700] text-[30px] ul`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-[#FFD700]" : "text-[#F1E5AC]"
              } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setToggle(!toggle);//When toggle, it will hide the sidebar
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar