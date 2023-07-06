import React, {useEffect} from 'react'
import { useProduct } from '../../hooks/apiHooks'
import EditButton from '../../components/EditButton/EditButton';

const Product = () => {
  
  const { product } = useProduct()

  useEffect(() => {
    console.log(product)
  }, [product])


  return (
    <div>
      <div className="m-2">
        <EditButton />
      </div>

      <div>
        <div>
          <div>
            image
          </div>
          <div>
            title
          </div>
          <div>
            description
          </div>
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default Product;