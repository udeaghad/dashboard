import React, {useEffect} from 'react'
import { useProduct } from '../../hooks/apiHooks'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import EditButton from '../../components/EditButton/EditButton';
import { productActions } from '../../features/product/product';
import ProductCard from '../../components/ProductCard/ProductCard';

const Product = () => {
  const dispatch = useAppDispatch()
  const {product}  = useAppSelector(state => state.product)

  const { getProduct } = useProduct()

  useEffect(() => {
    console.log(getProduct)
    dispatch(productActions.setProduct(getProduct))
  }, [getProduct, dispatch])


  return (
    <div>
      <div className="m-2">
        <EditButton />
      </div>

      <div>
        <div>
          {product &&
            <ProductCard {...product}/>         
          }          
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default Product;