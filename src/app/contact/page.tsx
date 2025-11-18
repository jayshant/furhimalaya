'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle';
import ContactForm from '../../components/ContactForm';
import Image from 'next/image';
import { useSetting } from '@/hooks/useSiteSettings';

const Contact = () => {
  // Dynamic content from settings
  const companyAddress = useSetting('company_address', 'Birta Chowk, Rautahat, Madhesh Province');
  const companyPhone = useSetting('company_phone', '+977 9805996059 / +977 9861053405');
  const companyEmail = useSetting('company_email', 'info@forevershine.com.np');

  const officeLocations = [
    {
      name: 'Main Office',
      address: companyAddress,
      phone: companyPhone,
      email: companyEmail,
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1057.0732401966675!2d85.32028105790509!3d26.980943907977156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU4JzUyLjUiTiA4NcKwMTknMTYuMCJF!5e0!3m2!1sen!2snp!4v1762571938939!5m2!1sen!2snp',
    },
    {
      name: 'Branch Office - Dhapakhel, Lalitpur',
      address: 'Dhapakhel, Lalitpur',
      phone: companyPhone,
      email: companyEmail,
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27471.96696266653!2d85.30992048616581!3d27.63629554765848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb176b47f72e53%3A0x5075fb8e3638c5d7!2sDhapakhel%2C%20Lalitpur%2044700!5e0!3m2!1sen!2snp!4v1762572006088!5m2!1sen!2snp',
    },
    {
      name: 'Branch Office - Janakpur',
      address: 'Janakpur - Thapa Chowk',
      phone: companyPhone,
      email: companyEmail,
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.074845454863!2d85.92108147488914!3d26.741987567407577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec3fcd1354c4b7%3A0x17b0634d69fa1204!2sJanakpurdham%20-9%20Thapa%20Chowk!5e0!3m2!1sen!2snp!4v1762572074562!5m2!1sen!2snp',
    },
    {
      name: 'Branch Office - Birgunj',
      address: 'Birgunj Ghanta Ghar',
      phone: companyPhone,
      email: companyEmail,
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.4822580808886!2d84.87622537489858!3d27.01492305569165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39935440af3b59e3%3A0x5aa0411733213e6a!2sBirgunj%20Ghanta%20Ghar!5e0!3m2!1sen!2snp!4v1762572119506!5m2!1sen!2snp',
    },
    {
      name: 'Branch Office - Bishnupur Chowk, Siraha',
      address: 'Bishnupur Rural Municipality-3 Siraha Rajokhair',
      phone: companyPhone,
      email: companyEmail,
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.893318103961!2d86.23803317488928!3d26.747780267160078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec1f000fbce5b7%3A0xc767f507db369f58!2sBishnupur%20Rural%20Municipality-3%20Siraha%20Rajokhair!5e0!3m2!1sen!2snp!4v1762572261680!5m2!1sen!2snp',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-blue-700">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover"
            width={2000}
            height={1333}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Contact Us</h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8">
              Get in touch with our team to discuss your project requirements or inquire about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-700 mb-4 sm:mb-6">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Our Location</h3>
              <p className="text-sm sm:text-base text-gray-600">{companyAddress}</p>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-700 mb-4 sm:mb-6">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Phone & Email</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-2 break-all">Phone: {companyPhone}</p>
              <p className="text-sm sm:text-base text-gray-600 break-all">Email: {companyEmail}</p>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-md sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-700 mb-4 sm:mb-6">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Working Hours</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-sm sm:text-base text-gray-600 mb-2">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-sm sm:text-base text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <SectionTitle
                title="Get In Touch"
                subtitle="Send us a message and we&#39;ll get back to you as soon as possible"
              />
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Whether you have a question about our services, need a quote for your project, or want to discuss a potential collaboration, our team is here to help. Fill out the form and we&#39;ll respond promptly.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <MessageSquare className="text-blue-700 h-4 w-4 sm:h-5 sm:w-5 mt-1 mr-2 sm:mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">General Inquiries</h4>
                    <p className="text-xs sm:text-sm text-gray-600">For general questions about our company or services</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="text-blue-700 h-4 w-4 sm:h-5 sm:w-5 mt-1 mr-2 sm:mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Project Quotes</h4>
                    <p className="text-xs sm:text-sm text-gray-600">For detailed information about pricing and timelines</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="text-blue-700 h-4 w-4 sm:h-5 sm:w-5 mt-1 mr-2 sm:mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Technical Support</h4>
                    <p className="text-xs sm:text-sm text-gray-600">For assistance with ongoing projects or services</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Our Offices"
            subtitle="Visit us at one of our convenient locations"
            center={true}
          />

          {/* Main Office - Featured */}
          <div className="mt-8 sm:mt-10 md:mt-12 mb-8 sm:mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-2xl overflow-hidden border-2 border-blue-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="h-64 sm:h-80 lg:h-96 w-full">
                  <iframe
                    src={officeLocations[0].mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title={`Map of ${officeLocations[0].name}`}
                  ></iframe>
                </div>
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="inline-block mb-3 sm:mb-4">
                    <span className="bg-blue-700 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full">
                      Main Office
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
                    {officeLocations[0].name}
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start">
                      <MapPin className="text-blue-700 h-5 w-5 sm:h-6 sm:w-6 mt-1 mr-3 sm:mr-4 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700 font-medium">{officeLocations[0].address}</span>
                    </div>
                    <div className="flex items-start">
                      <Phone className="text-blue-700 h-5 w-5 sm:h-6 sm:w-6 mt-1 mr-3 sm:mr-4 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700 break-all">{officeLocations[0].phone}</span>
                    </div>
                    <div className="flex items-start">
                      <Mail className="text-blue-700 h-5 w-5 sm:h-6 sm:w-6 mt-1 mr-3 sm:mr-4 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700 break-all">{officeLocations[0].email}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="text-blue-700 h-5 w-5 sm:h-6 sm:w-6 mt-1 mr-3 sm:mr-4 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{officeLocations[0].hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Branch Offices */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-2">Branch Offices</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center">Serving you across multiple locations</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
            {officeLocations.slice(1).map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-40 sm:h-48 w-full">
                  <iframe
                    src={office.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title={`Map of ${office.name}`}
                  ></iframe>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">{office.name}</h3>
                  <div className="space-y-2 sm:space-y-2.5">
                    <div className="flex items-start">
                      <MapPin className="text-blue-700 h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600 leading-snug">{office.address}</span>
                    </div>
                    <div className="flex items-start">
                      <Phone className="text-blue-700 h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600 break-all leading-snug">{office.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <Mail className="text-blue-700 h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600 break-all leading-snug">{office.email}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="text-blue-700 h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600 leading-snug">{office.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
