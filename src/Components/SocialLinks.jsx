import React,{useState} from 'react';
import'./SocialLinks.css';

function SocialLinks() {
  const socials = ['GitHub', 'Frontend Mentor','LinkedIn','Twitter','Instagram'];
  const [focusedIndex,setFocusedIndex] = useState(null);

  const  handleOnFocus = (i)=>{
    setFocusedIndex(i)
  }

  return (
    <div className='flex flex-col justify-center'>{socials.map((social,i)=>(
      <button className={`btn-transition justify-center items-center rounded-[10px] h-[55px]  m-3 ${focusedIndex === i ? ' bg-[#c5f82a] ':'  bg-[#333333]  '}`} 
      onMouseEnter={()=>handleOnFocus(i)}
      onMouseLeave={()=>setFocusedIndex(null)} key={i}><h1 className={`${focusedIndex === i ? 'text-[#333333] font-semibold':'text-[#ffffff] font-semibold' }`}>{social}</h1></button>
    ))}</div>
  )
}

export default SocialLinks;