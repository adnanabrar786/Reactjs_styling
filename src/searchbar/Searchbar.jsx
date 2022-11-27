import React from 'react'
import "./Searchbar.css"
import { BsSearch } from 'react-icons/bs'

const Searchbar = () => {
  return (
    <div>
       <div className='search_box'>
        <input className='serach_txt' type="text"  name='' placeholder='Type Search'/>
        <a className='search_btn' href='/'>
           <BsSearch  className='serach_icon'/>
        </a>
       </div>
    </div>
  )
}

export default Searchbar
