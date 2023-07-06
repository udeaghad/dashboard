import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../../components/Header/NavBar';

describe('NavBar', () => {
  const navigation = [
    { name: 'Main', href: '/', current: true },
    { name: 'Product', href: '/product', current: false },  
  ]
  const mainColor = '#000';
  const classNames = jest.fn();

  it("Should render logo on the nav bar", () => {
    render(
      <BrowserRouter>
        <NavBar 
          navigation={navigation}
          mainColor={mainColor}
          classNames={classNames}
        />
      </BrowserRouter>
    );
    const logo = screen.getAllByRole('img')
    expect(logo[0]).toBeInTheDocument();
    expect(logo[0]).toHaveAttribute('src', 'https://img.innoloft.com/logo.svg');
  })

  it("Should render the navigation links", () => {
    render(
      <BrowserRouter>
        <NavBar 
          navigation={navigation}
          mainColor={mainColor}
          classNames={classNames}
        />
      </BrowserRouter>
    );
    const navLinks = screen.getAllByRole('link');
    expect(navLinks[0]).toBeInTheDocument();
    expect(navLinks[0]).toHaveTextContent('Main');
    expect(navLinks[1]).toBeInTheDocument();
    expect(navLinks[1]).toHaveTextContent('Product');
  })
})