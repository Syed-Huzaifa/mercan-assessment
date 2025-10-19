# Mercan Assessment - Employee Portal

A modern Vue.js-based employee portal application that provides comprehensive HR management functionality including payslip management, time tracking, team management, and organizational features.

## 📋 Purpose

This application serves as an employee self-service portal that allows employees to:

- **View and manage payslips** with multi-currency support (USD, EUR)
- **Track time entries** and manage timesheets
- **Access personal information** and employee details
- **View organizational charts** and team structures
- **Manage leave requests** and benefits information
- **Access team information** and collaboration tools

The application is built with a focus on user experience, providing an intuitive interface for employees to manage their HR-related tasks efficiently.

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mercan-assessment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally

## 🏗️ Project Structure

```
src/
├── components/           # Reusable Vue components
│   ├── ui/              # Base UI components (buttons, tables, dialogs, etc.)
│   ├── PayslipPDFPreview.vue
│   ├── PayslipRow.vue
│   ├── PayslipsHeader.vue
│   ├── PayslipsTable.vue
│   └── Sidebar.vue
├── composables/         # Vue composition API logic
│   └── usePayslips.ts  # Payslip data management
├── data/               # Static data files
│   ├── menuLinks.json  # Navigation menu configuration
│   ├── payslips.json   # Sample payslip data
│   └── payslips/       # PDF files for payslips
├── lib/                # Utility functions
│   └── utils.ts        # Common utilities
├── routes/             # Vue Router configuration
│   └── index.ts
├── views/              # Page components
│   ├── Benefits.vue
│   ├── Dashboard.vue
│   ├── Leaves.vue
│   ├── MyInformation.vue
│   ├── MyPayslips.vue
│   ├── MyTeam.vue
│   ├── OrgChart.vue
│   └── Timesheet.vue
├── assets/             # Static assets (icons, images)
├── App.vue             # Root component
├── main.ts             # Application entry point
└── style.css           # Global styles
```

## 🛠️ Technology Stack

### Core Technologies
- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Vue Router** - Official router for Vue.js
- **Vuex** - State management library

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Reka UI** - Modern Vue component library
- **Lucide Vue Next** - Beautiful icon library
- **Class Variance Authority** - Component variant management

### Development Tools
- **Vue TSC** - TypeScript checking for Vue
- **Vite Plugin Vue** - Vue support for Vite
- **TanStack Vue Table** - Powerful table component

## 📊 Key Features

### Payslip Management
- **Multi-currency support** (USD, EUR)
- **PDF preview** functionality
- **Detailed breakdown** of salary components
- **Filtering by currency** and date ranges
- **Expandable rows** for detailed information

### Navigation & Layout
- **Responsive sidebar** with collapsible functionality
- **Dynamic page titles** based on current route
- **Breadcrumb navigation** for better UX
- **Mobile-friendly** design

### Data Management
- **Composable-based** state management
- **Type-safe** data interfaces
- **Local data storage** with JSON files
- **PDF file handling** for document management

## 🔧 Development Guidelines

### Code Organization

1. **Components**: Place reusable components in `/src/components/`
   - UI components go in `/src/components/ui/`
   - Feature-specific components in the root of `/src/components/`

2. **Composables**: Business logic should be extracted into composables in `/src/composables/`
   - Use the Composition API for reactive state management
   - Export interfaces for type safety

3. **Views**: Page-level components go in `/src/views/`
   - Each view should correspond to a route
   - Keep views focused on layout and composition

4. **Data**: Static data files in `/src/data/`
   - Use JSON for configuration and sample data
   - Keep data files organized by feature

### TypeScript Guidelines

- Always define interfaces for data structures
- Use strict type checking
- Leverage Vue 3's built-in TypeScript support
- Export types from composables for reuse

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the existing design system
- Maintain consistent spacing and typography
- Use CSS custom properties for theme values

### Component Development

```typescript
// Example component structure
<script setup lang="ts">
import { ref, computed } from 'vue'

// Props with TypeScript
interface Props {
  title: string
  items: Array<{ id: string; name: string }>
}

const props = defineProps<Props>()

// Reactive state
const selectedItem = ref<string>('')

// Computed properties
const filteredItems = computed(() => {
  return props.items.filter(item => item.name.includes('filter'))
})

// Methods
const handleSelect = (id: string) => {
  selectedItem.value = id
}
</script>

<template>
  <div class="component-container">
    <!-- Template content -->
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>
```

## 🚀 Deployment

### Production Build

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Environment Configuration

- Development: `http://localhost:3000`
- Production: Configure your hosting service to serve the `dist/` directory

## 📝 Versioning

This project follows [Semantic Versioning](https://semver.org/) principles:

- **Major version** (X.0.0): Breaking changes
- **Minor version** (0.X.0): New features, backward compatible
- **Patch version** (0.0.X): Bug fixes, backward compatible

Current version: `0.0.0` (Initial development)

## 🤝 Contributing

### Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the coding guidelines
   - Add TypeScript types where needed
   - Test your changes thoroughly

3. **Commit your changes**
   ```bash
   git commit -m "feat: add new feature description"
   ```

4. **Push and create a pull request**

### Code Quality

- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add comments for complex logic
- Ensure TypeScript compilation passes

## 📚 Additional Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Vue Router Documentation](https://router.vuejs.org/)

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **TypeScript errors**
   ```bash
   # Check TypeScript compilation
   npm run build
   ```

3. **Dependencies issues**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

## 📄 License

This project is part of the Mercan assessment and is intended for evaluation purposes.

---

For questions or support, please contact the development team or refer to the project documentation.