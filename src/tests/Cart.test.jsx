import { it, expect, vi, describe, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';

describe('Cart component', () => {
  const sampleProducts = [
    {
      id: 1,
      title: 'Sample Product',
      price: 10.0,
      image: 'Test',
      description: 'Test',
      rating: { rate: 0.1, count: 999 },
      quantity: 10,
    },
  ];

  it('displays proper item count', () => {
    render(<Cart cart={sampleProducts} cartItemCount={5}></Cart>);

    const heading = screen.getByRole('heading');

    expect(heading.textContent).toMatch(/5/);
  });

  it('displays proper cart total value', () => {
    render(<Cart cart={sampleProducts}></Cart>);

    const proceedToCheckoutButton = screen.getByText(/proceed/i);

    expect(proceedToCheckoutButton.textContent).toMatch(/100.00/);
  });
});

describe('CartItem component', () => {
  let user;
  let lessButton;
  let moreButton;
  let removeButton;
  let mockHandleItem;
  let totalCell;

  beforeEach(() => {
    user = userEvent.setup();
    mockHandleItem = vi.fn();

    render(
      <CartItem
        count={1}
        title={'Sample Product'}
        quantity={10}
        price={1.0}
        handleItemChange={mockHandleItem}
      />,
    );

    lessButton = screen.getByAltText('Decrease Quantity Icon');
    moreButton = screen.getByAltText('Increase Quantity Icon');
    removeButton = screen.getByAltText('Remove Item Icon');
    totalCell = screen.getByTestId('total-cell');
  });

  it('calls function when the Decrease Quantity button is clicked', async () => {
    await user.click(lessButton);

    expect(mockHandleItem).toHaveBeenCalled();
  });

  it('calls function when the Increase Quantity button is clicked', async () => {
    await user.click(moreButton);

    expect(mockHandleItem).toHaveBeenCalled();
  });

  it('calls function when the Remove Item button is clicked', async () => {
    await user.click(removeButton);

    expect(mockHandleItem).toHaveBeenCalled();
  });

  it('calculates total correctly', () => {
    expect(totalCell.textContent).toEqual('10.00');
  });
});
