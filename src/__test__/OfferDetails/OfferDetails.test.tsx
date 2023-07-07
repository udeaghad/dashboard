import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import OfferDetails from "../../components/OfferDetails/OfferDetails";

describe("OfferDetails", () => {
  const product = {
    id: 6781,
    name: "LoftOS",
    description:
      '<img style="height: 0px" src=a onerror=console.log("secret-cookie-value")>Innoloft <b>creates</b> <script type="text/javascript">console.log("test");</script>the leading B2B tech ecosystem through interconnected research & business networks and marketplaces. With our digital platform technology, we are changing the way business contacts are initiated between economic and innovation actors...',
    picture: "https://img.innoloft.com/products/product_783016a3.png",
    type: {
      id: 2,
      name: "Software",
    },
    categories: [
      {
        id: 5101,
        name: "IT platforms",
      },
      {
        id: 5100,
        name: "B2B marketplaces",
      },
    ],
    implementationEffortText: null,
    investmentEffort: "< 25.000€",
    trl: {
      id: 9,
      name:
        "TRL 9 – Actual system proven in operational environment (established product available)",
    },
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    user: {
      id: 284,
      email: "example@innoloft.com",
      firstName: "Christopher",
      lastName: "Stirner",
      sex: 1,
      profilePicture: "https://img.innoloft.com/users/user_8d48197d.png",
      position: "Chief Strategy Officer",
    },
    company: {
      name: "Innoloft GmbH",
      logo: "https://img.innoloft.com/logos/unt_7838d306.png",
      address: {
        country: {
          name: "Germany",
        },
        city: {
          name: "Aachen",
        },
        street: "Jülicher Straße",
        house: "72a",
        zipCode: "52070",
        longitude: "6.100367",
        latitude: "50.779729",
      },
    },
    businessModels: [
      {
        id: 65,
        name: "Pay-Per-Use",
      },
      {
        id: 1155,
        name: "Subscription",
      },
      {
        id: 374,
        name: "White-Label",
      },
      {
        id: 66,
        name: "Peer-to-Peer (P2P)",
      },
    ],
  };
  
  it("should render the text \'Offered details \' ", () => {
    render(
      <BrowserRouter>
        <OfferDetails {...product} />
      </BrowserRouter>
    );
    const text = screen.getByText(/Offered details/i);
    expect(text).toBeInTheDocument();
  })

  it("should render the heading Categories ", () => {
    render(
      <BrowserRouter>
        <OfferDetails {...product} />
      </BrowserRouter>
    );
    const text = screen.getByText(/Categories/i);
    expect(text).toBeInTheDocument();
  })

  it("should render the heading Business Model ", () => {
    render(
      <BrowserRouter>
        <OfferDetails {...product} />
      </BrowserRouter>
    );
    const text = screen.getByText(/Business Model/i);
    expect(text).toBeInTheDocument();
  })

  it("should render the heading TRL ", () => {
    render(
      <BrowserRouter>
        <OfferDetails {...product} />
      </BrowserRouter>
    );
    const text = screen.getAllByText('TRL');
    expect(text[0]).toBeInTheDocument();
  })

  it("should render the heading Investment Effort ", () => {
    render(
      <BrowserRouter>
        <OfferDetails {...product} />
      </BrowserRouter>
    );
    const text = screen.getByText(/Investment Effort/i);
    expect(text).toBeInTheDocument();
  })

  it('Should render category names', () => {
    render(
      <BrowserRouter>
        <OfferDetails {...product} />
      </BrowserRouter>
    );
    const category1 = screen.getByText(product.categories[0].name);
    expect(category1).toBeInTheDocument();

    const category2 = screen.getByText(product.categories[1].name);
    expect(category2).toBeInTheDocument();

  })

  it('Should render business model names', () => {
    render(
      <BrowserRouter>
        <OfferDetails {...product} />
      </BrowserRouter>
    );
    const businessModel1 = screen.getByText(product.businessModels[0].name);
    expect(businessModel1).toBeInTheDocument();

    const businessModel2 = screen.getByText(product.businessModels[1].name);
    expect(businessModel2).toBeInTheDocument();

    const businessModel3 = screen.getByText(product.businessModels[2].name);
    expect(businessModel3).toBeInTheDocument();

    const businessModel4 = screen.getByText(product.businessModels[3].name);
    expect(businessModel4).toBeInTheDocument();

  })

  it('Should render TRL name', () => {
    render(
      <BrowserRouter>
        <OfferDetails {...product} />
      </BrowserRouter>
    );
    const trl = screen.getByText(product.trl.name);
    expect(trl).toBeInTheDocument();
  })

  it('Should render Investment Effort', () => {
    render(
      <BrowserRouter>
        <OfferDetails {...product} />
      </BrowserRouter>
    );
    const investmentEffort = screen.getByText(product.investmentEffort);
    expect(investmentEffort).toBeInTheDocument();
  })

});