import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPinIcon,
  ShareIcon,
  BookmarkIcon as BookmarkOutlineIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import {
  StarIcon as StarSolidIcon,
  BookmarkIcon as BookmarkSolidIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/solid";

// Reusable star rating
const StarRating: React.FC<{ value: number; size?: number; className?: string }> = ({
  value,
  size = 20,
  className = "",
}) => {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <div className={`flex items-center ${className}`}>
      {Array.from({ length: full }).map((_, i) => (
        <StarSolidIcon key={`full-${i}`} style={{ width: size, height: size }} className="text-yellow-400" />
      ))}
      {hasHalf && (
        <div className="relative" style={{ width: size, height: size }}>
          <StarSolidIcon className="absolute left-0 top-0 text-yellow-400" style={{ clipPath: "inset(0 50% 0 0)" }} />
          <StarSolidIcon className="absolute left-0 top-0 text-gray-300" style={{ clipPath: "inset(0 0 0 50%)" }} />
        </div>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <StarSolidIcon key={`empty-${i}`} style={{ width: size, height: size }} className="text-gray-300" />
      ))}
    </div>
  );
};

type NGO = {
  id: number;
  name: string;
  tagline: string;
  logo: string;
  coverImage: string;
  causes: string[];
  location: string;
  founded: string;
  rating: number;
  reviews: number;
  volunteers: number;
  mission: string;
  impact: {
    childrenEducated: string;
    schoolsBuilt: string | number;
    teachersTrained: string;
    villagesReached: string;
  };
  founderStory: string;
  gallery: string[];
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  };
};

const mockNGOs: NGO[] = [
  {
    id: 1,
    name: "Teach India Foundation",
    tagline: "Education is the most powerful weapon to change the world",
    logo: "https://images.pexels.com/photos/8613081/pexels-photo-8613081.jpeg?auto=compress&cs=tinysrgb&w=200",
    coverImage:
      "https://images.pexels.com/photos/8613081/pexels-photo-8613081.jpeg?auto=compress&cs=tinysrgb&w=1200",
    causes: ["Education", "Rural Development"],
    location: "Mumbai, Maharashtra",
    founded: "2015",
    rating: 4.8,
    reviews: 156,
    volunteers: 1250,
    mission:
      "To provide quality education and create sustainable learning environments for underprivileged children across India, empowering them to break the cycle of poverty.",
    impact: {
      childrenEducated: "15,000+",
      schoolsBuilt: "25",
      teachersTrained: "300+",
      villagesReached: "50+",
    },
    founderStory:
      "Founded by Priya Sharma, a former software engineer who left her corporate job to address the education crisis in rural India. After volunteering in government schools, she realized the need for a systematic approach to improve educational outcomes.",
    gallery: [
      "https://images.pexels.com/photos/8613081/pexels-photo-8613081.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/8613028/pexels-photo-8613028.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/8613165/pexels-photo-8613165.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/8613079/pexels-photo-8613079.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    socialMedia: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

const volunteerOpportunities = [
  {
    id: 1,
    title: "Weekend Teaching Program",
    description: "Teach English and Math to children aged 8-14 on weekends",
    duration: "2-3 hours",
    frequency: "Weekly",
    location: "Mumbai",
    skills: ["Teaching", "Communication"],
    commitment: "3 months minimum",
  },
  {
    id: 2,
    title: "Digital Literacy Workshop",
    description: "Conduct computer basics workshops for rural teachers",
    duration: "Full day",
    frequency: "Monthly",
    location: "Remote/On-site",
    skills: ["Computer Skills", "Training"],
    commitment: "6 months",
  },
  {
    id: 3,
    title: "Fundraising Campaign Support",
    description: "Help organize and promote fundraising events and campaigns",
    duration: "Flexible",
    frequency: "As needed",
    location: "Remote",
    skills: ["Marketing", "Social Media"],
    commitment: "Ongoing",
  },
];

const donationOptions = [
  {
    amount: "₹500",
    impact: "Provides school supplies for 2 children for a month",
    popular: false,
  },
  {
    amount: "₹1,500",
    impact: "Sponsors lunch for 30 children for a week",
    popular: true,
  },
  {
    amount: "₹5,000",
    impact: "Covers teacher salary for a week",
    popular: false,
  },
  {
    amount: "Custom",
    impact: "Choose your contribution amount",
    popular: false,
  },
];

const tabs = [
  { id: "overview", name: "Overview" },
  { id: "volunteer", name: "Volunteer" },
  { id: "donate", name: "Donate" },
  { id: "gallery", name: "Gallery" },
  { id: "reviews", name: "Reviews" },
];

const NGOProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  const ngo = useMemo(() => {
    const numericId = Number(id);
    return mockNGOs.find((n) => n.id === numericId) || mockNGOs[0];
  }, [id]);

  // Persist bookmark per NGO
  useEffect(() => {
    const key = `ngo-bookmark-${ngo.id}`;
    const stored = localStorage.getItem(key);
    if (stored) setIsBookmarked(stored === "true");
  }, [ngo.id]);

  useEffect(() => {
    const key = `ngo-bookmark-${ngo.id}`;
    localStorage.setItem(key, String(isBookmarked));
  }, [isBookmarked, ngo.id]);

  const handleShare = async () => {
    const shareData = {
      title: ngo.name,
      text: ngo.tagline,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard!");
      }
    } catch {
      // no-op
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image & Header */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-600 to-purple-600">
        <img
          src={ngo.coverImage}
          alt={ngo.name}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={ngo.logo}
              alt={`${ngo.name} logo`}
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border-4 border-white shadow-lg object-cover"
            />
            <div className="flex-1 text-white">
              <h1 className="text-2xl md:text-4xl font-bold mb-2">
                {ngo.name}
              </h1>
              <p className="text-lg opacity-90 mb-3">{ngo.tagline}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  {ngo.location}
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  Since {ngo.founded}
                </div>
                <div className="flex items-center">
                  <StarRating value={ngo.rating} size={16} className="mr-1" />
                  <span className="ml-1">
                    {ngo.rating} ({ngo.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick bookmark on header (mobile hidden) */}
            <button
              aria-label={isBookmarked ? "Remove bookmark" : "Bookmark NGO"}
              onClick={() => setIsBookmarked((p) => !p)}
              className="hidden md:inline-flex items-center gap-2 bg-white/90 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:shadow transition"
            >
              {isBookmarked ? (
                <BookmarkSolidIcon className="h-5 w-5 text-blue-600" />
              ) : (
                <BookmarkOutlineIcon className="h-5 w-5" />
              )}
              {isBookmarked ? "Bookmarked" : "Bookmark"}
            </button>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-2">
            {ngo.causes.map((cause, index) => (
              <span
                key={index}
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full"
              >
                {cause}
              </span>
            ))}
          </div>

          <div className="flex space-x-3">
            <button
              aria-label={isBookmarked ? "Remove bookmark" : "Bookmark NGO"}
              onClick={() => setIsBookmarked((p) => !p)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                isBookmarked
                  ? "bg-blue-50 text-blue-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {isBookmarked ? (
                <BookmarkSolidIcon className="h-5 w-5 text-blue-600" />
              ) : (
                <BookmarkOutlineIcon className="h-5 w-5" />
              )}
              <span>{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center space-x-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              <ShareIcon className="h-5 w-5" />
              <span>Share</span>
            </button>

            <Link
              to="/onboarding"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Join as Volunteer
            </Link>

            <a
              href="#donate"
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Contribute Funds
            </a>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? "border-blue-500 text-blue-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                      aria-current={activeTab === tab.id ? "page" : undefined}
                    >
                      {tab.name}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {/* Overview */}
                {activeTab === "overview" && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Our Mission 🎯
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {ngo.mission}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Our Impact 📊
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center p-4 bg-blue-50 rounded-xl">
                          <div className="text-3xl font-bold text-blue-600 mb-2">
                            {ngo.impact.childrenEducated}
                          </div>
                          <div className="text-gray-600 font-medium">
                            Children Educated
                          </div>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-xl">
                          <div className="text-3xl font-bold text-blue-600 mb-2">
                            {ngo.impact.schoolsBuilt}
                          </div>
                          <div className="text-gray-600 font-medium">
                            Schools Built
                          </div>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-xl">
                          <div className="text-3xl font-bold text-blue-700 mb-2">
                            {ngo.impact.teachersTrained}
                          </div>
                          <div className="text-gray-600 font-medium">
                            Teachers Trained
                          </div>
                        </div>
                        <div className="text-center p-4 bg-red-50 rounded-xl">
                          <div className="text-3xl font-bold text-red-500 mb-2">
                            {ngo.impact.villagesReached}
                          </div>
                          <div className="text-gray-600 font-medium">
                            Villages Reached
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Founder's Story 👤
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {ngo.founderStory}
                      </p>
                    </div>
                  </div>
                )}

                {/* Volunteer */}
                {activeTab === "volunteer" && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Volunteer Opportunities 🙋‍♀️
                      </h3>
                      <p className="text-gray-600">
                        Join our mission and make a real difference in
                        children's lives!
                      </p>
                    </div>

                    <div className="grid gap-6">
                      {volunteerOpportunities.map((opportunity) => (
                        <div
                          key={opportunity.id}
                          className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                        >
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-gray-900 mb-2">
                                {opportunity.title}
                              </h4>
                              <p className="text-gray-600 mb-4">
                                {opportunity.description}
                              </p>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div className="flex items-center text-gray-500">
                                  <ClockIcon className="h-4 w-4 mr-1" />
                                  {opportunity.duration}
                                </div>
                                <div className="flex items-center text-gray-500">
                                  <CalendarIcon className="h-4 w-4 mr-1" />
                                  {opportunity.frequency}
                                </div>
                                <div className="flex items-center text-gray-500">
                                  <MapPinIcon className="h-4 w-4 mr-1" />
                                  {opportunity.location}
                                </div>
                                <div className="text-gray-500">
                                  {opportunity.commitment}
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-2 mt-4">
                                {opportunity.skills.map((skill, index) => (
                                  <span
                                    key={index}
                                    className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="mt-4 md:mt-0 md:ml-6">
                              <button className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                                Apply Now
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Donate */}
                {activeTab === "donate" && (
                  <div id="donate" className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Support Our Cause 💝
                      </h3>
                      <p className="text-gray-600">
                        Every contribution helps us reach more children and
                        create lasting impact!
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {donationOptions.map((option, index) => (
                        <div
                          key={index}
                          className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg ${
                            option.popular
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:border-blue-300"
                          }`}
                          role="button"
                          tabIndex={0}
                        >
                          {option.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                Most Popular
                              </span>
                            </div>
                          )}
                          <div className="text-center">
                            <div className="flex items-center justify-center text-3xl font-bold text-gray-900 mb-2">
                              {option.amount !== "Custom" && (
                                <CurrencyRupeeIcon className="h-7 w-7 mr-1 text-gray-800" />
                              )}
                              <span>{option.amount}</span>
                            </div>
                            <p className="text-gray-600 mb-4">{option.impact}</p>
                            <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                              Donate Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">
                        Why Donate? 🤔
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">✓</span>
                          100% transparency — see exactly how your money is used
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">✓</span>
                          Regular updates on the impact of your contribution
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">✓</span>
                          Tax exemption under 80G of Income Tax Act
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">✓</span>
                          Join a community of like-minded changemakers
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Gallery */}
                {activeTab === "gallery" && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Our Work in Action 📸
                      </h3>
                      <p className="text-gray-600">
                        See the smiles and stories behind our impact!
                      </p>
                    </div>  

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {ngo.gallery.map((image, index) => (
                        <div
                          key={index}
                          className="relative group overflow-hidden rounded-xl"
                        >
                          <img
                            src={image}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                            <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold transition-opacity duration-300">
                              View Full Size
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reviews */}
                {activeTab === "reviews" && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        What Volunteers Say 💬
                      </h3>
                      <div className="flex items-center justify-center mb-6">
                        <StarRating value={ngo.rating} size={24} className="mr-2" />
                        <span className="text-2xl font-bold text-gray-900">
                          {ngo.rating}
                        </span>
                        <span className="text-gray-600 ml-2">
                          ({ngo.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {[1, 2, 3].map((review) => (
                        <div
                          key={review}
                          className="border border-gray-200 rounded-xl p-6"
                        >
                          <div className="flex items-start space-x-4">
                            <img
                              src={`https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100`}
                              alt="Reviewer"
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <h4 className="font-bold text-gray-900">
                                    Priya Sharma
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    Delhi University • Volunteered for 6 months
                                  </p>
                                </div>
                                <StarRating value={5} size={16} />
                              </div>
                              <p className="text-gray-700 leading-relaxed">
                                “Amazing experience! The team is incredibly
                                supportive and the impact is real. I’ve learned
                                so much while teaching these brilliant kids.
                                Highly recommend to any student looking to make
                                a difference!”
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                      <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                        Write a Review
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Quick Stats 📈
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Volunteers</span>
                  <span className="font-bold text-blue-500">
                    {ngo.volunteers}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Rating</span>
                  <span className="font-bold text-red-500">
                    {ngo.rating}/5.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Founded</span>
                  <span className="font-bold text-gray-900">{ngo.founded}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Verified</span>
                  <span className="font-bold text-blue-600">✓ Yes</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Follow Us 📱
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={ngo.socialMedia.facebook}
                  className="flex items-center justify-center bg-blue-50 text-blue-600 py-3 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <span className="font-semibold">Facebook</span>
                </a>
                <a
                  href={ngo.socialMedia.instagram}
                  className="flex items-center justify-center bg-red-50 text-red-600 py-3 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <span className="font-semibold">Instagram</span>
                </a>
                <a
                  href={ngo.socialMedia.twitter}
                  className="flex items-center justify-center bg-blue-50 text-blue-600 py-3 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <span className="font-semibold">Twitter</span>
                </a>
                <a
                  href={ngo.socialMedia.linkedin}
                  className="flex items-center justify-center bg-blue-50 text-blue-600 py-3 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <span className="font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Get in Touch 📞
              </h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-50 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
                  WhatsApp Chat
                </button>
                <button className="w-full bg-blue-50 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
                  Email Us
                </button>
                <button className="w-full bg-blue-50 text-blue-700 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
                  Visit Office
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGOProfile;
