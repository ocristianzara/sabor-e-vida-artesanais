import React from 'react'
import ReactDOM from 'react-dom/client'
import { Nav } from '@/components/site/Nav'
import { Hero } from '@/components/site/Hero'
import { ScrollStory } from '@/components/site/ScrollStory'
import { Gallery } from '@/components/site/Gallery'
import { Founder } from '@/components/site/Founder'
import { FinalCta } from '@/components/site/FinalCta'
import { Footer } from '@/components/site/Footer'
import './index.css'

function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <ScrollStory />
      <Gallery />
      <Founder />
      <FinalCta />
      <Footer />
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
