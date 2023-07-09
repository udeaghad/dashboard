import React, { Fragment, useState } from 'react'
import { IProduct } from '../../interfaces/productInterface'
import { BiSolidCategory } from 'react-icons/bi';
import { GrBusinessService } from 'react-icons/gr';
import { SiLevelsdotfyi } from 'react-icons/si';
import { FaBusinessTime } from 'react-icons/fa';

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

interface IEditOfferDetails extends IProduct {
  handleAddCategory: (e: React.KeyboardEvent<HTMLElement>) => void;
  categoriesRef: React.RefObject<HTMLInputElement>
  businessModelRef: React.RefObject<HTMLInputElement>
  handleAddBusinessModel: (e: React.KeyboardEvent<HTMLElement>) => void;
  getTRL: {id: string; name: string}[];
  selectedTRL: {id: string; name: string} | null; 
  setSelectedTRL: React.Dispatch<React.SetStateAction<{id: string; name: string} | null>>;  
 
}

const classNames = (...classes:string[]) => {
  return classes.filter(Boolean).join(' ')
}

const EditOfferDetails = ({handleAddCategory, categoriesRef, businessModelRef, handleAddBusinessModel, getTRL, selectedTRL, setSelectedTRL, ...product}: IEditOfferDetails) => {
  return (
    <div className="mx-3 my-5 bg-gray-50 rounded-md border-2 border-gray-100 p-3">
      <div className='mb-4 bg-primary p-2 w-32'>
        <h1 className='text-white font-bold text-center'>Offered details</h1>
      </div>

      <div className='md:grid md:grid-cols-2'>

        <div className='mb-3 md:border md:mb-0 md:p-3'>
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

          <div className="mt-5">
            <input
              type="text"
              name="category"
              id="category"            
              className="block flex-1 border rounded-md w-[90%] bg-white py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Enter a value and press 'Enter" 
              ref={categoriesRef}           
              onKeyDown={handleAddCategory}
            /> 
          </div>
        </div>

        <div className='mb-3 md:border md:mb-0 md:p-3'>
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

          <div className="mt-5">
            <input
              type="text"
              name="category"
              id="category"            
              className="block flex-1 border rounded-md w-[90%] bg-white py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Enter a value and press 'Enter" 
              ref={businessModelRef}           
              onKeyDown={handleAddBusinessModel}
            /> 
          </div>
        </div>
        
        <div className='mb-3 md:border md:mb-0 md:p-3'>
          <div className='flex flex-row justify-start items-center gap-3 mb-4'>
            <SiLevelsdotfyi className='text-primary text-lg'/>
            <h3 className='text-primary font-bold text-lg'>TRL</h3>
          </div>

          <div className='flex flex-row justify-start items-center gap-2 ml-7 flex-wrap'>         
              <div className='bg-primary p-2 rounded-md'>
                <p className='text-white text-xs font-bold'>{product.trl.name}</p>
              </div>          
          </div>

          {selectedTRL  &&
          
            <Listbox value={selectedTRL} onChange={setSelectedTRL}>
              {({ open }) => (
                <>
                  
                  <div className="relative mt-2">
                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                      <span className="flex items-center">                      
                        <span className="ml-3 block truncate">{selectedTRL.name}</span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {getTRL.map((trl) => (
                          <Listbox.Option
                            key={trl.id}
                            className={({ active }) =>
                              classNames(
                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-3 pr-9'
                              )
                            }
                            value={trl}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                  
                                  <span
                                    className={classNames(selectedTRL ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                  >
                                    {trl.name}
                                  </span>
                                </div>

                                {selectedTRL ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-indigo-600',
                                      'absolute inset-y-0 right-0 flex items-center pr-4'
                                    )}
                                  >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          }


        </div>

        <div className='mb-3 md:border md:mb-0 md:p-3'>
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

    </div>
  )
}

export default EditOfferDetails;