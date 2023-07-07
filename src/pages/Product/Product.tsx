import React, {useEffect, useState} from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

import { useProduct } from '../../hooks/apiHooks'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import EditButton from '../../components/EditButton/EditButton';
import { productActions } from '../../features/product/product';
import ProductCard from '../../components/ProductCard/ProductCard';
import CompanyCard from '../../components/CompanyCard/CompanyCard';

const Product = () => {
  const dispatch = useAppDispatch()
  const {product}  = useAppSelector(state => state.product)

  const { getProduct } = useProduct()

  useEffect(() => {
    console.log(getProduct)
    dispatch(productActions.setProduct(getProduct))
  }, [getProduct, dispatch])

  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '', 
    libraries: ['places']   
  })

  const containerStyle = {
    width: '95%',
    height: '50vh'
  };

  const [map, setMap] = useState<any>(null)

  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  })

  useEffect(() => {
    if (product) {
      setCenter({
        lat: Number(product.company.address.latitude),
        lng: Number(product.company.address.longitude),
      })
    }
  }, [product])




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
          {product &&
            <CompanyCard 
              {...product}
              isLoaded={isLoaded}
              map={map}
              setMap={setMap}
              center={center}
              containerStyle={containerStyle}
              GoogleMap={GoogleMap}
              Marker={Marker}
            />          
          }

        </div>
      </div>
    </div>
  )
}

export default Product;