import React from 'react'
import { IProduct } from '../../interfaces/productInterface';
import { BiHomeAlt2 } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { GrOrganization } from 'react-icons/gr';
import { RiArrowDropDownLine } from 'react-icons/ri';

const DesktopMenu = ({...product}: IProduct) => {
  return (
    <div className='ml-3 flex flex-col gap-5'> 
        <div className='m-3 flex flex-row justify-start items-end'>
          <div className='border-2 rounded-full w-32'>
            <img src={product.user.profilePicture} alt={product.user.firstName} className='w-full rounded-full'/>
          </div>
          <div>
            <h3 className='font-bold text-primary text-sm'>{product.user.firstName} {" "} {product.user.lastName}</h3>
            <p className='text-primary text-sm' data-testid="company-name">{product.company.name}</p>
          </div>
        </div>

        <div className='flex flex-col gap-5 mt-5'>
          <div className="flex justify-start items-center gap-3 text-primary">
            <BiHomeAlt2 className='text-primary text-2xl'/>
            Home
          </div>
          <div className="flex justify-start items-center gap-3 text-primary">
            <BsPeople className='text-primary text-2xl'/>
            Members
          </div>
          <div className="flex justify-between items-center" >
            <div className="flex justify-start items-center gap-3 text-primary">
              <GrOrganization className='text-primary text-2xl'/>
              Organizations
            </div>
            <RiArrowDropDownLine className='text-primary text-2xl'/>
          </div>

        </div>
      
      
    </div>
  )
}

export default DesktopMenu