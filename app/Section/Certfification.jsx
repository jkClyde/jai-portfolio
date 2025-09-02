import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { ChevronLeft, ChevronRight, Award, Calendar, ExternalLink, X, ZoomIn } from 'lucide-react'

const Certifications = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Sample certificate data - replace with your actual certificates
  const certificates = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&auto=format",
      credentialId: "AWS-SAA-2024-001",
      skills: ["Cloud Architecture", "AWS Services", "Security"]
    },
    {
      id: 2,
      name: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2023",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&auto=format",
      credentialId: "GCP-2023-002",
      skills: ["GCP", "DevOps", "Kubernetes"]
    },
    {
      id: 3,
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop&auto=format",
      credentialId: "CKA-2023-003",
      skills: ["Kubernetes", "Container Orchestration", "DevOps"]
    },
    {
      id: 4,
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&auto=format",
      credentialId: "AZ-900-2023-004",
      skills: ["Azure", "Cloud Computing", "Microsoft Services"]
    },
    {
      id: 5,
      name: "Certified Ethical Hacker",
      issuer: "EC-Council",
      date: "2022",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&auto=format",
      credentialId: "CEH-2022-005",
      skills: ["Cybersecurity", "Penetration Testing", "Security Auditing"]
    }
  ]

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 4,
      spacing: 12,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 8,
        },
      },
      "(max-width: 480px)": {
        slides: {
          perView: 2.5,
          spacing: 8,
        },
      },
    },
  })

  const currentCertificate = certificates[currentSlide] || certificates[0]

  const openLightbox = (certificate) => {
    setLightboxImage(certificate)
    setLightboxOpen(true)
    // Disable fullpage.js scrolling
    if (typeof window !== 'undefined' && window.fullpage_api) {
      window.fullpage_api.setAllowScrolling(false)
    }
    // Prevent background scrolling
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage(null)
    // Re-enable fullpage.js scrolling
    if (typeof window !== 'undefined' && window.fullpage_api) {
      window.fullpage_api.setAllowScrolling(true)
    }
    // Restore background scrolling
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    const currentIndex = certificates.findIndex(cert => cert.id === lightboxImage.id)
    const nextIndex = (currentIndex + 1) % certificates.length
    setLightboxImage(certificates[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = certificates.findIndex(cert => cert.id === lightboxImage.id)
    const prevIndex = currentIndex === 0 ? certificates.length - 1 : currentIndex - 1
    setLightboxImage(certificates[prevIndex])
  }

  return (
    <>
      <section className="section bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-primary font-semibold text-lg">Professional Growth</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  My <span className="text-primary">Certifications</span>
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Showcasing my commitment to continuous learning and professional development through industry-recognized certifications and achievements.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-primary mb-2">{certificates.length}+</div>
                  <div className="text-gray-600">Certifications Earned</div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <p className="text-gray-500">Browse through my certificates →</p>
              </div>
            </div>

            {/* Right Side - Gallery Style Slider */}
            <div className="relative">
              {/* Main Big Image */}
              <div className="mb-6">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  <div 
                    className="relative overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(currentCertificate)}
                  >
                    <img 
                      src={currentCertificate.image} 
                      alt={currentCertificate.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-6 h-6 text-white drop-shadow-lg" />
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                        Click to view full size
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-bold text-2xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {currentCertificate.name}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{currentCertificate.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="relative">
                <div ref={sliderRef} className="keen-slider">
                  {certificates.map((cert, index) => (
                    <div 
                      key={cert.id} 
                      className="keen-slider__slide cursor-pointer"
                      onClick={() => {
                        setCurrentSlide(index)
                        instanceRef.current?.moveToIdx(index)
                      }}
                    >
                      <div className={`relative rounded-xl overflow-hidden transition-all duration-300 shadow-md ${
                        currentSlide === index 
                          ? 'ring-4 ring-blue-500 shadow-xl scale-110' 
                          : 'opacity-80 hover:opacity-100 hover:scale-105 hover:shadow-lg'
                      }`}>
                        <img 
                          src={cert.image} 
                          alt={cert.name}
                          className="w-full h-24 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-white text-sm font-bold truncate drop-shadow-lg">
                            {cert.name}
                          </p>
                        </div>
                        {currentSlide === index && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Thumbnail Navigation Arrows */}
                {loaded && instanceRef.current && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        instanceRef.current?.prev()
                      }}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-primary cursor-pointer rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group border-2 border-white"
                      aria-label="Previous certificate"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        instanceRef.current?.next()
                      }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-primary cursor-pointer rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group border-2 border-white"
                      aria-label="Next certificate"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal - Rendered outside fullpage container using Portal */}
      {mounted && lightboxOpen && lightboxImage && createPortal(
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          style={{ 
            zIndex: 99999,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image Container */}
            <div 
              className="bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={lightboxImage.image.replace('w=600&h=400', 'w=1200&h=800')} 
                alt={lightboxImage.name}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              {/* Image Info */}
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {lightboxImage.name}
                </h3>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{lightboxImage.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">View Credential</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-sm">
              {certificates.findIndex(cert => cert.id === lightboxImage.id) + 1} / {certificates.length}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default Certifications