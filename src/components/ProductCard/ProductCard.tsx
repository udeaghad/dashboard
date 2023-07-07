import { IProduct } from '../../interfaces/productInterface';
import { SlBadge } from 'react-icons/sl';


const ProductCard = ({...product}: IProduct) => {
  
  return (
    <div className="m-2 border border-stone-600 rounded-md">
      <div>
        <div className='z-10 fixed border-2 border-[#272e71] rounded-md flex bg-white justify-center'>
          <div className='bg-[#272e71] p-2'>
            <SlBadge className='text-white text-xl'/>
          </div>
          <div className='font-bold p-2'>
            {product.type.name}
          </div>
        </div>
        <img src={product.picture} alt={product.name} className='h-60 w-full z-0'/>        
      </div>

      <div className="px-2 py-3">
        <h2 className='font-bold text-[#272e71]'>
          {
            product.description.split(" ").slice(8).join(" ").charAt(0).toUpperCase() + 
            product.description.split(" ").slice(8,9).join(" ").split('').slice(1).join('') + 
            " " + 
            product.description.split(' ').slice(9, 20).join(" ")
          }</h2>

      </div>
    
    </div>
  )
}

export default ProductCard

