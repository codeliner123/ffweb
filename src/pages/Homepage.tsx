import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  UserGroupIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import DisplayCards from "@/components/ui/display-cards";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { GraduationCap, Globe as GlobeIcon, Users } from "lucide-react";
import { Globe as HeroGlobe } from "@/components/ui/globe"; // ✅ correct path

const Homepage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "Education", icon: AcademicCapIcon, color: "bg-blue-500", count: "250+ NGOs" },
    { name: "Environment", icon: GlobeAltIcon, color: "bg-blue-600", count: "180+ NGOs" },
    { name: "Women Empowerment", icon: SparklesIcon, color: "bg-blue-700", count: "120+ NGOs" },
    { name: "Rural Development", icon: UserGroupIcon, color: "bg-red-500", count: "200+ NGOs" },
  ];

  const testimonials = [
    {
      name: "",
      college: "",
      quote:
        "I have known Jey for years from having him as the goofiest student in class to becoming one of the most capable people I've ever met and when he told me about Future Found I was thrilled to Join without a second thought",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Arjun Patel",
      college: "IIT Bombay",
      quote:
        "From coding workshops for underprivileged youth to fundraising, this platform made it easy to contribute meaningfully.",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "",
      college: "",
      quote:
        "The idea of tracking our impact excites me! Knowing that we’ll soon be able to see the real numbers of lives impacted will make every hour of volunteering feel even more meaningful.",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 via-black-600 to-blue-700 text-white py-20 overflow-hidden">
        {/* Globe background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <HeroGlobe className="max-w-[700px] w-full opacity-40" />
        </div>
        {/* readability overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #3e91c3, #59aac9, #7fcadd)' }} />

        {/* Foreground content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Turn Your Passion Into
         <span className="block text-white">
  Social Impact!
</span>

          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Connect with amazing NGOs across India, volunteer for causes you care about, and track your real-world impact!
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search NGOs, causes, or locations..."
                className="w-full pl-12 pr-4 py-4 text-lg rounded-full border-0 focus:ring-4 focus:ring-blue-200 text-gray-900 placeholder-gray-500 shadow-xl"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Search
              </button>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/explore"
              className="bg-white text-[#3e91c3] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Find NGOs
            </Link>
            <Link
              to="/onboarding"
              className="bg-gradient-to-r  from-[#3e91c3] to-[#3e91c3] px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Donate
            </Link>
            <Link
              to="/impact"
              className="bg-gradient-to-r from-red-500 to-red-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Support a Cause
            </Link>
          </div>
        </div>
      </section>
    {/*text-2xl font-bold bg-gradient-to-r from-[#3e91c3] to-[#59aac9] bg-clip-text text-transparent"*/}
      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold font-bold bg-gradient-to-r from-[#3e91c3] to-[#59aac9] bg-clip-text text-transparent">25,000+</div>
              <div className="text-gray-600 font-medium">Students Struggle to find NGOs</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#3e91c3] to-[#59aac9] bg-clip-text text-transparent">30+</div>
              <div className="text-gray-600 font-medium">NGOs want students</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#3e91c3] to-[#59aac9] bg-clip-text text-transparent">50,000+</div>
              <div className="text-gray-600 font-medium">Projected Lives Impacted</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-red-500 mb-2">1</div>
              <div className="text-protected-600 text-red-500 font-medium">Platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative isolate bg-gradient-to-br from-gray-50 via-[#112d4e]/8 to-gray-50 overflow-visible py-8 md:py-16">
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 15% 25%, #112d4e 2px, transparent 2px),
                       radial-gradient(circle at 85% 75%, #007BFF 0.6px, transparent 0.6px),
                       radial-gradient(circle at 45% 85%, #112d4e 1.2px, transparent 1.2px),
                       radial-gradient(circle at 95% 15%, #137dc5 0.4px, transparent 0.4px),
                       radial-gradient(circle at 5% 95%, #112d4e 1px, transparent 1px),
                       radial-gradient(circle at 65% 35%, #bf1922 0.3px, transparent 0.3px),
                       radial-gradient(circle at 25% 65%, #112d4e 0.8px, transparent 0.8px),
                       radial-gradient(circle at 75% 45%, #007BFF 0.4px, transparent 0.4px),
                       radial-gradient(circle at 35% 15%, #112d4e 0.9px, transparent 0.9px),
                       radial-gradient(circle at 55% 95%, #112d4e 0.7px, transparent 0.7px)`,
              backgroundSize:
                "90px 90px, 110px 110px, 85px 85px, 70px 70px, 95px 95px, 60px 60px, 80px 80px, 75px 75px, 65px 65px, 100px 100px",
              backgroundPosition:
                "0 0, 45px 45px, 25px 65px, 15px 15px, 55px 35px, 35px 55px, 20px 40px, 40px 20px, 30px 10px, 50px 80px",
              animation: "polkaDots 25s linear infinite",
            }}
          />
        </div>

        <style jsx>{`
          @keyframes polkaDots {
            0% { transform: translateX(0) translateY(0); }
            25% { transform: translateX(-8px) translateY(-4px); }
            50% { transform: translateX(4px) translateY(-8px); }
            75% { transform: translateX(-4px) translateY(4px); }
            100% { transform: translateX(0) translateY(0); }
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Your Cause</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore different categories and find NGOs that align with your passion!
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="relative h-[250px] md:h-[250px] lg:h-[250px] overflow-visible">
              <DisplayCards
                cards={[
                  {
                    icon: <GraduationCap className="size-4 text-white" />,
                    title: "Education",
                    description: "250+ NGOs",
                    date: "Most Popular",
                    iconClassName: "text-white",
                    titleClassName: "text-white",
                    className:
                      "will-change-transform [grid-area:stack] hover:-translate-y-10 pointer-events-auto",
                    from: "#137dc5", 
                    to: "#59aac9",
                  },
                  {
                    icon: <GlobeIcon className="size-4 text-white" />,
                    title: "Environment",
                    description: "180+ NGOs",
                    date: "Growing Fast",
                    iconClassName: "text-white",
                    titleClassName: "text-white",
                    className:
                      "will-change-transform [grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 pointer-events-auto",
                      from: "#3e91c3", 
                    to: "#137dc5",
                
                  },
                  {
                    icon: <Users className="size-4 text-white" />,
                    title: "Women Empowerment",
                    description: "120+ NGOs",
                    date: "High Impact",
                    iconClassName: "text-white",
                    titleClassName: "text-white",
                    className:
                      "will-change-transform [grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10 pointer-events-auto",
                      from: "#3e91c3", 
                      to: "#bf1922",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured NGOs */}
      <HeroGeometric badge="Future Found" title1="Coming Soon" title2="Partner NGOs" />

      {/* Testimonials */}
      <section className="relative py-16 bg-gradient-to-br from-[#007BFF]/10 via-[#137dc5]/5 to-[#bf1922]/5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 15% 25%, #007BFF 2px, transparent 2px),
                             radial-gradient(circle at 85% 75%, #137dc5 0.6px, transparent 0.6px),
                             radial-gradient(circle at 45% 85%, #bf1922 0.7px, transparent 0.7px),
                             radial-gradient(circle at 95% 15%, #007BFF 0.4px, transparent 0.4px),
                             radial-gradient(circle at 5% 95%, #137dc5 0.5px, transparent 0.5px),
                             radial-gradient(circle at 65% 35%, #bf1922 0.3px, transparent 0.3px),
                             radial-gradient(circle at 25% 65%, #007BFF 0.6px, transparent 0.6px),
                             radial-gradient(circle at 75% 45%, #137dc5 0.4px, transparent 0.4px)`,
              backgroundSize:
                "90px 90px, 110px 110px, 85px 85px, 70px 70px, 95px 95px, 60px 60px, 80px 80px, 75px 75px",
              backgroundPosition:
                "0 0, 45px 45px, 25px 65px, 15px 15px, 55px 35px, 35px 55px, 20px 40px, 40px 20px",
              animation: "polkaDots 25s linear infinite",
            }}
          />
        </div>

        <style jsx>{`
          @keyframes polkaDots {
            0% { transform: translateX(0) translateY(0); }
            25% { transform: translateX(-8px) translateY(-4px); }
            50% { transform: translateX(4px) translateY(-8px); }
            75% { transform: translateX(-4px) translateY(4px); }
            100% { transform: translateX(0) translateY(0); }
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Students Say 💬</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from students creating real impact!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-600">{t.college}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#3e91c3] via-[#59aac9] to-[#7fcadd] text-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
    <p className="text-xl mb-8 text-blue-50">Join thousands of students already creating positive impact across India!</p>
    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
      <Link
        to="/onboarding"
        className="bg-white text-[#3e91c3] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
      >
        Start Your Journey
      </Link>
      <Link
        to="/explore"
        className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-500 transition-all duration-300 transform hover:scale-105"
      >
        Explore NGOs
      </Link>
    </div>
  </div>
</section>

    </>
  );
};

export default Homepage;
