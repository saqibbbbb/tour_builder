"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Hero from "@/components/Hero"
import TourStep from "@/components/TourStep"
import Editor from "@/components/Editor"

// Enhanced demo steps with better images
const initialSteps = [
  {
    id: 1,
    title: "Welcome to Your Dashboard",
    description:
      "This is your main dashboard where you can see all your projects and recent activity. Navigate through different sections using the sidebar to explore features like analytics, project management, and team collaboration tools.",
    image: "/placeholder.svg?height=400&width=600",
    category: "onboarding",
    duration: "2 min read",
  },
  {
    id: 2,
    title: "Create Your First Project",
    description:
      "Click the 'New Project' button to start building something amazing. You can choose from various templates including web apps, mobile apps, or start from scratch with our intuitive project wizard.",
    image: "/placeholder.svg?height=400&width=600",
    category: "getting-started",
    duration: "3 min read",
  },
  {
    id: 3,
    title: "Customize and Deploy",
    description:
      "Use our intuitive editor to customize your project with drag-and-drop components, custom styling, and advanced configurations. When you're ready, deploy with a single click to share with the world.",
    image: "/placeholder.svg?height=400&width=600",
    category: "advanced",
    duration: "5 min read",
  },
]

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function TourBuilderApp() {
  const [currentView, setCurrentView] = useState("hero")
  const [tourSteps, setTourSteps] = useState(initialSteps)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleViewTransition = async (newView, stepIndex = 0) => {
    setIsTransitioning(true)
    await new Promise((resolve) => setTimeout(resolve, 100))
    setCurrentView(newView)
    if (stepIndex !== undefined) setCurrentStepIndex(stepIndex)
    setIsTransitioning(false)
  }

  const handleStartDemo = () => handleViewTransition("tour", 0)
  const handleBackToHero = () => handleViewTransition("hero")
  const handleOpenEditor = () => handleViewTransition("editor")

  const handleAddStep = (newStep) => {
    const stepWithId = {
      ...newStep,
      id: Date.now(),
      category: newStep.category || "custom",
      duration: "2 min read",
    }
    setTourSteps([...tourSteps, stepWithId])
  }

  const handleNextStep = () => {
    if (currentStepIndex < tourSteps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1)
    }
  }

  const handleDeleteStep = (stepId) => {
    setTourSteps(tourSteps.filter((step) => step.id !== stepId))
    if (currentStepIndex >= tourSteps.length - 1) {
      setCurrentStepIndex(Math.max(0, tourSteps.length - 2))
    }
  }

  const handleReorderSteps = (dragIndex, hoverIndex) => {
    const dragStep = tourSteps[dragIndex]
    const newSteps = [...tourSteps]
    newSteps.splice(dragIndex, 1)
    newSteps.splice(hoverIndex, 0, dragStep)
    setTourSteps(newSteps)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Loading overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-gray-600 font-medium">Loading...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {currentView === "hero" && (
          <motion.div key="hero" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <Hero onStartDemo={handleStartDemo} onOpenEditor={handleOpenEditor} />
          </motion.div>
        )}

        {currentView === "tour" && (
          <motion.div
            key="tour"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen"
          >
            {/* Enhanced Tour Header */}
            <div className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 sticky top-0 z-40">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.button
                      whileHover={{ x: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleBackToHero}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span>Back to Home</span>
                    </motion.button>
                    <div className="h-6 w-px bg-gray-300"></div>
                    <h1 className="text-xl font-semibold text-gray-900">Interactive Tour</h1>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Live Demo</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      Step {currentStepIndex + 1} of {tourSteps.length}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleOpenEditor}
                      className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg border border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm shadow-sm"
                    >
                      Edit Tour
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tour Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {tourSteps.length > 0 ? (
                <TourStep
                  step={tourSteps[currentStepIndex]}
                  stepNumber={currentStepIndex + 1}
                  totalSteps={tourSteps.length}
                  onNext={handleNextStep}
                  onPrev={handlePrevStep}
                  canGoNext={currentStepIndex < tourSteps.length - 1}
                  canGoPrev={currentStepIndex > 0}
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No tour steps available</h3>
                  <p className="text-gray-500 mb-6">
                    Create your first tour step to get started with building an amazing user experience.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleOpenEditor}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Add Your First Step
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {currentView === "editor" && (
          <motion.div key="editor" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <Editor
              onAddStep={handleAddStep}
              onBackToTour={() => handleViewTransition("tour")}
              onBackToHero={handleBackToHero}
              tourSteps={tourSteps}
              onDeleteStep={handleDeleteStep}
              onReorderSteps={handleReorderSteps}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
