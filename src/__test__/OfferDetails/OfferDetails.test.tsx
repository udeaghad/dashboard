import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import OfferDetails from "../../components/OfferDetails/OfferDetails";
import product from "../Mock/ProductAPI";

describe("OfferDetails", () => {
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