import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import CompanyCard from '../../components/CompanyCard/CompanyCard';

describe('CompanyCard', () => {
  const product = {
    "id": 6781,
    "name": "LoftOS",
    "description": "<img style=\"height: 0px\" src=a onerror=console.log(\"secret-cookie-value\")>Innoloft <b>creates</b> <script type=\"text/javascript\">console.log(\"test\");</script>the leading B2B tech ecosystem through interconnected research & business networks and marketplaces. With our digital platform technology, we are changing the way business contacts are initiated between economic and innovation actors...",
    "picture": "https://img.innoloft.com/products/product_783016a3.png",
    "type": {
        "id": 2,
        "name": "Software"
    },
    "categories": [
        {
            "id": 5101,
            "name": "IT platforms"
        },
        {
            "id": 5100,
            "name": "B2B marketplaces"
        }
    ],
    "implementationEffortText": null,
    "investmentEffort": "< 25.000€",
    "trl": {
        "id": 9,
        "name": "TRL 9 – Actual system proven in operational environment (established product available)"
    },
    "video": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "user": {
        "id": 284,
        "email": "example@innoloft.com",
        "firstName": "Christopher",
        "lastName": "Stirner",
        "sex": 1,
        "profilePicture": "https://img.innoloft.com/users/user_8d48197d.png",
        "position": "Chief Strategy Officer"
    },
    "company": {
        "name": "Innoloft GmbH",
        "logo": "https://img.innoloft.com/logos/unt_7838d306.png",
        "address": {
            "country": {
                "name": "Germany"
            },
            "city": {
                "name": "Aachen"
            },
            "street": "Jülicher Straße",
            "house": "72a",
            "zipCode": "52070",
            "longitude": "6.100367",
            "latitude": "50.779729"
        }
    },
    "businessModels": [
        {
            "id": 65,
            "name": "Pay-Per-Use"
        },
        {
            "id": 1155,
            "name": "Subscription"
        },
        {
            "id": 374,
            "name": "White-Label"
        },
        {
            "id": 66,
            "name": "Peer-to-Peer (P2P)"
        }
    ]
}
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
      />
      </BrowserRouter>
      
    );

    const mapDisplay = screen.getByTestId('map');
    expect(mapDisplay).toBeInTheDocument();

  })
})