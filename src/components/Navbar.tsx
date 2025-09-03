import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ShimmerButton } from '@/components/ui/shimmer-button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Explore NGOs', href: '/explore' },
    { name: 'Impact(beta)', href: '/impact' },
    { name: 'About Us', href: '/stories' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <Link
  to="/"
  className="flex items-center space-x-2 text-2xl font-bold hover:text-blue-700 transition-colors"
>
  <span className="text-2xl font-bold bg-gradient-to-r from-[#3e91c3] to-[#59aac9] bg-clip-text text-transparent">
    Future Found
  </span>
</Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ShimmerButton
              background="linear-gradient(135deg, #3e91c3, #59aac9, #7fcadd)"
              shimmerColor="#ffffff"
              shimmerDuration="2.5s"
              className="px-6 py-2 font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate('/onboarding')}
            >
              <span className="text-white">Get Started</span>
            </ShimmerButton>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors rounded-lg ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <ShimmerButton
                background="linear-gradient(135deg, #3e91c3, #59aac9, #7fcadd)"
                shimmerColor="#ffffff"
                shimmerDuration="2.5s"
                className="block mt-4 mx-3 text-center px-6 py-2 font-medium"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/onboarding');
                }}
              >
                <span className="text-white">Get Started</span>
              </ShimmerButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
