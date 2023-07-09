import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import EditButton from '../../components/EditButton/EditButton';

describe('EditButton', () => {
  const handleEditButton = jest.fn();
  it("Should render the edit button", () => {
    render(
      <BrowserRouter>
        <EditButton
          handleEditButton={handleEditButton}
        />
      </BrowserRouter>
    );
    const editButton = screen.getByRole('button');
    expect(editButton).toBeInTheDocument();
    expect(editButton).toHaveTextContent('Edit');
  })

  it("Edit button should have the correct link", () => {
    render(
      <BrowserRouter>
         <EditButton
          handleEditButton={handleEditButton}
        />
      </BrowserRouter>
    );
    const editButton = screen.getByRole('button');
    expect(editButton.firstChild).toHaveAttribute('href', '/product/edit');
  })
})