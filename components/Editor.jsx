"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Trash2, Plus, GripVertical, ImageIcon, Type, FileText, Sparkles, Save, Eye } from "lucide-react"

const Editor = ({ onAddStep, onBackToTour, onBackToHero, tourSteps, onDeleteStep, onReorderSteps }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: "custom",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [previewMode, setPreviewMode] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.title.trim() || !formData.description.trim()) {
      alert("Please fill in both title and description")
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 800))

    const newStep = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      image:
        formData.image.trim() ||
        `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(formData.title.trim())}`,
      category: formData.category,
      duration: "2 min read",
    }

    onAddStep(newStep)
    setFormData({ title: "", description: "", image: "", category: "custom" })
    setIsSubmitting(false)
  }

  const handleQuickAdd = (template) => {
    setFormData({ ...template, category: template.category || "custom" })
  }

  const enhancedTemplates = [
    {
      title: "Feature Highlight",
      description:
        "Showcase a key feature of your application with detailed explanations and visual guides that help users understand the value proposition.",
      image: "/placeholder.svg?height=400&width=600&text=Feature+Highlight",
      category: "getting-started",
    },
    {
      title: "Getting Started Guide",
      description:
        "Help new users take their first steps with a comprehensive onboarding experience that reduces time-to-value and increases user engagement.",
      image: "/placeholder.svg?height=400&width=600&text=Getting+Started",
      category: "onboarding",
    },
    {
      title: "Advanced Tips & Tricks",
      description:
        "Share pro tips and advanced techniques to help power users get the most out of your product with expert-level insights and shortcuts.",
      image: "/placeholder.svg?height=400&width=600&text=Advanced+Tips",
      category: "advanced",
    },
    {
      title: "Workflow Optimization",
      description:
        "Guide users through optimized workflows that save time and increase productivity with step-by-step process improvements.",
      image: "/placeholder.svg?height=400&width=600&text=Workflow+Guide",
      category: "advanced",
    },
  ]

  const categories = [
    { value: "onboarding", label: "Onboarding", color: "blue" },
    { value: "getting-started", label: "Getting Started", color: "green" },
    { value: "advanced", label: "Advanced", color: "purple" },
    { value: "custom", label: "Custom", color: "gray" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced Header */}
      <div className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ x: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onBackToHero}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to Home</span>
              </motion.button>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Type className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-xl font-semibold text-gray-900">Tour Editor</h1>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
                <Sparkles className="w-4 h-4 text-yellow-500" />
                <span>{tourSteps.length} steps created</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setPreviewMode(!previewMode)}
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                <Eye className="w-4 h-4" />
                <span>{previewMode ? "Edit" : "Preview"}</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onBackToTour}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
              >
                Preview Tour
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Enhanced Editor Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="xl:col-span-2"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
              <div className="p-6 sm:p-8 border-b border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Plus className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Add New Tour Step</h2>
                </div>

                {/* Enhanced Quick Templates */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    <span>Quick Templates</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {enhancedTemplates.map((template, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleQuickAdd(template)}
                        className="text-left p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200 group"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileText className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">
                              {template.title}
                            </div>
                            <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                              {template.description.substring(0, 80)}...
                            </div>
                            <div className="mt-2">
                              <span
                                className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                  template.category === "onboarding"
                                    ? "bg-blue-100 text-blue-800"
                                    : template.category === "getting-started"
                                      ? "bg-green-100 text-green-800"
                                      : template.category === "advanced"
                                        ? "bg-purple-100 text-purple-800"
                                        : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {template.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Form */}
              <div className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Category</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {categories.map((category) => (
                        <motion.button
                          key={category.value}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setFormData((prev) => ({ ...prev, category: category.value }))}
                          className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${
                            formData.category === category.value
                              ? `border-${category.color}-500 bg-${category.color}-50 text-${category.color}-700`
                              : "border-gray-200 hover:border-gray-300 text-gray-600"
                          }`}
                        >
                          {category.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Title Input */}
                  <div>
                    <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                      Step Title *
                    </label>
                    <div className="relative">
                      <Type className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Enter a descriptive title for this step"
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Description Input */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                      Description *
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Provide detailed instructions or information for this step"
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 resize-none text-gray-900 placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Image URL Input */}
                  <div>
                    <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">
                      Image URL (Optional)
                    </label>
                    <div className="relative">
                      <ImageIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="url"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        placeholder="https://example.com/image.jpg"
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2 flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Leave empty to auto-generate a placeholder image</span>
                    </p>
                  </div>

                  {/* Enhanced Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Creating Step...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Save className="w-5 h-5" />
                        <span>Add Tour Step</span>
                      </div>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Live Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="xl:col-span-1"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden sticky top-24">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-blue-600" />
                    <span>Tour Steps</span>
                  </h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Live Preview</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {tourSteps.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Plus className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">No steps yet</h3>
                    <p className="text-gray-500 text-sm">
                      Add your first step to get started building an amazing tour!
                    </p>
                  </motion.div>
                ) : (
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    <AnimatePresence>
                      {tourSteps.map((step, index) => (
                        <motion.div
                          key={step.id}
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          whileHover={{ y: -2 }}
                          className="border-2 border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition-all duration-200 group bg-white/50"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3 flex-1">
                              <div className="flex flex-col items-center space-y-2">
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                                >
                                  {index + 1}
                                </motion.div>
                                <GripVertical className="w-4 h-4 text-gray-400 cursor-move opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-gray-900 truncate group-hover:text-blue-700 transition-colors">
                                  {step.title}
                                </h4>
                                <p className="text-sm text-gray-600 mt-1 line-clamp-2 leading-relaxed">
                                  {step.description}
                                </p>
                                <div className="flex items-center space-x-2 mt-2">
                                  <span
                                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                      step.category === "onboarding"
                                        ? "bg-blue-100 text-blue-800"
                                        : step.category === "getting-started"
                                          ? "bg-green-100 text-green-800"
                                          : step.category === "advanced"
                                            ? "bg-purple-100 text-purple-800"
                                            : "bg-gray-100 text-gray-800"
                                    }`}
                                  >
                                    {step.category}
                                  </span>
                                  <span className="text-xs text-gray-500">{step.duration}</span>
                                </div>
                                {step.image && (
                                  <motion.img
                                    whileHover={{ scale: 1.02 }}
                                    src={step.image}
                                    alt={step.title}
                                    className="w-full h-20 object-cover rounded-lg mt-3 border border-gray-200"
                                  />
                                )}
                              </div>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => onDeleteStep(step.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors ml-2 p-1 rounded-lg hover:bg-red-50"
                              title="Delete step"
                            >
                              <Trash2 className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Editor
