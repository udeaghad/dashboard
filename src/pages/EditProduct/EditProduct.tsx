import React, { useState, useEffect } from 'react';
import { IProduct} from '../../interfaces/productInterface';
import {useAppSelector, useAppDispatch} from '../../hooks/storeHooks';
import EditProductCard from '../../components/ProductCard/EditProductCard';

const EditProduct = () => {

  const dispatch = useAppDispatch();

  const { product } = useAppSelector((state) => state.product);
  const [changed, setChanged ] = useState<boolean>(false)
  const [editDescription, setEditDescription] = useState('')

  useEffect(() => {
    console.log(editDescription)
  }, [editDescription])

  const handleInputChange = () => {
    
    // event.preventDefault();
    // const { name, value } = event.target;
    // if (!tempProduct) return;
    // setTempProduct({ ...tempProduct, [name]: value });
    // setChanged(true);
  };

  const handleSave = () => {    
    // dispatch(productActions.updateProduct(tempProduct));
    setChanged(false);
  };
  
  return (
    <div>
      <div className="md:flex md:justify-end md:mr-20">
        <div className="md:max-w-xl">
          {product &&
            <EditProductCard 
            {...product}
            setEditDescription={setEditDescription}
          />         
          }          
        </div>
      </div>

    </div>
  )
}

export default EditProduct