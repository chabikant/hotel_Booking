import React,{ lazy, Suspense } from 'react';
import { Route, Routes} from 'react-router-dom'
import LoadingSkeleton from './components/LoadingSkeleton';
import {QueryClient, QueryClientProvider} from 'react-query'
// import NotFound from './components/NotFound';
const NotFound = lazy(()=>import('./pages/NotFound'));
const Home = lazy(()=>import('./pages/Home'));
const HotelInfo = lazy(()=>import('./pages/HotelInfo'));

const queryClient = new QueryClient();
function App() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <QueryClientProvider client={queryClient}>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/hotel/:slug' element={<HotelInfo />}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
      </QueryClientProvider>
    </Suspense>
  
  );
}

export default App;
