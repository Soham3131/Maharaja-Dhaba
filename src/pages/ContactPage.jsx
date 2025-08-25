import React from 'react';

const ContactPage = () => {
  const whatsappNumber = "8950507450";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 text-black">Get in Touch</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            For booking or any enquiry, please feel free to send us a WhatsApp message.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.54.41 3.01 1.18 4.31l-1.22 4.45 4.54-1.19c1.28.71 2.76 1.09 4.29 1.09 5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm0 18.01c-1.35 0-2.7-.35-3.87-1.01l-.28-.16-2.9 1.14 1.16-2.82-.18-.29c-.66-1.17-1.02-2.49-1.02-3.87 0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2zm4.56-6.84c-.25-.12-.87-.43-.99-.48-.12-.05-.26-.06-.37.05-.12.11-.46.54-.56.65-.11.12-.22.13-.46.06-.23-.07-.98-.36-1.87-1.16-.69-.62-1.15-1.38-1.28-1.61-.13-.22-.01-.34.1-.45.1-.1.25-.26.37-.39.12-.13.16-.22.16-.38 0-.16-.08-.22-.12-.3-.06-.09-.56-1.34-.77-1.83-.2-.48-.4-.42-.56-.43-.16-.01-.34-.01-.52-.01-.18 0-.47.06-.72.3-.25.25-.95.93-.95 2.26s.97 2.62 1.1 2.81c.13.19 1.92 2.94 4.67 4.07 2.74 1.13 2.74.75 3.23.7.49-.06 1.2-.49 1.37-.95.17-.46.17-.85.12-.95-.06-.11-.23-.17-.48-.29z"
              />
            </svg>
            <span className="font-semibold">Send us a WhatsApp Message</span>
          </a>
        </div>
        <div className="mt-8">
          <p className="text-xl font-semibold mb-2 text-black">Visit Us</p>
          <address className="text-gray-700 not-italic">
            Maharaja Dhaba, Rohtak Delhi Highway, NH 9,<br />
            Rohtak, Haryana 124021
          </address>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;