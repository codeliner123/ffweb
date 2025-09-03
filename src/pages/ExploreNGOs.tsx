import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {MagnifyingGlassIcon, FunnelIcon, MapPinIcon, UserGroupIcon, HeartIcon, BookmarkIcon } from '@heroicons/react/24/outline';

const ExploreNGOs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCause, setSelectedCause] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedContribution, setSelectedContribution] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const causes = ['Education', 'Environment', 'Health', 'Women Empowerment', 'Rural Development', 'Animal Welfare'];
  const locations = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad'];
  const contributions = ['Time', 'Money', 'Remote', 'Skills', 'Both'];

  const ngos = [
    {
      id: 1,
      name: "Teach India Foundation",
      logo: "https://images.pexels.com/photos/8613081/pexels-photo-8613081.jpeg?auto=compress&cs=tinysrgb&w=100",
      causes: ["Education", "Rural Development"],
      location: "Mumbai, Maharashtra",
      description: "Providing quality education to underprivileged children through innovative learning programs and community engagement.",
      volunteers: 1250,
      rating: 4.8,
      contributions: ["Time", "Money"]
    },
    {
      id: 2,
      name: "Green Earth Initiative",
      logo: "https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&w=100",
      causes: ["Environment"],
      location: "Bangalore, Karnataka",
      description: "Fighting climate change through tree plantation drives, waste management, and environmental awareness campaigns.",
      volunteers: 890,
      rating: 4.9,
      contributions: ["Time", "Remote"]
    },
    {
      id: 3,
      name: "Women Rise Collective",
      logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100",
      causes: ["Women Empowerment"],
      location: "Delhi, NCR",
      description: "Empowering women through skill development, entrepreneurship training, and financial literacy programs.",
      volunteers: 670,
      rating: 4.7,
      contributions: ["Time", "Money", "Skills"]
    },
    {
      id: 4,
      name: "Digital Bridge Academy",
      logo: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=100",
      causes: ["Education"],
      location: "Chennai, Tamil Nadu",
      description: "Bridging the digital divide by providing technology education and computer literacy to rural communities.",
      volunteers: 540,
      rating: 4.6,
      contributions: ["Remote", "Skills"]
    },
    {
      id: 5,
      name: "Health For All Mission",
      logo: "https://images.pexels.com/photos/3279203/pexels-photo-3279203.jpeg?auto=compress&cs=tinysrgb&w=100",
      causes: ["Health"],
      location: "Kolkata, West Bengal",
      description: "Providing healthcare services and health awareness programs in underserved communities across India.",
      volunteers: 920,
      rating: 4.8,
      contributions: ["Time", "Money"]
    },
    {
      id: 6,
      name: "Rural Connect Foundation",
      logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100",
      causes: ["Rural Development"],
      location: "Pune, Maharashtra",
      description: "Connecting rural communities with modern opportunities through infrastructure development and skill training.",
      volunteers: 780,
      rating: 4.5,
      contributions: ["Time", "Money", "Skills"]
    }
  ];

  const filteredNGOs = ngos.filter(ngo => {
    const matchesSearch = ngo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ngo.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCause = !selectedCause || ngo.causes.includes(selectedCause);
    const matchesLocation = !selectedLocation || ngo.location.includes(selectedLocation);
    const matchesContribution = !selectedContribution || ngo.contributions.includes(selectedContribution);
    
    return matchesSearch && matchesCause && matchesLocation && matchesContribution;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#007BFF]/10 via-[#137dc5]/5 to-[#bf1922]/5 py-8 relative overflow-hidden">
      {/* Dynamic Polka Dots Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, #007BFF 1px, transparent 1px),
                           radial-gradient(circle at 80% 70%, #137dc5 1px, transparent 1px),
                           radial-gradient(circle at 40% 80%, #bf1922 1px, transparent 1px),
                           radial-gradient(circle at 90% 20%, #007BFF 0.5px, transparent 0.5px),
                           radial-gradient(circle at 10% 90%, #137dc5 0.5px, transparent 0.5px),
                           radial-gradient(circle at 60% 40%, #bf1922 0.5px, transparent 0.5px)`,
          backgroundSize: '80px 80px, 120px 120px, 100px 100px, 60px 60px, 90px 90px, 70px 70px',
          backgroundPosition: '0 0, 40px 40px, 20px 60px, 10px 10px, 50px 30px, 30px 50px',
          animation: 'polkaDots 20s linear infinite'
        }}></div>
      </div>
      
      {/* CSS Animation for moving dots */}
      <style jsx>{`
        @keyframes polkaDots {
          0% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(-10px) translateY(-5px); }
          50% { transform: translateX(5px) translateY(-10px); }
          75% { transform: translateX(-5px) translateY(5px); }
          100% { transform: translateX(0) translateY(0); }
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing NGOs 🌟
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect organization to channel your passion and create meaningful impact!
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search NGOs by name, cause, or keywords..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold mb-4"
          >
            <FunnelIcon className="h-5 w-5" />
            <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
          </button>

          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cause</label>
                <select
                  value={selectedCause}
                  onChange={(e) => setSelectedCause(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Causes</option>
                  {causes.map(cause => (
                    <option key={cause} value={cause}>{cause}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contribution Type</label>
                <select
                  value={selectedContribution}
                  onChange={(e) => setSelectedContribution(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Types</option>
                  {contributions.map(contribution => (
                    <option key={contribution} value={contribution}>{contribution}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-blue-600">{filteredNGOs.length}</span> NGOs
          </p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
              Sort by Relevance
            </button>
          </div>
        </div>

        {/* NGO Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNGOs.map((ngo) => (
            <div key={ngo.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              {/* NGO Logo */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <img src={ngo.logo} alt={ngo.name} className="w-16 h-16 rounded-xl object-cover" />
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <BookmarkIcon className="h-6 w-6" />
                  </button>
                </div>

                {/* Cause Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {ngo.causes.map((cause, index) => (
                    <span key={index} className="inline-block bg-gradient-to-r  from-[#3e91c3] to-[#59aac9] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {cause}
                    </span>
                  ))}
                </div>

                {/* NGO Name and Location */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{ngo.name}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  <span className="text-sm">{ngo.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{ngo.description}</p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <UserGroupIcon className="h-4 w-4 mr-1" />
                    {ngo.volunteers} volunteers
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 font-semibold">{ngo.rating}</span>
                  </div>
                </div>

                {/* Contribution Types */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {ngo.contributions.map((contribution, index) => (
                    <span key={index} className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                      {contribution}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Link
                    to={`/ngo/${ngo.id}`}
                    className="flex-1 bg-gradient-to-r  from-[#3e91c3] to-[#59aac9] text-white text-center py-2 px-3 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Know More
                  </Link>
                  <button className="bg-blue-50 text-blue-600 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors">
                    Volunteer
                  </button>
                  <button className="bg-red-50 text-red-600 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-red-100 transition-colors">
                    Donate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredNGOs.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r  from-[#3e91c3] to-[#59aac9] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Load More NGOs
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredNGOs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No NGOs Found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCause('');
                setSelectedLocation('');
                setSelectedContribution('');
              }}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreNGOs;