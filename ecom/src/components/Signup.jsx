import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Save user data
    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      loggedIn: true
    };

    localStorage.setItem('user', JSON.stringify(newUser));
    setSuccess(true);
    
    setTimeout(() => {
      navigate('/home');
    }, 2000);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 flex flex-col justify-center items-center px-4 py-20">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-orange-600 mb-3">Create Account</h1>
          <p className="text-gray-600 text-lg">Join our community and start shopping!</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-xl p-10">
          {success && (
            <div className="mb-6 bg-green-100 border-2 border-green-500 text-green-700 p-4 rounded-lg flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">Account created! Redirecting...</span>
            </div>
          )}

          {error && (
            <div className="mb-6 bg-red-100 border-2 border-red-500 text-red-700 p-4 rounded-lg flex items-center gap-2">
              <span className="text-2xl">✕</span>
              <span className="font-semibold">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-800 font-bold mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 text-gray-900 bg-white"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 font-bold mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 text-gray-900 bg-white"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-800 font-bold mb-2">📧 Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 text-gray-900 bg-white"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-800 font-bold mb-2">📱 Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 text-gray-900 bg-white"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-800 font-bold mb-2">🏠 Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 text-gray-900 bg-white"
                placeholder="123 Main Street"
              />
            </div>

            {/* Password Fields */}
            <div>
              <label className="block text-gray-800 font-bold mb-2">🔒 Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 text-gray-900 bg-white"
                placeholder="Min. 6 characters"
                required
              />
            </div>

            <div>
              <label className="block text-gray-800 font-bold mb-2">🔒 Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 text-gray-900 bg-white"
                placeholder="Confirm password"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-lg font-bold text-lg hover:from-orange-700 hover:to-pink-700 transition shadow-lg"
            >
              Create Account ✓
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 bg-gray-200 h-px"></div>
            <span className="text-gray-500 font-semibold">OR</span>
            <div className="flex-1 bg-gray-200 h-px"></div>
          </div>

          {/* Already have account */}
          <div className="text-center">
            <p className="text-gray-700 mb-4">Already have an account?</p>
            <Link to="/login" className="inline-block px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-lg font-bold hover:bg-orange-50 transition">
              Sign In →
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>By signing up, you agree to our <a href="#" className="text-orange-600 font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-orange-600 font-bold hover:underline">Privacy Policy</a></p>
        </div>
      </div>
    </div>
  )
}
