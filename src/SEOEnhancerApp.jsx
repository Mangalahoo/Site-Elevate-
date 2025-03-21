import React, { useState } from 'react';

const SEOEnhancerApp = () => {
  const [url, setUrl] = useState('');
  const [audience, setAudience] = useState('');
  const [objective, setObjective] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isValidUrl, setIsValidUrl] = useState(true);

  const validateUrl = (input) => {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' +                // Protocol
      '((([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,})|' + // Domain
      'localhost|' +                       // Localhost
      '\\d{1,3}(\\.\\d{1,3}){3})' +        // IP (v4) address
      '(\\:\\d+)?(\\/[-a-zA-Z0-9@:%._\\+~#=]*)*' + // Port and path
      '(\\?[;&a-zA-Z0-9%_.~+=-]*)?' +      // Query string
      '(\\#[-a-zA-Z0-9_]*)?$'
    );
    return pattern.test(input);
  };

  const handleGenerate = () => {
    if (validateUrl(url)) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsGenerated(true);
        setIsAnimating(false);
      }, 800);
    } else {
      setIsValidUrl(false);
    }
  };

  const handleUrlChange = (e) => {
    const input = e.target.value;
    setUrl(input);
    setIsValidUrl(validateUrl(input));
  };

  const handleEnhanceSEO = () => {
    document.getElementById('mainSection').scrollIntoView({ behavior: 'smooth' });
  };

  const previousContent = `<div class="company-description">
  <h1>Acme Tech Solutions</h1>
  <p>We provide tech solutions for companies. Our services include web development, 
  app development, and software consulting. Contact us to learn more.</p>
</div>`;

  const enhancedContent = `<div class="company-description">
  <h1>Innovative Tech Solutions by Acme | Custom Software Development</h1>
  <p>Transform your business with <strong>Acme Tech Solutions</strong> - industry leaders 
  in <em>custom web development</em>, <em>mobile app creation</em>, and <em>strategic 
  software consulting</em>. Our expert team delivers scalable, high-performance technology 
  solutions tailored to your unique business needs.</p>
  <p>Ready to accelerate your digital transformation? <a href="#contact">Contact our specialists today</a> 
  for a free consultation and discover how our tech expertise can drive your business growth.</p>
</div>`;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
    
      <header className="bg-white shadow-md py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">Site Elevate</div>
            <div className="text-sm text-gray-500">Enhance website content for improved SEO, engagement and conversions only using URL</div>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">About</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Contact</a>
            </nav>
            <button 
              onClick={handleEnhanceSEO}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            >
              Enhance Magic
            </button>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <section id="mainSection" className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Enhance Your Website using AI</h2>
          
          <div className="space-y-6">   
            <div>
              <label htmlFor="url" className="block text-gray-700 mb-2">Website URL</label>
              <input
                id="url"
                type="text"
                value={url}
                onChange={handleUrlChange}
                placeholder="https://example.com"
                className={`w-full p-3 border rounded-md focus:outline-none transition-all 
                  ${isValidUrl ? 'border-gray-300 focus:ring-blue-500' : 'border-red-500 focus:ring-red-500'}`}
              />
              {!isValidUrl && (
                <p className="text-red-500 text-sm mt-2">Please enter a valid website URL.</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="audience" className="block text-gray-700 mb-2">Target Audience</label>
                <select
                  id="audience"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="">Select audience</option>
                  <option value="tech">Tech</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="business">Business</option>
                  <option value="education">Education</option>
                  <option value="healthcare">Healthcare</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="objective" className="block text-gray-700 mb-2">Objective</label>
                <select
                  id="objective"
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="">Select objective</option>
                  <option value="traffic">More Traffic</option>
                  <option value="conversions">Better Conversions</option>
                  <option value="readability">Improved Readability</option>
                  <option value="engagement">Higher Engagement</option>
                </select>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={handleGenerate}
                disabled={!url || !isValidUrl}
                className={`bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg 
                ${!url || !isValidUrl ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Generate Enhanced Content
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-auto bg-gray-800 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2025 Website Enhancer. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SEOEnhancerApp;
