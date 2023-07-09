import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import  product from '../Mock/ProductAPI';

describe('CompanyCard', () => {
  
  const isLoaded = true;
  const map = null;
  const setMap = jest.fn();
  const center = {
    lat: 0,
    lng: 0,
  }
  const containerStyle = {
    width: '95%',
    height: '50vh'
  };
  const GoogleMap = jest.fn();
  const Marker = jest.fn();
  const configuration= {
    hasUserSection: true
  }


  it('should render \"Offered By\"', () => {
    render(
      <BrowserRouter>
        <CompanyCard 
        {...product}
        isLoaded={isLoaded}
        map={map}
        setMap={setMap}
        center={center}
        containerStyle={containerStyle}
        GoogleMap={GoogleMap}
        Marker={Marker}
        showMap={true} 
        configuration={configuration}    

      />
      </BrowserRouter>
    )

    const text = screen.getByText('Offered By');
    expect(text).toBeInTheDocument();    
  })

  it('should render the company logo', () => {
    render(
      <BrowserRouter>
        <CompanyCard 
        {...product}
        isLoaded={isLoaded}
        map={map}
        setMap={setMap}
        center={center}
        containerStyle={containerStyle}
        GoogleMap={GoogleMap}
        Marker={Marker} 
        showMap={true} 
        configuration={configuration}     

      />
      </BrowserRouter>
    )

    const logo = screen.getAllByRole('img');
    expect(logo[0]).toBeInTheDocument();
    expect(logo[0]).toHaveAttribute('src', product.company.logo);
  })

  it('Should render user picture', () => {
    render(
      <BrowserRouter>
        <CompanyCard 
        {...product}
        isLoaded={isLoaded}
        map={map}
        setMap={setMap}
        center={center}
        containerStyle={containerStyle}
        GoogleMap={GoogleMap}
        Marker={Marker}
        showMap={true} 
        configuration={configuration}      

      />
      </BrowserRouter>
    )

    const userPicture = screen.getAllByRole('img');
    expect(userPicture[1]).toBeInTheDocument();
    expect(userPicture[1]).toHaveAttribute('src', product.user.profilePicture);
  })

  it('Should render user name', () => {
    render(
      <BrowserRouter>
        <CompanyCard 
        {...product}
        isLoaded={isLoaded}
        map={map}
        setMap={setMap}
        center={center}
        containerStyle={containerStyle}
        GoogleMap={GoogleMap}
        Marker={Marker} 
        showMap={true} 
        configuration={configuration}      

      />
      </BrowserRouter>
    )

    const userName = screen.getByText(`${product.user.firstName} ${product.user.lastName}`);
    expect(userName).toBeInTheDocument();
  })

  it('Should render company name', () => {
    render(
      <BrowserRouter>
        <CompanyCard
        {...product}
        isLoaded={isLoaded}
        map={map}
        setMap={setMap}
        center={center}
        containerStyle={containerStyle}
        GoogleMap={GoogleMap}
        Marker={Marker}
        showMap={true} 
        configuration={configuration}
      />
      </BrowserRouter>      
    );

    const companyName = screen.getByTestId('company-name');
    expect(companyName).toBeInTheDocument();
  })

  it('Should render company address', () => {
    render(
      <BrowserRouter>
        <CompanyCard
        {...product}
        isLoaded={isLoaded}
        map={map}
        setMap={setMap}
        center={center}
        containerStyle={containerStyle}
        GoogleMap={GoogleMap}
        Marker={Marker}
        showMap={true}
        configuration={configuration}
      />
      </BrowserRouter>
      
    );

    const companyAddress = screen.getByTestId('company-address');
    expect(companyAddress).toBeInTheDocument();
  })

  it('Should render map', () => {
    render(
      <BrowserRouter>
        <CompanyCard
        {...product}
        isLoaded={isLoaded}
        map={map}
        setMap={setMap}
        center={center}
        containerStyle={containerStyle}
        GoogleMap={GoogleMap}
        Marker={Marker}
        showMap={true} 
        configuration={configuration}
      />
      </BrowserRouter>
      
    );

    const mapDisplay = screen.getByTestId('map');
    expect(mapDisplay).toBeInTheDocument();

  })
})