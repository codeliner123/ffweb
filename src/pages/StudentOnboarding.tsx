import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, ChevronLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const StudentOnboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    year: '',
    interests: [] as string[],
    causes: [] as string[],
    primaryIntent: '',
    availability: '',
    skills: [] as string[],
    experience: ''
  });

  const totalSteps = 5;

  const interests = [
    'Teaching', 'Healthcare', 'Technology', 'Environment', 'Arts & Culture',
    'Sports', 'Community Service', 'Research', 'Writing', 'Photography'
  ];

  const causes = [
    'Education', 'Environment', 'Health', 'Women Empowerment',
    'Rural Development', 'Animal Welfare', 'Poverty Alleviation',
    'Child Welfare', 'Senior Care', 'Disaster Relief'
  ];

  const skills = [
    'Teaching', 'Public Speaking', 'Writing', 'Design', 'Programming',
    'Photography', 'Video Editing', 'Social Media', 'Event Planning',
    'Fundraising', 'Research', 'Languages', 'Music', 'Art'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayToggle = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
        : [...(prev[field as keyof typeof prev] as string[]), value]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepProgress = () => {
    return (currentStep / totalSteps) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Welcome to Future Found! 
          </h1>
          <p className="text-lg text-gray-600">
            Let's set up your profile to find the perfect volunteering opportunities!
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm font-medium text-gray-600 mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(getStepProgress())}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${getStepProgress()}%` }}
            ></div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">👋</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell us about yourself!</h2>
                <p className="text-gray-600">Basic information to get started</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">College/University *</label>
                  <input
                    type="text"
                    value={formData.college}
                    onChange={(e) => handleInputChange('college', e.target.value)}
                    placeholder="e.g., Delhi University, IIT Bombay"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Year *</label>
                  <select
                    value={formData.year}
                    onChange={(e) => handleInputChange('year', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select your year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Interests */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🎯</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">What are your interests?</h2>
                <p className="text-gray-600">Select all that apply - this helps us match you better!</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => handleArrayToggle('interests', interest)}
                    className={`p-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${
                      formData.interests.includes(interest)
                        ? 'border-blue-500 bg-blue-50 text-blue-600'
                        : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Causes */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">❤️</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Which causes resonate with you?</h2>
                <p className="text-gray-600">Choose the social causes you're passionate about</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {causes.map((cause) => (
                  <button
                    key={cause}
                    onClick={() => handleArrayToggle('causes', cause)}
                    className={`p-4 rounded-xl border-2 text-left font-medium transition-all duration-200 ${
                      formData.causes.includes(cause)
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {cause}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Primary Intent */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🚀</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">How do you want to contribute?</h2>
                <p className="text-gray-600">Choose your primary way of making impact</p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => handleInputChange('primaryIntent', 'volunteer')}
                  className={`w-full p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                    formData.primaryIntent === 'volunteer'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">⏰</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Volunteer Time</h3>
                      <p className="text-gray-600">Contribute your time and skills to make a direct impact</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleInputChange('primaryIntent', 'donate')}
                  className={`w-full p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                    formData.primaryIntent === 'donate'
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-red-500 hover:bg-red-50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">💰</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Donate Funds</h3>
                      <p className="text-gray-600">Support causes financially and track your impact</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleInputChange('primaryIntent', 'both')}
                  className={`w-full p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                    formData.primaryIntent === 'both'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">🤝</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Both Time & Money</h3>
                      <p className="text-gray-600">Maximum impact through volunteering and donations</p>
                    </div>
                  </div>
                </button>
              </div>

              {formData.primaryIntent === 'volunteer' && (
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time Availability</label>
                  <select
                    value={formData.availability}
                    onChange={(e) => handleInputChange('availability', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select your availability</option>
                    <option value="weekends">Weekends Only</option>
                    <option value="evenings">Weekday Evenings</option>
                    <option value="flexible">Flexible Schedule</option>
                    <option value="few-hours">Few Hours per Week</option>
                    <option value="full-time">Full-time Commitment</option>
                  </select>
                </div>
              )}
            </div>
          )}

          {/* Step 5: Skills & Experience */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💪</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">What skills do you bring?</h2>
                <p className="text-gray-600">Help us understand your strengths</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Select your skills</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {skills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => handleArrayToggle('skills', skill)}
                      className={`p-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${
                        formData.skills.includes(skill)
                          ? 'border-blue-500 bg-blue-50 text-blue-600'
                          : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Previous Volunteer Experience (Optional)</label>
                <select
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select your experience level</option>
                  <option value="none">No previous experience</option>
                  <option value="some">Some volunteer experience</option>
                  <option value="experienced">Experienced volunteer</option>
                  <option value="leader">Led volunteer initiatives</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              currentStep === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ChevronLeftIcon className="h-5 w-5" />
            <span>Previous</span>
          </button>

          {currentStep < totalSteps ? (
            <button
              onClick={nextStep}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>Next Step</span>
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          ) : (
            <Link
              to="/impact"
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <CheckCircleIcon className="h-5 w-5" />
              <span>Complete Setup</span>
            </Link>
          )}
        </div>

        {/* Motivational Quote */}
        <div className="text-center mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
          <p className="text-lg font-medium text-gray-700 italic">
            "The best way to find yourself is to lose yourself in the service of others." - Mahatma Gandhi
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentOnboarding;