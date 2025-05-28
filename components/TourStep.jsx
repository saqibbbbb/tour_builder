"use client"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Clock, Tag, Share2, Bookmark } from "lucide-react"

const TourStep = ({ step, stepNumber, totalSteps, onNext, onPrev, canGoNext, canGoPrev }) => {
  const getCategoryColor = (category) => {
    const colors = {
      onboarding: "bg-blue-100 text-blue-800",
      "getting-started": "bg-green-100 text-green-800",
      advanced: "bg-purple-100 text-purple-800",
      custom: "bg-gray-100 text-gray-800",
    }
    return colors[category] || colors.custom
  }

  const stepVariants = {
    enter: {
      x: 300,
      opacity: 0,
      scale: 0.9,
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      x: -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      key={step.id}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="max-w-4xl mx-auto"
    >
      {/* Enhanced Progress Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-semibold text-gray-700">
              Step {stepNumber} of {totalSteps}
            </span>
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(step.category)}`}>
              {step.category}
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{step.duration}</span>
            </div>
            <span>{Math.round((stepNumber / totalSteps) * 100)}% Complete</span>
          </div>
        </div>

        <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: `${(stepNumber / totalSteps) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/30 rounded-full"
              animate={{ x: ["0%", "100%"] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Step Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden"
      >
        {/* Step Header */}
        <div className="p-6 sm:p-8 border-b border-gray-100">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg"
              >
                {stepNumber}
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{step.title}</h2>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Tag className="w-4 h-4" />
                    <span>Interactive Tour</span>
                  </div>
                  <span>•</span>
                  <span>
                    Step {stepNumber} of {totalSteps}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                title="Bookmark this step"
              >
                <Bookmark className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                title="Share this step"
              >
                <Share2 className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Step Image */}
        <div className="relative">
          <motion.img
            src={step.image}
            alt={step.title}
            className="w-full h-64 sm:h-96 object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Image Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-4 left-4 right-4"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Interactive Demo</span>
                <div className="flex items-center space-x-1 text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Live</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Step Description */}
        <div className="p-6 sm:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <p className="text-gray-700 text-lg leading-relaxed">{step.description}</p>
          </motion.div>

          {/* Enhanced Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-between"
          >
            <motion.button
              whileHover={{ scale: canGoPrev ? 1.02 : 1, x: canGoPrev ? -2 : 0 }}
              whileTap={{ scale: canGoPrev ? 0.98 : 1 }}
              onClick={onPrev}
              disabled={!canGoPrev}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                canGoPrev
                  ? "text-gray-700 hover:bg-gray-100 border-2 border-gray-300 hover:border-gray-400 shadow-sm hover:shadow-md"
                  : "text-gray-400 cursor-not-allowed border-2 border-gray-200 bg-gray-50"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </motion.button>

            {/* Step Indicators */}
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalSteps }, (_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === stepNumber - 1
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-125"
                      : index < stepNumber - 1
                        ? "bg-blue-300"
                        : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: canGoNext ? 1.02 : 1, x: canGoNext ? 2 : 0 }}
              whileTap={{ scale: canGoNext ? 0.98 : 1 }}
              onClick={onNext}
              disabled={!canGoNext}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                canGoNext
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              <span>{canGoNext ? "Next" : "Complete"}</span>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-6 text-center"
      >
        <p className="text-sm text-gray-500">
          Use the navigation buttons or keyboard arrows to move through the tour steps
        </p>
      </motion.div>
    </motion.div>
  )
}

export default TourStep
