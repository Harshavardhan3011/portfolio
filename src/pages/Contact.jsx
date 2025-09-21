import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    budget: "",
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

    const serviceID = "your_service_id";      // from EmailJS
    const templateID = "your_template_id";    // from EmailJS
    const userID = "your_user_id";            // from EmailJS

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setLoading(false);
        setResult({ success: true, message: "Message sent successfully!" });
        setFormData({ fullname: "", email: "", phone: "", budget: "", message: "" });
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
          {/* ... Your contact details JSX unchanged */}
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
            />
            <input 
              type="text" 
              name="budget"
              placeholder="Budget" 
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.budget}
              onChange={handleChange}
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
