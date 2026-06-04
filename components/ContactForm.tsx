"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "CCTV Installation",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message with form details
    const text = `*New Inquiry from Website!*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/918408829992?text=${text}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        service: "CCTV Installation",
        message: "",
      });
    }, 5000);
  };

  return (
    <section className="py-20 bg-surface-container-low border-t border-outline-variant" id="support">
      <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Quote Form */}
          <div className="bg-surface-container-lowest p-8 border border-outline-variant rounded shadow-xs flex flex-col h-full">
            <h2 className="font-headline-md text-primary mb-6">Request a Quote</h2>
            
            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded p-6 text-center space-y-2 flex-grow flex flex-col justify-center items-center">
                <span className="material-symbols-outlined text-4xl text-emerald-600 block">check_circle</span>
                <h3 className="font-headline-sm font-semibold">Thank You!</h3>
                <p className="font-body-sm">Your inquiry has been successfully received. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col flex-grow gap-4">
                <div>
                  <label htmlFor="name" className="block font-label-md text-primary mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded p-2 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none font-body-sm transition-all"
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block font-label-md text-primary mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded p-2 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none font-body-sm transition-all"
                      type="tel"
                      placeholder="e.g. +91 84088 29992"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block font-label-md text-primary mb-1">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded p-2 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none font-body-sm transition-all"
                    >
                      <option value="CCTV Installation">CCTV Installation</option>
                      <option value="Solar Systems">Solar Systems</option>
                      <option value="Power Backup">Power Backup</option>
                      <option value="Biometric Access">Biometric Access</option>
                      <option value="EPBX Systems">EPBX Systems</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex flex-col flex-grow">
                  <label htmlFor="message" className="block font-label-md text-primary mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full flex-grow min-h-[120px] resize-none bg-surface-container-lowest border border-outline-variant rounded p-2 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none font-body-sm transition-all"
                    placeholder="Describe your requirements..."
                  />
                </div>
                
                <button
                  className="w-full mt-auto bg-primary text-on-primary py-3 rounded font-label-md hover:bg-opacity-90 transition-all cursor-pointer text-center"
                  type="submit"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Maps */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-headline-md text-primary mb-6">Contact Information</h2>
              <ul className="space-y-4 font-body-md text-secondary">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5">location_on</span>
                  <span>P268+8FQ SHIV ENTERPRISES, Barajotirling Road, near Rao Residency, Ranpise Nagar, Akola, Maharashtra 444005</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <span>8408829992 / 7020378588</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <span>shiv8408829992@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">receipt_long</span>
                  <span>GST: 27AAHPE4229N1ZI</span>
                </li>
              </ul>
            </div>
            
            {/* Interactive Embedded Google Map */}
            <div className="mt-8 h-64 bg-surface-container-high rounded border border-outline-variant overflow-hidden relative shadow-inner">
              <iframe
                title="Shiv Enterprises Office Location"
                src="https://maps.google.com/maps?q=P268%2B8FQ%20SHIV%20ENTERPRISES%2C%20Barajotirling%20Road%2C%20near%20Rao%20Residency%2C%20Ranpise%20Nagar%2C%20Akola%2C%20Maharashtra%20444005&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
