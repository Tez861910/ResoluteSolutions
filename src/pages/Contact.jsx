import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-16 px-4">
      <div className="max-w-3xl w-full bg-white/90 rounded-3xl shadow-2xl border border-slate-100 p-10 relative overflow-hidden">
        {/* Decorative Gradient Circles */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-blue-200 via-purple-200 to-white opacity-40 rounded-full blur-3xl z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tr from-purple-100 via-blue-100 to-white opacity-30 rounded-full blur-2xl z-0 pointer-events-none"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 tracking-tight text-center">
            Contact Us
          </h1>
          <p className="text-lg text-slate-700 mb-8 text-center max-w-2xl mx-auto">
            We'd love to hear from you! Reach out for business inquiries,
            support, or just to say hello. Our team will get back to you as soon
            as possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c1.466 0 2.961-.371 4.442-1.104l.58-.288 1.302 2.606-.58.288A11.947 11.947 0 0112 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12c0 1.457-.261 2.853-.73 4.133l-.288.781-1.923-.712.288-.781A9.926 9.926 0 0022 12c0-5.514-4.486-10-10-10zm0 15c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" />
                    <circle cx="18.5" cy="5.5" r="3.5" fill="currentColor" />
                  </svg>
                </span>
                <div>
                  <div className="text-slate-900 font-semibold">Email</div>
                  <a
                    href="mailto:resolutesolutions.connect@gmail.com"
                    className="text-blue-700 hover:underline text-sm"
                  >
                    resolutesolutions.connect@gmail.com
                  </a>
                  <br />
                  <a
                    href="mailto:resolutesolutions@hotmail.com"
                    className="text-blue-700 hover:underline text-sm"
                  >
                    resolutesolutions@hotmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <div>
                  <div className="text-slate-900 font-semibold">Phone</div>
                  <a
                    href="tel:+918073570073"
                    className="text-green-700 hover:underline text-sm"
                  >
                    +91 8073570073
                  </a>
                  <br />
                  <a
                    href="tel:+919741111714"
                    className="text-green-700 hover:underline text-sm"
                  >
                    +91 9741111714
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 6.343l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-slate-900 font-semibold">
                    Office Address
                  </div>
                  <div className="text-slate-700 text-sm">
                    #9, 3rd Cross, Sir MV Layout
                    <br />
                    Hesaraghatta Road, Bagalagunte
                    <br />
                    Bengaluru 560073, India
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-slate-900 font-semibold">GST Number</div>
                  <div className="text-slate-700 text-sm font-mono tracking-wider">
                    29AHXPJ7565P1ZY
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <form className="bg-gradient-to-br from-blue-100 via-purple-100 to-white rounded-2xl shadow p-6 flex flex-col space-y-4 border border-slate-100">
              <h2 className="text-xl font-bold text-blue-700 mb-2">
                Send us a Message
              </h2>
              <label className="text-slate-700 font-medium">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border-slate-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2 text-slate-900 bg-white"
                />
              </label>
              <label className="text-slate-700 font-medium">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-slate-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2 text-slate-900 bg-white"
                />
              </label>
              <label className="text-slate-700 font-medium">
                Message
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-slate-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2 text-slate-900 bg-white"
                />
              </label>
              <button
                type="submit"
                className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
