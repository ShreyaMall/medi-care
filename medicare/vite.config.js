import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        departments: resolve(__dirname, 'departments.html'),
        services: resolve(__dirname, 'services.html'),
        doctors: resolve(__dirname, 'doctors.html'),
        appointment: resolve(__dirname, 'appointment.html'),
        contact: resolve(__dirname, 'contact.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        faq: resolve(__dirname, 'faq.html'),
        testimonials: resolve(__dirname, 'testimonials.html'),
        departmentDetails: resolve(__dirname, 'department-details.html'),
        serviceDetails: resolve(__dirname, 'service-details.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        notFound: resolve(__dirname, '404.html'),
      }
    }
  }
})
