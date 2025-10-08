import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_501";      
    const templateID = "template_501";     
    const userID = "qh_lF64fPIXy8N3VN";             

    // Prepare data for email template
    const templateParams = {
      name: formData.fullname,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      time: new Date().toLocaleString()       // Current date/time string
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setLoading(false);
        setResult({ success: true, message: "Message sent successfully!" });
        setFormData({ fullname: "", email: "", phone: "", message: "" });
      }, (error) => {
        setLoading(false);
        setResult({ success: false, message: "Failed to send message, please try again." });
        console.error(error.text);
      });
  };

  return (
    <section className="py-16 bg-white dark:text-gray-900">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Contact Details */}
        <div className="space-y-6">
          <h2 className="text-green-500 text-lg font-semibold">Contact</h2>
          <h1 className="text-4xl font-bold leading-snug">
            Let’s Discuss Your <span className="text-green-500">Project</span>
          </h1>
          <p className="text-gray-600">
            Let’s make something new, different and more meaningful or make things more visual or conceptual.
          </p>
          <div className="space-y-5">
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 text-white p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l3.5 7-1.5 2C6.5 14.5 9 17 11 18.5c2 1.5 4.5-1.5 5-2l2-1.5 7 3.5v2c0 1.105-.895 2-2 2h-3c-6.627 0-12-5.373-12-12V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Call me</h4>
                <p className="text-gray-700">+91 **********</p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 text-white p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.003 5.884L12 12l9.997-6.116A2 2 0 0020 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M22 8.118l-10 6-10-6V18a2 2 0 002 2h16a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Email me</h4>
                <p className="text-gray-700">harshavardhanvesalapu1@gmail.com</p>
              </div>
            </div>
            {/* Address */}
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 text-white p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Address</h4>
                <p className="text-gray-700">Gajuwaka, Vishakapatnam, Andhra Pradesh, 530049</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="fullname" 
              placeholder="Full name" 
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" 
              value={formData.fullname} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your email" 
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="phone" 
              placeholder="Phone number" 
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div>
          <textarea 
            rows="4" 
            name="message" 
            placeholder="Message" 
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          ></textarea>
          <button 
            type="submit" 
            disabled={loading} 
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit Message"}
          </button>
          {result && (
            <p className={`mt-4 ${result.success ? "text-green-500" : "text-red-500"}`}>
              {result.message}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}
