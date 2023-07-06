import Navbar from './NavBar';
import { useAppSelector } from '../../hooks/storeHooks'

const navigation = [
  { name: 'Main', href: '/', current: true },
  { name: 'Product', href: '/product', current: false },  
]

const  classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const { configuration } = useAppSelector((state) => state.configuration);

  return (
    <>    
      <Navbar 
        navigation={navigation} 
        mainColor={configuration.mainColor}
        classNames={classNames} 
      />
    
    </>
    
  )
}

export default Header