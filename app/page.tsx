import React from "react";
import Link from "next/link";
import Head from "next/head"; 
import { Upload, File, Check } from "lucide-react";

const MediaProcessingHomepage: React.FC = () => {
  const services = [
    {
      icon: Upload,
      title: "Image Dimension",
      description:
        "Easily resize, crop, and transform your images to exact specifications.",
      features: [
        "Custom width and height adjustment",
        "Aspect ratio preservation",
        "Multiple output formats",
      ],
    },
    {
      icon: File,
      title: "Video Compression",
      description: "Optimize video file sizes without compromising quality.",
      features: [
        "Reduce file size up to 80%",
        "Maintain video resolution",
        "Support for multiple codecs",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <head>
        <title>MyBuddy - Optimize Your Media</title>
        <meta
          name="description"
          content="Effortlessly resize images and compress videos with our intelligent cloud-based platform."
        />
      </head>

      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Upload className="mr-2 text-blue-600" size={30} />
            <span className="text-2xl font-bold text-blue-600">
              MyBuddy
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {["Home", "Features", "Pricing"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/sign-in"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/get-started"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white/70 backdrop-blur-md py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Optimize Your Media in Seconds
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Effortlessly resize images and compress videos with our intelligent
            cloud-based platform.
          </p>
          <div className="flex justify-center space-x-4">
            {[
              { icon: Upload, text: "Upload Media", primary: true },
              { icon: File, text: "Learn More", primary: false },
            ].map((btn) => (
              <Link
                key={btn.text}
                href={btn.primary ? "/upload" : "/learn-more"}
                className={`${
                  btn.primary
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "border border-blue-500 text-blue-500 hover:bg-blue-50"
                } 
                  px-6 py-3 rounded-md transition-colors flex items-center
                `}
              >
                <btn.icon className="mr-2" /> {btn.text}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 bg-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="mr-4 text-blue-600" size={40} />
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 text-green-500" size={20} />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 MyBuddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MediaProcessingHomepage;
