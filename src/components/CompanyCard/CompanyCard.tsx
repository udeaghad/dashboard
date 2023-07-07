import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { IProduct } from '../../interfaces/productInterface';

interface IProductCard extends IProduct {
  isLoaded: boolean;
  GoogleMap: any;
  center: {lat: number; lng: number};
  map: any;
  setMap: React.Dispatch<React.SetStateAction<any>>;
  containerStyle: {width: string; height: string};
  Marker: any;
}

const CompanyCard = ({isLoaded, GoogleMap, center, map, setMap, containerStyle, Marker, ...product}: IProductCard) => {
  return (
    <div className='m-3'>
      <div>
        <div className='mb-4 bg-primary p-2 w-32'>
          <h1 className='text-white font-bold text-center'>Offered By</h1>
        </div>
        <div>
          <img src={product.company.logo} alt={product.company.name} className='w-[80%]'/>
        </div>
      </div>

      <div className='m-3 flex flex-row justify-start items-end'>
        <div className='border-2 rounded-full w-32'>
          <img src={product.user.profilePicture} alt={product.user.firstName} className='w-full rounded-full'/>
        </div>
        <div>
          <h3 className='font-bold text-primary'>{product.user.firstName} {" "} {product.user.lastName}</h3>
          <p className='text-primary text-md'>{product.company.name}</p>
        </div>
      </div>

      <div className='flex justify-start items-start gap-2 mt-5'>
        <div>
          <IoLocationSharp className='text-primary text-xl'/>
        </div>
        <div>
          <p className='text-sm text-primary'>{product.company.address.house} {" "} {product.company.address.street},</p>
          <p className='text-sm text-primary'>{product.company.address.zipCode} {" "} {product.company.address.city.name}, {" "} {product.company.address.country.name}</p>
        </div>
      </div>

      <div>
        { isLoaded ? 
          <>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              options={{
                disableDefaultUI: true,
                zoomControl: true,
              }}
              onLoad={(map: any) => setMap(map)}
            >
              <Marker 
                position={center}                 
              />
            </GoogleMap>
          </> 
        : 
          <p>Loading...</p>
        }

      </div>

    </div>
  )
}

export default CompanyCard