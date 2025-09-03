/* import React, { useState } from 'react';
import { HeartIcon, AcademicCapIcon, MapPinIcon, CalendarIcon, StarIcon } from '@heroicons/react/24/outline';

const StudentStories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  const categories = [];

  const stories = [
    {
      
      name: "Jessica",
      college: "VIT University",
      year: "3rd Year",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      ngo: "",
      cause: "founder",
      duration: "",
   
      quote: "Starting Future Found completely changed my perspective. It’s been the most rewarding experience of my college life! Seeing people’s lives change because of the impact we’re making is priceless.",
      story: " I have always had a passion to create a meaningful impact in the world and In my second year, I reached a point where Computer Science no longer felt like my calling. When Jey and I came up with this idea we went all in to establish Future Found. Every time I witness even the smallest positive difference in someone’s life because of what I’ve done, it reminds me why I chose this path and keeps me motivated to keep working hard.",
      impact: "Taught 50+ children, improved literacy rates in 2 villages",
      date: "March 2024"
    },
    {
 
      name: "Jey",
      college: "VIT University",
      year: "4th Year",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
      ngo: "",
      cause: "Founder",
      duration: "",
      hoursContributed: 95,
      quote: "From coding workshops for underprivileged youth to organizing tree plantation drives, this platform made it easy to contribute meaningfully to environmental causes.",
      story: "For me, it’s never just been about building tech it’s about building something that leaves people better off than they were before. Working with NGOs has shown me how even small initiatives can spark real change, whether it’s helping a community access resources or creating opportunities they didn’t have before. Every time I see someone’s situation improve because of something we started, it reminds me why I’m here. It’s that mix of solving real problems and empowering people that keeps me committed, no matter how challenging the journey gets",
      impact: "Planted 500+ trees, trained 30 students in coding",
      date: "February 2024"
    },
    {
      id: 3,
      name: "Sneha Reddy",
      college: "BITS Pilani",
      year: "2nd Year",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      ngo: "Women Rise Collective",
      cause: "women empowerment",
      duration: "4 months",
      hoursContributed: 80,
      quote: "The impact tracking keeps me motivated! Seeing real numbers of lives touched makes every hour of volunteering count. I've helped 25 women start their own businesses.",
      story: "I joined to support women entrepreneurs in rural areas. Through skill development workshops and mentoring sessions, I've seen women transform from hesitant participants to confident business owners. Their success stories inspire me daily.",
      impact: "Mentored 25 women entrepreneurs, conducted 15 workshops",
      date: "January 2024"
    },
    {
      id: 4,
      name: "Rahul Kumar",
      college: "JNU",
      year: "1st Year",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
      ngo: "Health For All Mission",
      cause: "health",
      duration: "3 months",
      hoursContributed: 60,
      quote: "Even as a first-year student, I could make a real difference. The health awareness campaigns we organized reached over 1000 families in rural areas.",
      story: "I was nervous about volunteering as a fresher, but the NGO welcomed me warmly. I helped organize health camps, distributed medicines, and educated families about hygiene. It's incredible how small actions can save lives.",
      impact: "Reached 1000+ families, organized 8 health camps",
      date: "December 2023"
    },
    {
      id: 5,
      name: "Ananya Singh",
      college: "St. Stephens College",
      year: "3rd Year",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200",
      ngo: "Rural Connect Foundation",
      cause: "rural development",
      duration: "5 months",
      hoursContributed: 110,
      quote: "Working with rural communities taught me more than any textbook ever could. I've helped establish 3 community centers and seen villages transform.",
      story: "My economics background helped me understand rural challenges better. I worked on microfinance projects, helped set up community centers, and taught financial literacy. Seeing villages become self-sufficient is incredibly fulfilling.",
      impact: "Established 3 community centers, trained 100+ people in financial literacy",
      date: "November 2023"
    },
    {
      id: 6,
      name: "Kavya Menon",
      college: "Christ University",
      year: "4th Year",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      ngo: "Digital Bridge Academy",
      cause: "education",
      duration: "7 months",
      hoursContributed: 140,
      quote: "Teaching digital skills to rural teachers was challenging but incredibly rewarding. We've digitized education in 10 schools and the results are amazing!",
      story: "I combined my passion for technology and education by training rural teachers in digital tools. Starting with basic computer skills, we gradually introduced online teaching methods. The transformation in classroom engagement has been remarkable.",
      impact: "Trained 50+ teachers, digitized 10 schools",
      date: "October 2023"
    }
  ];
 
  const filteredStories = selectedCategory === 'all' 
    ? stories 
    : stories.filter(story => story.cause === selectedCategory);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    year: '',
    ngo: '',
    cause: '',
    story: '',
    impact: '',
    quote: '' 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Story submitted:', formData);
    setShowSubmissionForm(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      college: '',
      year: '',
      ngo: '',
      cause: '',
      story: '',
      impact: '',
      quote: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header 
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student Success Stories 🌟
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from amazing students who are creating positive change across India. 
            Get inspired and see how you can make a difference too!
          </p>
        </div>

        {/* Category Filter 
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Grid
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredStories.map((story) => (
            <div key={story.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Story Header
              <div className="p-6 pb-4">
                <div className="flex items-start space-x-4 mb-4">
                  <img 
                    src={story.avatar} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{story.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <AcademicCapIcon className="h-4 w-4 mr-1" />
                      {story.college} • {story.year}
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className={`inline-block px-3 py-1 rounded-full text-white font-semibold ${
                        story.cause === 'education' ? 'bg-blue-500' :
                        story.cause === 'environment' ? 'bg-blue-600' :
                        story.cause === 'health' ? 'bg-red-500' :
                        story.cause === 'women empowerment' ? 'bg-blue-700' :
                        'bg-red-600'
                      }`}>
                        {story.cause.charAt(0).toUpperCase() + story.cause.slice(1)}
                      </span>
                      <div className="flex items-center text-gray-500">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {story.duration}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote 
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 mb-4">
                  <p className="text-gray-700 italic leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>

                {/* Story
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">My Journey 📖</h4>
                  <p className="text-gray-700 leading-relaxed">{story.story}</p>
                </div>

                {/* Impact & Stats 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-sm text-blue-600 font-medium mb-1">Impact Created</div>
                    <div className="text-blue-800 font-semibold">{story.impact}</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-sm text-blue-600 font-medium mb-1">Hours Contributed</div>
                    <div className="text-blue-800 font-semibold">{story.hoursContributed} hours</div>
                  </div>
                </div>

                {/* NGO & Date 
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <HeartIcon className="h-4 w-4 mr-1" />
                    Volunteered with {story.ngo}
                  </div>
                  <div>{story.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share Your Story Section 
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl shadow-lg p-8 text-center text-white mb-8">
          <div className="text-6xl mb-4">✨</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have an Amazing Story to Share?
          </h2>
          <p className="text-lg mb-6 text-blue-100 max-w-2xl mx-auto">
            Inspire other students by sharing your volunteering journey! Your story could motivate someone to start their own impact journey.
          </p>
          <button
            onClick={() => setShowSubmissionForm(true)}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Share Your Story
          </button>
        </div>

        {/* Story Submission Form Modal 
        {showSubmissionForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Share Your Story 📝</h3>
                  <button
                    onClick={() => setShowSubmissionForm(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">College *</label>
                      <input
                        type="text"
                        required
                        value={formData.college}
                        onChange={(e) => setFormData({...formData, college: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your college name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Year *</label>
                      <select
                        required
                        value={formData.year}
                        onChange={(e) => setFormData({...formData, year: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="Graduate">Graduate</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">NGO Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.ngo}
                        onChange={(e) => setFormData({...formData, ngo: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="NGO you volunteered with"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cause *</label>
                      <select
                        required
                        value={formData.cause}
                        onChange={(e) => setFormData({...formData, cause: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select cause</option>
                        <option value="education">Education</option>
                        <option value="environment">Environment</option>
                        <option value="health">Health</option>
                        <option value="women empowerment">Women Empowerment</option>
                        <option value="rural development">Rural Development</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Story *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.story}
                      onChange={(e) => setFormData({...formData, story: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your volunteering journey, challenges, and what you learned..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Impact Created *</label>
                    <input
                      type="text"
                      required
                      value={formData.impact}
                      onChange={(e) => setFormData({...formData, impact: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., Taught 50+ children, planted 100 trees"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Inspiring Quote *</label>
                    <input
                      type="text"
                      required
                      value={formData.quote}
                      onChange={(e) => setFormData({...formData, quote: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="A quote that summarizes your experience"
                    />
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowSubmissionForm(false)}
                      className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Submit Story
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action 
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Create Your Own Story? 🚀
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of students who are already making a difference. Find your perfect NGO match and start your impact journey today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Find NGOs
            </button>
            <button className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Start Volunteering
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentStories; */
import React, { useState } from 'react';
import { HeartIcon, AcademicCapIcon, MapPinIcon, CalendarIcon, StarIcon } from '@heroicons/react/24/outline';

const StudentStories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  // Keeping categories structure intact (empty) so the filter UI remains stable if re-enabled later.
  const categories: string[] = [];

  // ====== ABOUT US: FOUNDERS ONLY ======
  const stories = [
    {
      id: 1,
      name: "Jessica",
      college: "VIT University",
      year: "3rd Year",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      ngo: "Future Found",
      cause: "founder",
      duration: "",
      quote:
        "Starting Future Found completely changed my perspective. It’s been the most rewarding experience of my college life! Seeing people’s lives change because of the impact we’re making is priceless.",
      story:
        " I have always had a passion to create a meaningful impact in the world and In my second year, I reached a point where Computer Science no longer felt like my calling. When Jey and I came up with this idea we went all in to establish Future Found. Every time I witness even the smallest positive difference in someone’s life because of what I’ve done, it reminds me why I chose this path and keeps me motivated to keep working hard.",
      // impact/date intentionally retained in data but NOT rendered
      impact: "Co-founded Future Found; driving student-led impact initiatives",
      date: "March 2024",
    },
    {
      id: 2,
      name: "Jey",
      college: "VIT University",
      year: "4th Year",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
      ngo: "Future Found",
      cause: "founder",
      duration: "",
      hoursContributed: 95, // not rendered
      quote:
        "From teaching workshops for underprivileged youth to organizing tree plantation drives, this platform makes it easy to contribute meaningfully to causes that matter.",
      story:
        "For me, it’s never just been about building tech it’s about building something that leaves people better off than they were before. Working with NGOs has shown me how even small initiatives can spark real change, whether it’s helping a community access resources or creating opportunities they didn’t have before. Every time I see someone’s situation improve because of something we started, it reminds me why I’m here. It’s that mix of solving real problems and empowering people that keeps me committed, no matter how challenging the journey gets.",
      impact: "Co-founded Future Found; led tech & community programs",
      date: "February 2024",
    },

    // ====== (OPTIONAL) TEAM PROFILES — COMMENTED OUT TEMPLATES ======
    /*
    {
      id: 3,
      name: "Your Teammate 1",
      college: "College / University",
      year: "Year",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      ngo: "Future Found",
      cause: "core team",
      duration: "",
      hoursContributed: 0,
      quote: "Short quote about their role and motivation.",
      story: "A short paragraph describing their journey and contributions.",
      impact: "Summarize their core outcomes / contributions",
      date: "Month Year",
    },
    {
      id: 4,
      name: "Your Teammate 2",
      college: "College / University",
      year: "Year",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
      ngo: "Future Found",
      cause: "core team",
      duration: "",
      // hoursContributed: 0, // optional
      quote: "Short quote about their role and motivation.",
      story: "A short paragraph describing their journey and contributions.",
      impact: "Summarize their core outcomes / contributions",
      date: "Month Year",
    },
    {
      id: 5,
      name: "Your Teammate 3",
      college: "College / University",
      year: "Year",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200",
      ngo: "Future Found",
      cause: "core team",
      duration: "",
      hoursContributed: 0,
      quote: "Short quote about their role and motivation.",
      story: "A short paragraph describing their journey and contributions.",
      impact: "Summarize their core outcomes / contributions",
      date: "Month Year",
    },
    */
  ];

  const filteredStories = selectedCategory === 'all'
    ? stories
    : stories.filter(story => story.cause === selectedCategory);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    year: '',
    ngo: '',
    cause: '',
    story: '',
    impact: '',
    quote: '' 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Story submitted:', formData);
    setShowSubmissionForm(false);
    setFormData({
      name: '',
      email: '',
      college: '',
      year: '',
      ngo: '',
      cause: '',
      story: '',
      impact: '',
      quote: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (repurposed as About Us) */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Us — Founders of Future Found 🌟
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We’re building a student-powered movement for social impact. Meet our founders and the story behind Future Found.
          </p>
        </div>

        {/* Category Filter REMOVED */}

        {/* Stories Grid (founders’ cards only) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredStories.map((story) => (
            <div key={story.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Card Body */}
              <div className="p-6 pb-4">
                <div className="flex items-start space-x-4 mb-4">
                  <img 
                    src={story.avatar} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{story.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <AcademicCapIcon className="h-4 w-4 mr-1" />
                      {story.college} • {story.year}
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className={`inline-block px-3 py-1 rounded-full text-white font-semibold ${
                        story.cause === 'education' ? 'bg-blue-500' :
                        story.cause === 'environment' ? 'bg-blue-600' :
                        story.cause === 'health' ? 'bg-red-500' :
                        story.cause === 'women empowerment' ? 'bg-blue-700' :
                        'bg-red-600'
                      }`}>
                        {story.cause.charAt(0).toUpperCase() + story.cause.slice(1)}
                      </span>
                      <div className="flex items-center text-gray-500">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {story.duration || '—'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 mb-4">
                  <p className="text-gray-700 italic leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>

                {/* Story */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Our Journey 📖</h4>
                  <p className="text-gray-700 leading-relaxed">{story.story}</p>
                </div>

                {/* Footer REMOVED (Volunteered with Future Found & Date) */}
              </div>
            </div>
          ))}
        </div>

        {/* Share Your Story Section (UNCHANGED) */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl shadow-lg p-8 text-center text-white mb-8">
          <div className="text-6xl mb-4">✨</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have an Amazing Story to Share?
          </h2>
          <p className="text-lg mb-6 text-blue-100 max-w-2xl mx-auto">
            Inspire other students by sharing your volunteering journey! Your story could motivate someone to start their own impact journey.
          </p>
          <button
            onClick={() => setShowSubmissionForm(true)}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Share Your Story
          </button>
        </div>

        {/* Story Submission Form Modal (UNCHANGED) */}
        {showSubmissionForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Share Your Story 📝</h3>
                  <button
                    onClick={() => setShowSubmissionForm(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">College *</label>
                      <input
                        type="text"
                        required
                        value={formData.college}
                        onChange={(e) => setFormData({...formData, college: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your college name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Year *</label>
                      <select
                        required
                        value={formData.year}
                        onChange={(e) => setFormData({...formData, year: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="Graduate">Graduate</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">NGO Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.ngo}
                        onChange={(e) => setFormData({...formData, ngo: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="NGO you volunteered with"
                      />
                    </div>
                    <div>
                      <label className="block text sm font-medium text-gray-700 mb-2">Cause *</label>
                      <select
                        required
                        value={formData.cause}
                        onChange={(e) => setFormData({...formData, cause: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select cause</option>
                        <option value="education">Education</option>
                        <option value="environment">Environment</option>
                        <option value="health">Health</option>
                        <option value="women empowerment">Women Empowerment</option>
                        <option value="rural development">Rural Development</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Story *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.story}
                      onChange={(e) => setFormData({...formData, story: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your volunteering journey, challenges, and what you learned..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Impact Created *</label>
                    <input
                      type="text"
                      required
                      value={formData.impact}
                      onChange={(e) => setFormData({...formData, impact: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., Taught 50+ children, planted 100 trees"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Inspiring Quote *</label>
                    <input
                      type="text"
                      required
                      value={formData.quote}
                      onChange={(e) => setFormData({...formData, quote: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus-border-blue-500"
                      placeholder="A quote that summarizes your experience"
                    />
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowSubmissionForm(false)}
                      className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Submit Story
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action (UNCHANGED) */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Create Your Own Story? 🚀
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of students who are already making a difference. Find your perfect NGO match and start your impact journey today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Find NGOs
            </button>
            <button className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Start Volunteering
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentStories;
