import { it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

it('renders loading message by default', () => {
  render(<Home />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

it('renders event once data are successfully fetched', async () => {
  window.fetch = vi.fn(() => {
    const fakeEvents = {
      data: {
        Events: [{ text: 'Fake Fetching Works', year: '1111' }],
      },
      date: '30 February',
    };

    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(fakeEvents),
    });
  });
  render(<Home />);

  const eventText = await screen.findByText(/fake fetching works/i);

  expect(eventText).toBeInTheDocument();
});

it('renders server error message', async () => {
  window.fetch = vi.fn(() => {
    return Promise.resolve({
      ok: false,
    });
  });
  render(<Home />);

  const serverError = await screen.findByText(/server error/i);

  expect(serverError).toBeInTheDocument();
});

it('renders non-server error message', async () => {
  window.fetch = vi.fn(() => {
    const error = { message: "I'm an error!" };

    return Promise.resolve({
      ok: true,
      json: () => Promise.reject(error),
    });
  });
  render(<Home />);

  const otherError = await screen.findByText(/i'm an error/i);

  expect(otherError).toBeInTheDocument();
});
