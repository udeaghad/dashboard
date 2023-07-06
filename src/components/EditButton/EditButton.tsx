import React from 'react'
import { NavLink } from 'react-router-dom';

const EditButton = () => {
  return (
    <button
      type="button"
      className="bg-[#272e71] rounded-md py-2 px-3 shadow flex items-center justify-center text-white"    
    >
      <NavLink
        to="/product/edit"
        className="text-white no-underline"
      >
        Edit
      </NavLink>
    </button>
  )
}

export default EditButton