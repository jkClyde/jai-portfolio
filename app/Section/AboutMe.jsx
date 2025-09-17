import { Heart, Users, BookOpen, Award, Mail, Sparkles, Stethoscope, Shield } from 'lucide-react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="relative section flex items-center justify-center bg-primary">
      
      {/* Clean geometric patterns */}
      <div className="absolute top-12 left-12 w-20 h-20 border-4 border-white rounded-full animate-spin z-0" style={{animationDuration: '20s'}}></div>
      <div className="absolute top-24 right-16 w-16 h-16 bg-purple-100 rounded-lg rotate-45 shadow-lg animate-pulse z-0"></div>
      
      {/* Paper-like cards */}
      <div className="absolute bottom-1/3 left-8 bg-slate-50 rounded-lg shadow-md p-3 w-20 h-12 rotate-12 z-0">
        <div className="w-full h-2 bg-primary rounded mb-1"></div>
        <div className="w-3/4 h-2 bg-gray-300 rounded"></div>
      </div>
      
      <div className="absolute bottom-1/3 right-8 bg-blue-50 rounded-lg shadow-md p-3 w-18 h-16 -rotate-6 z-0">
        <div className="w-full h-2 bg-blue-400 rounded mb-1"></div>
        <div className="w-full h-2 bg-gray-300 rounded mb-1"></div>
        <div className="w-2/3 h-2 bg-gray-300 rounded"></div>
      </div>
      
    
      


      <div className="max-w-[1366px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 px-6">
        
        {/* Content Section - moved to left to match Hero layout */}
        <div className="flex flex-col flex-1 max-w-2xl order-2 lg:order-1">
          {/* Header with consistent styling */}
          <div className="mb-6">
            <h2 className="text-[65px] font-extrabold leading-none mb-2 text-white">
              About Me
            </h2>
         
          </div>

          {/* Decorative line matching Hero */}
          <div className="bg-white w-[120px] h-[6px] rounded-md mb-6"></div>

          <p className="text-[18px] font-light text-gray-100 leading-relaxed mb-8">
            I am a Nursing graduate with a strong foundation in patient care, clinical procedures, and healthcare documentation. My training in Medical Virtual
            Assistance has strengthened my skills in electronic health record (EHR) management, scheduling, data entry, and patient communication, allowing me
            to bridge both clinical and administrative roles.
          </p>

          <p className="text-[18px] font-light text-gray-100 leading-relaxed mb-8">
            Beyond my technical skills, I am eager to learn, adaptable to new tools and systems, and committed
            to delivering compassionate and reliable support to healthcare providers. Through this portfolio, I present my qualifications, certifications, and experiences
            that reflect both my professional competence and my dedication to continuous growth in the healthcare field.
          </p>

          {/* Key highlights with modern card design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 bg-white hover:bg-white/90 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/20">
              <div className="bg-red-100 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-red-500" />
              </div>
              <span className="text-gray-700 font-medium">Patient Care Expert</span>
            </div>
            
            <div className="flex items-center gap-3 bg-white hover:bg-white/90 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/20">
              <div className="bg-blue-100 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-gray-700 font-medium">Continuous Learner</span>
            </div>
            
            <div className="flex items-center gap-3 bg-white hover:bg-white/90 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/20">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-gray-700 font-medium">Certified Professional</span>
            </div>
            
            <div className="flex items-center gap-3 bg-white hover:bg-white/90 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/20">
              <div className="bg-green-100 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-gray-700 font-medium">Healthcare Advocate</span>
            </div>
          </div>

         
        </div>

        {/* Image Section - moved to right and styled like Hero */}
        <div className="flex-shrink-0 order-1 lg:order-2">
          <div className="relative">
            {/* Decorative background elements matching Hero */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur-2xl opacity-30"></div>
            
            {/* Main image container with Hero styling */}
            <div className="relative bg-white rounded-3xl p-2">
              <Image 
                src="/about.png" 
                width={568} 
                height={568} 
                alt="About Me"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;