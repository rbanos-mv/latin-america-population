import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import setupStore from './setupStore';

describe('Tests Population App', () => {
  it('renders the App correctly', () => {
    const store = setupStore();
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(app).toMatchSnapshot();
  });

  it('renders the HomePage correctly', () => {
    const store = setupStore();
    const page = render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>,
    );
    expect(page).toMatchSnapshot();
  });

  it('shows the PopulationPage when clicking the country link', () => {
    const store = setupStore();
    const { container } = render(
      <Provider store={store}>
        <App url="/" />
      </Provider>,
    );
    fireEvent.click(screen.getByText('Argentina'));
    expect(container.getElementsByClassName('population-list')).toHaveLength(1);
  });

  it('shows the HomePage when clicking the back link', () => {
    const store = setupStore();
    const { container } = render(
      <Provider store={store}>
        <App url="/" />
      </Provider>,
    );
    fireEvent.click(screen.getByText('Argentina'));
    expect(container.getElementsByClassName('population-list')).toHaveLength(1);
    fireEvent.click(screen.getByRole('link'));
    expect(container.getElementsByClassName('filter')).toHaveLength(1);
  });
});
