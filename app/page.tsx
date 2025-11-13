import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import FeaturedProjects from '@/components/FeaturedProjects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </main>
  )
}
