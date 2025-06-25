import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(import.meta.env.REACT_APP_FORMSPREE, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (data.ok) {
        setResult("✅ Form submitted successfully!");
        form.reset();
      } else {
        setResult("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setResult("❌ Something went wrong.");
    }
  };

  return (
    <div id="CONTACT" className="bg-[#00021a] py-10">
      <div className="lg:w-[80%] w-full m-auto">
        <motion.h1
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className="text-center text-5xl text-white mb-10"
        >
          Contact Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className="flex justify-around flex-wrap-reverse gap-5"
        >
          {/* Left Section */}
          <div>
            <h2 className="text-white text-2xl">Let's Connect</h2>
            <div className="pt-3 space-y-4">
              <ContactInfo icon="person" label="Name" value="Krishna Verma" />
              <ContactInfo icon="location_on" label="Address" value="Bhopal, M.P." />
              <ContactInfo icon="mail" label="Email" value="kv7477000@gmail.com" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-2xl">Contact Form</h2>
            <form onSubmit={onSubmit} className="flex flex-col gap-3">
              <input
                className="border p-2 rounded-lg md:w-80 w-60 focus:outline-none"
                name="name"
                type="text"
                placeholder="Name"
                required
              />
              <input
                className="border p-2 rounded-lg md:w-80 w-60 focus:outline-none"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              <textarea
                className="border p-2 rounded-lg md:w-80 w-60 focus:outline-none"
                name="message"
                placeholder="Message..."
                required
              />
              <motion.button
                whileHover={{
                  color: "#DB2777",
                  backgroundColor: "transparent",
                  transition: { duration: 0.3 }
                }}
                type="submit"
                className="w-fit px-6 py-2 bg-pink-600 text-white border-2 border-pink-600 rounded-lg"
              >
                Send Message
              </motion.button>
            </form>
            <span className="text-white">{result}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const ContactInfo = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <span className="material-symbols-outlined text-pink-600">{icon}</span>
    <div className="flex flex-col">
      <span className="text-white text-xl">{label}</span>
      <span className="text-gray-300">{value}</span>
    </div>
  </div>
);

export default Contact;
