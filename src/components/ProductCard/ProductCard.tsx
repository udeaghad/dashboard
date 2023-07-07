import { IProduct } from '../../interfaces/productInterface';
import { SlBadge } from 'react-icons/sl';


const ProductCard = ({...product}:IProduct) => {
  
  return (
    <div className="m-3">
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

      <div className="px-2 py-3">
        <h2 className='font-bold text-primary my-3'>
          {            
            product.description.split(' ').slice(4, 5).join(" ").slice(43) +
            " " +
            product.description.split(' ').slice(5, 6).join(" ").slice(3, 10) +
            " " +
            product.description.split(' ').slice(7, 8).join(" ").slice(-3) +
            " " +
            product.description.split(' ').slice(8, 20).join(" ")
          }
        </h2>

        <p className="text-primary">
          {product.description.split(" ").slice(20).join(" ")}
        </p>

      </div>
    
    </div>
  )
}

export default ProductCard

