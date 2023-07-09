import React, {useState} from 'react';

import { ContentState, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { NavLink } from 'react-router-dom';
import { MdDone } from 'react-icons/md';
import {IoMdClose} from 'react-icons/io';
                                
import { IProduct } from '../../interfaces/productInterface';
import { SlBadge } from 'react-icons/sl';

interface IEditProductCard extends IProduct {
  setEditDescription: React.Dispatch<React.SetStateAction<string>>;
  handleUpdateDescription: () => void;
  changed: boolean
}


const EditProductCard = ({ setEditDescription, handleUpdateDescription, changed, ...product}:IEditProductCard) => {

  const [editorState, setEditorState] = useState(
    () => EditorState.createWithContent(ContentState.createFromText(product.description))
  )

  return (
    <div className="mx-3 mb-3 md:mt-3 bg-gray-50 rounded-md border-2 border-gray-100 p-3">
      <div className="relative">
        <div className='absolute border border-primary rounded-md flex bg-white justify-center top-0 left-0'>
          <div className='bg-[#272e71] p-2'>
            <SlBadge className='text-white text-xl'/>
          </div>
          <div className='font-bold p-2 text-primary'>
            {product.type.name}
          </div>
        </div>
        <img src={product.picture} alt={product.name} className='h-60 w-full'/>        
      </div>

      <div className="px-2 py-3 mt-3"> 
        
        <h2 className='font-bold text-primary mb-5 text-lg'>{product.name}</h2>

        <div className='bg-white p-2'>
          <div>
              <Editor
                editorState={editorState}                
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={setEditorState}
                onChange={() => setEditDescription(editorState.getCurrentContent().getPlainText())}
                                                                        
              />
          </div>

          <div className='flex justify-end items-center gap-3'>  
            <button type="button" className='bg-red-600 text-white px-2 rounded-md'>
              <NavLink to='/product' className="flex justify-center items-center gap-2">
                <IoMdClose className='text-white text-xl'/>
                Close
              </NavLink>              
            </button>

            {changed && 
              <button type="button" className='bg-primary text-white px-2 rounded-md flex justify-center items-center gap-2' onClick={handleUpdateDescription}>
                <MdDone className='text-white text-xl'/>  
                Save
              </button>            
            }          

          </div>

        </div>
      </div>
    
    </div>
  )
}

export default EditProductCard 

