import { it, expect, vi, describe, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Products from '../components/Products';
import ProductCard from '../components/ProductCard';

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

describe('ProductCard component', () => {
  let user;
  let input;

  beforeEach(() => {
    const mockHandleCart = vi.fn();
    user = userEvent.setup();

    render(
      <ProductCard
        id={sampleProducts[0].id}
        title={sampleProducts[0].title}
        image={sampleProducts[0].image}
        price={sampleProducts[0].price}
        description={sampleProducts[0].description}
        rate={sampleProducts[0].rating.rate}
        count={sampleProducts[0].rating.count}
        handleCart={mockHandleCart}
      />,
    );

    input = screen.getByRole('spinbutton');
  });

  it('shows input value if a correct one is typed', async () => {
    await user.type(input, '99');

    expect(input.value).toEqual('99');
  });

  it.each([['-5'], ['100'], ['string']])(
    'does not allow incorrect values to be typed (%s)',
    async (value) => {
      await user.type(input, value);

      expect(input.value).not.toEqual(value);
    },
  );

  it('increases quantity when button clicked', async () => {
    const incrementButton = screen.getByAltText('Increase Quantity Icon');
    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);

    expect(input.value).toEqual('3');
  });

  it('does not allow quantity to go above max', async () => {
    const incrementButton = screen.getByAltText('Increase Quantity Icon');
    await user.type(input, '98');
    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);

    expect(input.value).toEqual('99');
  });

  it('decreases quantity when button clicked', async () => {
    const incrementButton = screen.getByAltText('Increase Quantity Icon');
    const decrementButton = screen.getByAltText('Decrease Quantity Icon');
    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(input.value).toEqual('1');
  });

  it('does not allow quantity to go below min', async () => {
    const decrementButton = screen.getByAltText('Decrease Quantity Icon');
    await user.click(decrementButton);
    await user.click(decrementButton);
    await user.click(decrementButton);

    expect(input.value).toEqual('0');
  });

  it('resets quantity to 0 after clicking the Add To Cart button', async () => {
    const addToCartButton = screen.getByAltText('Add To Cart Icon');
    await user.type(input, '55');
    await user.click(addToCartButton);

    expect(input.value).toEqual('0');
  });
});
