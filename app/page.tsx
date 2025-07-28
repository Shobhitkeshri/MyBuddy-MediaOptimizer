"use client";

import React from "react";
import Link from "next/link";
import { Upload, File, Check } from "lucide-react";
import Head from "next/head";

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
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1e1e1e] to-[#121212] text-white">
      <Head>
        <title>MyBuddy - Optimize Your Media</title>
        <meta
          name="description"
          content="Effortlessly resize images and compress videos with our intelligent cloud-based platform."
        />
      </Head>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#181818]/80 backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Upload className="mr-2 text-purple-500" size={30} />
            <span className="text-2xl font-bold text-purple-400">MyBuddy</span>
          </div>
          <div className="flex items-center space-x-4">
            {["Home", "Features", "Pricing"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/sign-in"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/get-started"
              className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-[#1c1c1c]/80 backdrop-blur py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Optimize Your Media in Seconds
          </h1>
          <p className="text-lg text-gray-400 mb-10">
            Resize images and compress videos instantly with cloud-powered
            tools.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/upload"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center"
            >
              <Upload className="mr-2" /> Upload Media
            </Link>
            <Link
              href="/learn-more"
              className="border border-purple-500 text-purple-400 hover:bg-purple-800/20 px-6 py-3 rounded-lg flex items-center"
            >
              <File className="mr-2" /> Learn More
            </Link>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#222] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-[#333]"
            >
              <div className="flex items-center mb-4">
                <service.icon className="mr-4 text-purple-500" size={40} />
                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="mr-2 text-green-400" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] text-gray-500 py-10 text-center">
        <p>&copy; 2025 MyBuddy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MediaProcessingHomepage;
