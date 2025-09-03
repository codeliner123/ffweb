import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {MagnifyingGlassIcon, TrophyIcon, FireIcon, HeartIcon, ClockIcon, CurrencyRupeeIcon, UserGroupIcon, CalendarIcon } from '@heroicons/react/24/outline';

const ImpactTracker: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const userStats = {
    hoursVolunteered: 45,
    moneyDonated: 2500,
    ngosSupported: 3,
    rank: 12,
    level: 'Impact Champion',
    streak: 8,
    badges: ['First Volunteer', 'Education Supporter', 'Monthly Donor', 'Team Player']
  };

  /* const leaderboard = [
    { rank: 1, name: 'Priya Sharma', college: 'Delhi University', hours: 120, donations: 8500, avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { rank: 2, name: 'Arjun Patel', college: 'IIT Bombay', hours: 98, donations: 7200, avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { rank: 3, name: 'Sneha Reddy', college: 'BITS Pilani', hours: 87, donations: 6800, avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { rank: 4, name: 'Rahul Kumar', college: 'JNU', hours: 76, donations: 5900, avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { rank: 5, name: 'Ananya Singh', college: 'St. Stephens', hours: 65, donations: 5200, avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100' }
  ];
 */
  const campusRankings = [
    { rank: 1, college: 'Delhi University', students: 245, hours: 3420, donations: 125000 },
    { rank: 2, college: 'IIT Bombay', students: 189, hours: 2890, donations: 98000 },
    { rank: 3, college: 'BITS Pilani', students: 156, hours: 2340, donations: 87000 },
    { rank: 4, college: 'JNU', students: 134, hours: 1980, donations: 76000 },
    { rank: 5, college: 'St. Stephens', students: 98, hours: 1560, donations: 65000 }
  ];

  const monthlyChamps = [
    { name: 'Kavya Menon', achievement: 'Most Hours Volunteered', value: '32 hours', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Rohit Gupta', achievement: 'Highest Donation', value: '₹3,500', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Meera Joshi', achievement: 'Most NGOs Supported', value: '5 NGOs', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100' }
  ];

  const recentActivities = [
    { action: 'Volunteered 4 hours', ngo: 'Teach India Foundation', date: '2 days ago', type: 'volunteer' },
    { action: 'Donated ₹500', ngo: 'Green Earth Initiative', date: '5 days ago', type: 'donation' },
    { action: 'Joined new NGO', ngo: 'Women Rise Collective', date: '1 week ago', type: 'join' },
    { action: 'Completed workshop', ngo: 'Digital Bridge Academy', date: '2 weeks ago', type: 'achievement' }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: TrophyIcon },
    // { id: 'leaderboard', name: 'Leaderboard', icon: StarIcon },
    { id: 'campus', name: 'Campus Rankings', icon: UserGroupIcon },
    { id: 'champions', name: 'Monthly Champs', icon: FireIcon }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 py-8 overflow-hidden">
      {/* Animated Background Paths */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg
          className="w-full h-full text-[#007BFF]"
          viewBox="0 0 696 316"
          fill="none"
        >
          <title>Background Paths</title>
          {Array.from({ length: 20 }, (_, i) => (
            <motion.path
              key={i}
              d={`M-${380 - i * 5} -${189 + i * 6}C-${380 - i * 5} -${189 + i * 6} -${312 - i * 5} ${216 - i * 6} ${152 - i * 5} ${343 - i * 6}C${616 - i * 5} ${470 - i * 6} ${684 - i * 5} ${875 - i * 6} ${684 - i * 5} ${875 - i * 6}`}
              stroke="currentColor"
              strokeWidth={0.5 + i * 0.03}
              strokeOpacity={0.1 + i * 0.02}
              initial={{ pathLength: 0.3, opacity: 0.4 }}
              animate={{
                pathLength: 1,
                opacity: [0.2, 0.4, 0.2],
                pathOffset: [0, 1, 0],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Impact Dashboard 📊
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track your contributions, compete with friends, and see the real difference you're making!
          </p>
        </div>

        {/* User Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <ClockIcon className="h-8 w-8 text-[#3e91c3] mx-auto mb-3" />
            <div className="text-3xl font-bold text-[#3e91c3] mb-1">{userStats.hoursVolunteered}</div>
            <div className="text-gray-600 font-medium">Hours Volunteered</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <CurrencyRupeeIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-600 mb-1">₹{userStats.moneyDonated}</div>
            <div className="text-gray-600 font-medium">Total Donated</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <HeartIcon className="h-8 w-8 text-red-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-red-600 mb-1">{userStats.ngosSupported}</div>
            <div className="text-gray-600 font-medium">NGOs Supported</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <TrophyIcon className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-yellow-600 mb-1">#{userStats.rank}</div>
            <div className="text-gray-600 font-medium">Your Rank</div>
          </div>
        </div>

        {/* Level & Streak */}
        <div className="bg-gradient-to-r  from-[#3e91c3] to-[#59aac9] rounded-2xl shadow-lg p-6 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">🏆 {userStats.level}</h3>
              <p className="text-blue-100">Keep up the amazing work!</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold">🔥</div>
                <div className="text-sm text-blue-100">Streak</div>
                <div className="text-xl font-bold">{userStats.streak} days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">🎖️</div>
                <div className="text-sm text-blue-100">Badges</div>
                <div className="text-xl font-bold">{userStats.badges.length}</div>
              </div>
            </div>
          </div>
        </div>

{/* Tabs */}
<div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
  <div className="border-b border-gray-200">
    <nav className="flex space-x-8 px-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
            activeTab === tab.id
              ? 'border-[#3e91c3] text-[#59aac9]'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          <tab.icon className="h-5 w-5" />
          <span>{tab.name}</span>
        </button>
      ))}
    </nav>
  </div>
</div>


          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Badges */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Your Badges 🏅</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {userStats.badges.map((badge, index) => (
                      <div key={index} className="bg-gradient-to-br  from-[#3e91c3] to-[#59aac9] rounded-xl p-4 text-center">
                        <div className="text-3xl mb-2">🏆</div>
                        <div className="font-semibold text-white text-sm">{badge}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activities */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activities 📝</h3>
                  <div className="space-y-3">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                        <div className={`w-3 h-3 rounded-full ${
                          activity.type === 'volunteer' ? 'bg-blue-500' :
                          activity.type === 'donation' ? 'bg-green-500' :
                          activity.type === 'join' ? 'bg-purple-500' : 'bg-yellow-500'
                        }`}></div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{activity.action}</div>
                          <div className="text-sm text-gray-600">{activity.ngo}</div>
                        </div>
                        <div className="text-sm text-gray-500">{activity.date}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          {/*   { Leaderboard Tab }
            {activeTab === 'leaderboard' && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Top Contributors 🌟</h3>
                  <p className="text-gray-600">See how you stack up against other amazing students!</p>
                </div>

                <div className="space-y-4">
                  {leaderboard.map((student, index) => (
                    <div key={index} className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:shadow-md ${
                      student.rank <= 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200' : 'bg-gray-50'
                    }`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                        student.rank === 1 ? 'bg-red-500' :
                        student.rank === 2 ? 'bg-blue-500' :
                        student.rank === 3 ? 'bg-blue-600' : 'bg-blue-700'
                      }`}>
                        {student.rank === 1 ? '🥇' : student.rank === 2 ? '🥈' : student.rank === 3 ? '🥉' : student.rank}
                      </div>
                      <img src={student.avatar} alt={student.name} className="w-12 h-12 rounded-full object-cover" />
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-600">{student.college}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-blue-600">{student.hours}h</div>
                        <div className="text-sm text-red-500">₹{student.donations}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )} */}

            {/* Campus Rankings Tab */}
            {activeTab === 'campus' && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Campus Rankings 🏫</h3>
                  <p className="text-gray-600">Which college is making the biggest impact?</p>
                </div>

                <div className="space-y-4">
                  {campusRankings.map((campus, index) => (
                    <div key={index} className={`p-6 rounded-xl transition-all duration-300 hover:shadow-md ${
                      campus.rank <= 3 ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200' : 'bg-gray-50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                            campus.rank === 1 ? 'bg-red-500' :
                            campus.rank === 2 ? 'bg-blue-500' :
                            campus.rank === 3 ? 'bg-blue-600' : 'bg-blue-700'
                          }`}>
                            {campus.rank === 1 ? '🥇' : campus.rank === 2 ? '🥈' : campus.rank === 3 ? '🥉' : campus.rank}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 text-lg">{campus.college}</div>
                            <div className="text-sm text-gray-600">{campus.students} active students</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-blue-600">{campus.hours} hours</div>
                          <div className="text-sm text-red-500">₹{campus.donations.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Monthly Champions Tab */}
            {activeTab === 'champions' && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">This Month's Champions 🏆</h3>
                  <p className="text-gray-600">Celebrating our top performers this month!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {monthlyChamps.map((champ, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 text-center">
                      <img src={champ.avatar} alt={champ.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4" />
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{champ.name}</h4>
                      <div className="text-sm text-gray-600 mb-2">{champ.achievement}</div>
                      <div className="text-2xl font-bold text-blue-600">{champ.value}</div>
                      <div className="text-4xl mt-3">🎉</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r  from-[#3e91c3] to-[#59aac9] rounded-2xl shadow-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Climb Higher? 🚀</h3>
          <p className="text-lg mb-6 text-green-100">
            Find more opportunities to volunteer and increase your impact!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white  text-[#3e91c3] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Find More NGOs
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-colors">
              Invite Friends
            </button>
          </div>
        </div>
      </div>

  );
};

export default ImpactTracker;