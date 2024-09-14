import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import MijnAanbod from './components/MijnAanbod';
import FAQ from './components/FAQ';
import ContactForm from './components/contactform';

function App() {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const noteSvgs = [
    {
      viewBox: "-4.5 0 32 32",
      path: "M22.293 7.364L15.636 0.707C15.245 0.316 14.634 0.339 14.222 0.707C13.925 0.973 14 1.453 14 2V19.327C11.781 17.683 8.119 17.68 4.876 19.553C0.844 21.88 -1.009 26.219 0.736 29.243C2.482 32.267 7.166 32.831 11.198 30.503C14.33 28.695 16.138 25.676 15.976 23H16V3.971L20.879 8.778C21.27 9.169 21.902 9.169 22.293 8.778C22.684 8.388 22.684 7.755 22.293 7.364"
    },
    {
      viewBox: "-7 0 30 30",
      path: "M10.538 26.889C7.556 28.719 3.92 28.641 2.479 26.519C1.039 24.396 2.348 21.049 5.321 19.203C8.294 17.358 12.038 17.55 13.479 19.672C14.895 21.961 13.204 25.252 10.538 26.889L10.538 26.889ZM14.992 0C14.031 0 13.984 1.002 13.984 1.002L13.984 17.363C11.748 15.715 8.058 15.713 4.788 17.589C0.725 19.922 -1.018 24.27 0.616 27.3C2.279 30.384 7.097 30.896 11.16 28.563C14.316 26.751 16.007 23.807 16 21V1C15.982 0.462 15.537 0 14.992 0L14.992 0Z"
    },
    {
      viewBox: "0 -1 32 32",
      path: "M31 0C30.857 0.049 14 4 14 4C13.447 4.135 13 4.448 13 5V19.002C10.899 17.636 7.522 17.638 4.51 19.24C0.707 21.263 -1.04 25.031 0.606 27.659C2.253 30.286 6.67 30.776 10.472 28.754C12.923 27.45 14.615 24.981 15 23C15.067 22.865 15 5.765 15 5.765L30 2.235V15.002C27.899 13.636 24.522 13.638 21.51 15.24C17.707 17.263 15.96 21.031 17.606 23.659C19.253 26.286 23.67 26.776 27.472 24.754C29.923 23.45 31.615 20.981 32 19V1C32 0.447 31.553 -0.187 31 0"
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-200">
        {/* Banner with animated notes and gradient background */}
        <div 
          className="w-full h-[150px] bg-gradient-to-r from-pink-200 to-cream relative overflow-hidden"
          style={{
            backgroundPositionY: `${offset * 0.5}px`
          }}
        >
          {/* Animated musical notes */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => {
              const note = noteSvgs[i % noteSvgs.length];
              return (
                <svg key={i} className={`absolute animate-float-${i + 1} text-gray-700 opacity-50`} width="48" height="48" viewBox={note.viewBox} xmlns="http://www.w3.org/2000/svg">
                  <path d={note.path} fill="currentColor"/>
                </svg>
              );
            })}
          </div>

          {/* Styles for animations and custom colors */}
          <style>{`
            /* Custom color for cream */
            .to-cream {
              --tw-gradient-to: #FFFDD0;
            }

            /* Animations for musical notes */
            @keyframes float {
              0% { transform: translate(0, 0) rotate(0deg); }
              50% { transform: translate(10px, -10px) rotate(5deg); }
              100% { transform: translate(0, 0) rotate(0deg); }
            }

            ${[...Array(10)].map((_, i) => `
              .animate-float-${i + 1} {
                animation: float ${3 + i * 0.5}s ease-in-out infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
              }
            `).join('')}
          `}</style>
        </div>

        <nav className="bg-white shadow-md sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-xl font-bold text-gray-800">Zangeres - Nancy Beerens</span>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link to="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-300">Home</Link>
                  <Link to="/about" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-300">Over mij</Link>
                  <Link to="/MijnAanbod" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-300">Mijn aanbod</Link>
                  <Link to="/faq" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-300">FAQ</Link>
                  <Link to="/contactform" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-300">Contactform</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/MijnAanbod" element={<MijnAanbod />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contactform" element={<ContactForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;