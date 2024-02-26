import { it, expect, vi, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Products from '../components/Products';

const sampleProducts = [
  {
    id: 1,
    title: 'Sample Product',
    price: 10.0,
    image: 'Test',
    description: 'Test',
    rating: { rate: 0.1, count: 999 },
  },
];

describe('Products component', () => {
  it('renders loading message by default', () => {
    render(<Products loading={true} />);

    const loadingMessage = screen.getByRole('heading', {
      name: /loading/i,
    });

    expect(loadingMessage).toBeInTheDocument();
  });

  it('renders error message if error passed as a prop', () => {
    render(<Products error={{ message: "I'm an error!" }} />);

    const errorMessage = screen.getByRole('heading', {
      name: /error/i,
    });

    expect(errorMessage).toBeInTheDocument();
  });

  it('renders products', () => {
    render(<Products products={sampleProducts} />);

    const sampleProductTitle = screen.getByText('Sample Product');

    expect(sampleProductTitle).toBeInTheDocument();
  });

  it('calls function when Add To Cart button is pressed', async () => {
    const mockHandleCart = vi.fn();
    const user = userEvent.setup();
    render(<Products products={sampleProducts} handleCart={mockHandleCart} />);

    const addToCartButton = screen.getByAltText('Add To Cart Icon');
    await user.click(addToCartButton);

    expect(mockHandleCart).toHaveBeenCalled();
  });
});
