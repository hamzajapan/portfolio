import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mgveznyv");

  if (state.succeeded) {
    return (
      <section id="contact" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-scale-in">
            <h2 className="text-4xl font-bold text-emerald-400 mb-4">Thank you!</h2>
            <p className="text-gray-400 mb-8">
              Your message has been sent successfully. I'll get back to you soon!
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-emerald-400 text-black px-8 py-3 rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-105 transform"
            >
              Send another message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold text-emerald-400 mb-4">Let's work together</h2>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full bg-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 hover:bg-gray-800"
                    required
                  />
                  <ValidationError prefix="First Name" field="firstName" errors={state.errors} className="text-red-400 mt-1 text-sm" />
                </div>
                <div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full bg-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 hover:bg-gray-800"
                    required
                  />
                  <ValidationError prefix="Last Name" field="lastName" errors={state.errors} className="text-red-400 mt-1 text-sm" />
                </div>
              </div>
              
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 hover:bg-gray-800"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 mt-1 text-sm" />
              </div>
              
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full bg-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 hover:bg-gray-800"
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-400 mt-1 text-sm" />
              </div>
              
              <div>
                <select 
                  id="service"
                  name="service"
                  className="w-full bg-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 hover:bg-gray-800"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="web">Web Development</option>
                  <option value="ui">UI/UX Design</option>
                  <option value="logo">Logo Design</option>
                  <option value="seo">SEO</option>
                </select>
                <ValidationError prefix="Service" field="service" errors={state.errors} className="text-red-400 mt-1 text-sm" />
              </div>
              
              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  className="w-full bg-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 hover:bg-gray-800"
                  required
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 mt-1 text-sm" />
              </div>
              
              <button 
                type="submit" 
                disabled={state.submitting}
                className="bg-emerald-400 text-black px-8 py-3 rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div className="space-y-8 animate-slide-up animate-delay-200">
            <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
              <div className="p-4 bg-gray-900 rounded-lg">
                <Phone className="text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-400">(+40) 321 654 876</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
              <div className="p-4 bg-gray-900 rounded-lg">
                <Mail className="text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-400">youremail@email.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
              <div className="p-4 bg-gray-900 rounded-lg">
                <MapPin className="text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Address</h3>
                <p className="text-gray-400">Code Corner, Tech Town 13579</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}