"use client"
import { motion } from "framer-motion"
import { Zap, Settings, Heart, Bolt, ArrowRight, Play, Edit3, Users, Sparkles } from "lucide-react"

const Hero = ({ onStartDemo, onOpenEditor }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        {/* Logo/Brand */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl mb-6 shadow-2xl"
          >
            <Bolt className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6"
          >
            Tour Builder
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-2 text-blue-600 font-medium"
          >
            <Sparkles className="w-5 h-5" />
            <span>Powered by AI & Innovation</span>
            <Sparkles className="w-5 h-5" />
          </motion.div>
        </motion.div>

        {/* Enhanced Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Create <span className="font-semibold text-blue-600">interactive product tours</span> that guide your users
          through your application. Build{" "}
          <span className="font-semibold text-purple-600">engaging onboarding experiences</span> with our intuitive tour
          builder.
        </motion.p>

        {/* Enhanced Features Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {[
            { icon: Settings, title: "Easy Setup", desc: "Get started in minutes", color: "blue" },
            { icon: Heart, title: "User Friendly", desc: "Intuitive interface", color: "red" },
            { icon: Zap, title: "Fast & Smooth", desc: "Optimized performance", color: "yellow" },
            { icon: Users, title: "Team Ready", desc: "Collaborate seamlessly", color: "green" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-14 h-14 bg-${feature.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4`}
              >
                <feature.icon className={`w-7 h-7 text-${feature.color}-600`} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStartDemo}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Start Demo Tour</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenEditor}
            className="group bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 px-8 rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center justify-center space-x-2">
              <Edit3 className="w-5 h-5" />
              <span>Build Your Own</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.button>
        </motion.div>

        {/* Enhanced Demo Preview */}
        <motion.div variants={itemVariants} className="relative max-w-3xl mx-auto">
          <motion.div
            whileHover={{ y: -5 }}
            className="relative bg-white rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden backdrop-blur-sm"
          >
            {/* Browser Chrome */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 max-w-md mx-4">
                  <div className="bg-white rounded-lg px-3 py-1 text-sm text-gray-500 border">tour-builder.app</div>
                </div>
                <div className="w-16"></div>
              </div>
            </div>

            {/* Preview Content */}
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                >
                  1
                </motion.div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Welcome to Your Dashboard</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    This is your main dashboard where you can see all your projects and recent activity...
                  </p>
                  <div className="mt-4">
                    <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border-2 border-dashed border-blue-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-sm text-gray-500">Interactive Preview</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-80"
          />
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={itemVariants} className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {[
            { number: "10K+", label: "Tours Created" },
            { number: "50K+", label: "Users Guided" },
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
