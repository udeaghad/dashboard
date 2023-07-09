import parse from 'html-react-parser'
import { IProduct } from '../../interfaces/productInterface';
import { SlBadge } from 'react-icons/sl';


const ProductCard = ({...product}:IProduct) => {
  
  return (
    <div className="m-3 bg-gray-50 rounded-md border-2 border-gray-100 p-3 md:m-0 md:mt-3 md:h-full">
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
        
          <p className='text-primary text-justify'>
            {parse(product.description)}
          </p>
      </div>
    
    </div>
  )
}

export default ProductCard

