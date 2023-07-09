import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import product from '../Mock/ProductAPI';

describe('ProductCard', () => {
  
  it("Should render the product image", () => {
    render(
      <BrowserRouter>
        <ProductCard 
          {...product}
        />
      </BrowserRouter>
    );
    const productImage = screen.getByRole('img');
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src', product.picture);
  })

  it("Should render the Product name", () => {
    render(
      <BrowserRouter>
        <ProductCard 
          {...product}
        />
      </BrowserRouter>
    );

    const productName = screen.getByText('LoftOS');
    expect(productName).toBeInTheDocument();
  })


  it("Should render the Product description", () => {
    render(
      <BrowserRouter>
        <ProductCard 
          {...product}
        />
      </BrowserRouter>
    );
    
    const productDescription = screen.getByText('Innoloft creates the leading B2B tech ecosystem through interconnected research & business networks and marketplaces. With our digital platform technology, we are changing the way business contacts are initiated between economic and innovation actors...');
  })
    

})