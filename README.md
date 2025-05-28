# Tour Builder 🚀

A mini interactive product-tour builder inspired by Arcade's landing-page demo. Create engaging onboarding experiences with our intuitive tour builder featuring a clean hero section, simulated tour steps, and a dynamic editor.

## ✨ Features

- **Clean Hero Section**: Full-screen landing page with compelling call-to-action
- **Interactive Tour Steps**: Vertical scroll of cards with step numbers, images, and descriptions
- **Dynamic Editor**: Add new tour steps with live preview
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Smooth Animations**: Framer Motion transitions for enhanced UX
- **Pre-seeded Content**: Three demo steps to get you started
- **Live Preview**: See your changes instantly as you build

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **PostCSS + Autoprefixer** - CSS processing

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd tour-builder
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to \`http://localhost:3000\`

## 📁 Project Structure

\`\`\`
tour-builder/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Landing page hero section
│   │   ├── TourStep.jsx      # Individual tour step component
│   │   └── Editor.jsx        # Tour step editor with form
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles with Tailwind
├── package.json
├── tailwind.config.cjs       # Tailwind configuration
├── postcss.config.cjs        # PostCSS configuration
├── vite.config.js            # Vite configuration
└── README.md
\`\`\`

## 🎯 Usage

### Starting the Demo Tour

1. Click **"Start Demo Tour"** on the hero page
2. Navigate through the pre-built tour steps using the Previous/Next buttons
3. Track your progress with the visual progress bar

### Building Your Own Tour

1. Click **"Build Your Own"** from the hero page or **"Edit Tour"** from the tour view
2. Use quick templates or create custom steps
3. Fill in the step title, description, and optional image URL
4. Preview your tour steps in real-time
5. Delete unwanted steps using the delete button

### Navigation

- **Hero → Tour**: Click "Start Demo Tour"
- **Hero → Editor**: Click "Build Your Own"
- **Tour → Editor**: Click "Edit Tour"
- **Editor → Tour**: Click "Preview Tour"
- **Any page → Hero**: Click "Back to Home"

## 🎨 Customization

### Styling

The project uses Tailwind CSS with a custom configuration. Key customizations include:

- **Primary Colors**: Blue color scheme (\`primary-*\`)
- **Custom Animations**: Fade-in and slide-up animations
- **Component Classes**: Pre-built button and card styles

### Adding New Features

1. **New Tour Step Types**: Extend the step object structure in \`App.jsx\`
2. **Additional Animations**: Add new Framer Motion variants in components
3. **Custom Templates**: Modify the \`quickTemplates\` array in \`Editor.jsx\`

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   \`\`\`bash
   npm i -g vercel
   \`\`\`

2. **Deploy to production**
   \`\`\`bash
   vercel --prod
   \`\`\`

### Other Platforms

1. **Build for production**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Deploy the \`dist\` folder** to your hosting platform

## 🧪 Development

### Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build locally
- \`npm run lint\` - Run ESLint

### Code Quality

The project includes:

- **ESLint** for code linting
- **Prettier** configuration (recommended)
- **Modern JavaScript** (ES6+)
- **React best practices**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by [Arcade](https://www.arcade.software/) for the tour concept
- Built with [Vite](https://vitejs.dev/) for fast development
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)

---

**Happy building! 🎉**

For questions or support, please open an issue in the repository.
\`\`\`
\`\`\`

Perfect! I've created a complete tour-builder project with all the features you requested. Here's what you get:

## 🎯 **Key Features Implemented:**

✅ **Clean Hero Section** - Full-screen landing with compelling CTA  
✅ **Interactive Tour Steps** - Vertical scroll with progress tracking  
✅ **Dynamic Editor** - Add/delete steps with live preview  
✅ **Pre-seeded Content** - 3 demo steps ready to go  
✅ **Responsive Design** - Mobile-first with Tailwind CSS  
✅ **Smooth Animations** - Framer Motion transitions  
✅ **Vercel Deploy Ready** - Optimized build configuration  

## 🚀 **To Get Started:**

1. **Download the code** using the "Download Code" button above
2. **Run these commands:**
   ```bash
   cd tour-builder
   npm install
   npm run dev
