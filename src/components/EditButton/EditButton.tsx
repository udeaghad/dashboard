import { NavLink } from "react-router-dom"

const EditButton = () => {
  return (
    <div className="md:flex md:justify-end md:items-center md:mr-10">
      <button
        type="button"
        className="bg-[#272e71] rounded-md py-2 px-3 shadow flex items-center justify-center text-white"  
         
      > 
        <NavLink
        to='/product/edit'
        className='text-white'
        >
          Edit        
        </NavLink>   
      </button>
    </div>
  )
}

export default EditButton