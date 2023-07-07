import React from 'react'
import { IProduct } from '../../interfaces/productInterface'
import { BiSolidCategory } from 'react-icons/bi';
import { GrBusinessService } from 'react-icons/gr';
import { SiLevelsdotfyi } from 'react-icons/si';
import { FaBusinessTime } from 'react-icons/fa';

const OfferDetails = ({...product}: IProduct) => {
  return (
    <div className="mx-3 my-5">
      <div className='mb-4 bg-primary p-2 w-32'>
        <h1 className='text-white font-bold text-center'>Offered details</h1>
      </div>

      <div className='mb-3'>
        <div className='flex flex-row justify-start items-center gap-3 mb-4'>
          <BiSolidCategory className='text-primary text-lg'/>
          <h3 className='text-primary font-bold text-lg'>Categories</h3>
        </div>

        <div className='flex flex-row justify-start items-center gap-2 ml-7 flex-wrap'>
          {product.categories.map((category) => (
            <div key={category.id} className='bg-primary p-2 rounded-md'>
              <p className='text-white text-xs font-bold'>{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='mb-3'>
        <div className='flex flex-row justify-start items-center gap-3 mb-4'>
          <GrBusinessService className='text-primary text-lg'/>
          <h3 className='text-primary font-bold text-lg'>Business Model</h3>
        </div>

        <div className='flex flex-row justify-start items-center gap-2 ml-7 flex-wrap'>
          {product.businessModels.map((model) => (
            <div key={model.id} className='bg-primary p-2 rounded-md'>
              <p className='text-white text-xs font-bold'>{model.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className='mb-3'>
        <div className='flex flex-row justify-start items-center gap-3 mb-4'>
          <SiLevelsdotfyi className='text-primary text-lg'/>
          <h3 className='text-primary font-bold text-lg'>TRL</h3>
        </div>

        <div className='flex flex-row justify-start items-center gap-2 ml-7 flex-wrap'>         
            <div className='bg-primary p-2 rounded-md'>
              <p className='text-white text-xs font-bold'>{product.trl.name}</p>
            </div>          
        </div>
      </div>

      <div className='mb-3'>
        <div className='flex flex-row justify-start items-center gap-3 mb-4'>
          <FaBusinessTime className='text-primary text-lg'/>
          <h3 className='text-primary font-bold text-lg'>Investment Effort</h3>
        </div>

        <div className='flex flex-row justify-start items-center gap-2 ml-7 flex-wrap'>         
            <div className='bg-primary p-2 rounded-md'>
              <p className='text-white text-xs font-bold'>{product.investmentEffort}</p>
            </div>          
        </div>
      </div>
    </div>
  )
}

export default OfferDetails