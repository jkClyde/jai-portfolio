import React from 'react'
import Image from 'next/image'
import { Linkedin, Mail, Download, ExternalLink } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className="relative section flex items-center justify-center">
      {/* Hard-cut Slanted Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,white_50%,theme(colors.primary)_50%)]"></div>

      <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-12">
        {/* Text */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-[65px] font-extrabold text-primary leading-none">
              Jirah Kingad
            </h1>
            <h3 className="text-[22px] text-gray-600 font-medium mb-2">
              Medical Virtual Assistant
            </h3>
          </div>

          <div className="bg-primary w-[120px] h-[6px] rounded-md mb-6"></div>

          <p className="max-w-[450px] text-[18px] font-light text-gray-600 leading-relaxed mb-8">
            This is a portfolio to showcase my skills in social media management,
            content product listing writing and calendar management.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl cursor-pointer">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h4 className="text-gray-700 font-medium text-sm uppercase tracking-wider">
              Connect with me
            </h4>

            <div className="flex gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jirah-kingad/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white hover:bg-[#0077B5] text-[#0077B5] hover:text-white border-2 border-[#0077B5] p-3 rounded-xl transition-all duration-200 hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              {/* Gmail */}
              <a
                href="mailto:jirah.kingad@gmail.com"
                className="group bg-white hover:bg-[#EA4335] text-[#EA4335] hover:text-white border-2 border-[#EA4335] p-3 rounded-xl transition-all duration-200 hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-6 h-6" />
              </a>

              {/* Portfolio/Website */}
              <a
                href="#certifications"
                className="group bg-white hover:bg-purple-600 text-purple-600 hover:text-white border-2 border-purple-600 p-3 rounded-xl transition-all duration-200 hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2 text-sm text-gray-600 mt-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>jirah.kingad@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <span>linkedin.com/in/jirah-kingad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <div className="relative">
            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur-2xl opacity-30"></div>

            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-3xl p-2">
              <Image
                src="/jai.jpg"
                width={568}
                height={568}
                alt="Jirah Kingad - Virtual Assistant"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
