import { Heart, Users, BookOpen, Award, Mail, Sparkles, Stethoscope, Shield } from 'lucide-react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="section bg-gray-100 flex items-center justify-center ">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 px-6">
        
        {/* Image Section */}
        <div className="relative flex-shrink-0">
          <div className="relative">
            <Image 
              src="/about.png" 
              width={568} 
              height={568} 
              alt="About Me"
            />
            
            
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 max-w-2xl">
          {/* Header with icon */}
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary text-white p-3 rounded-xl shadow-lg">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
              About Me
            </h2>
          </div>

          <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
            I am a Nursing graduate with a strong foundation in patient care, clinical procedures, and healthcare documentation. My training in Medical Virtual
            Assistance has strengthened my skills in electronic health record (EHR) management, scheduling, data entry, and patient communication, allowing me
            to bridge both clinical and administrative roles. <br/> <br/>Beyond my technical skills, I am eager to learn, adaptable to new tools and systems, and committed
            to delivering compassionate and reliable support to healthcare providers. Through this portfolio, I present my qualifications, certifications, and experiences
            that reflect both my professional competence and my dedication to continuous growth in the healthcare field.
          </p>

          {/* Key highlights with icons */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="bg-red-100 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-red-500" />
              </div>
              <span className="text-gray-700 font-medium">Patient Care Expert</span>
            </div>
            
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="bg-blue-100 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-gray-700 font-medium">Continuous Learner</span>
            </div>
            
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-gray-700 font-medium">Certified Professional</span>
            </div>
            
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="bg-green-100 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-gray-700 font-medium">Healthcare Advocate</span>
            </div>
          </div> */}

          {/* Enhanced Contact Me Button */}
         <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;