import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from 'pages/Home/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import FavouritesPage from 'pages/Favourites/Favourites';
import Layout from 'components/Layout/Layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/zapisane" element={<FavouritesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
