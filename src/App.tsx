/**
 * @copyright 2025 Nhm Develop Solution
 * @license Apache-2.0
 */

import { ReactLenis } from 'lenis/react';

/**
 * Components
 */
import Blog from './components/Blog';
import Brand from './components/Brand';
import Cta from './components/Cta';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Process from './components/Process';
import Review from './components/Review';

const App = () => {
  return (
    <ReactLenis root>
      <div className='isolate overflow-hidden relative'>
        <Header />
        <main>
          <Hero />
          <Brand />
          <Feature />
          <Process />
          {/* <Overview /> */}
          <Review />
          <Blog />
          <Cta />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
