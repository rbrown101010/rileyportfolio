"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Content Creator Journey",
    description:
      "Pioneering the vibe-coding movement, creating content that makes coding accessible and enjoyable for everyone through innovative AI-powered approaches.",
    tech: ["AI Tools", "Video Production", "Educational Content", "Community Building"],
    image: "/FeaturedImages/contentcreatorjourney.png",
  },
  {
    id: 2,
    title: "Software Composers",
    description:
      "Founded an AI vibe-coding community that's revolutionizing how people approach software development, fostering creativity and innovation without traditional coding.",
    tech: ["Community Building", "AI Integration", "Educational Platform", "Mentorship"],
    image: "/FeaturedImages/SoftwareComposer.png",
  },
  {
    id: 3,
    title: "Yapthread",
    description:
      "Developed an innovative application that demonstrates the power of vibe-coding, showcasing how modern AI tools can replace traditional development approaches.",
    tech: ["AI Development", "No-Code Tools", "User Experience", "Product Design"],
    image: "/FeaturedImages/yapthread.jpeg",
  },
  {
    id: 4,
    title: "Full Cursor Vibe-Coding",
    description:
      "Created an comprehensive video showcasing the complete vibe-coding process, demonstrating how to build complex applications without traditional coding.",
    tech: ["Video Production", "AI Tools", "Educational Content", "Technical Documentation"],
    image: "/FeaturedImages/FullCursorVid.jpg",
  },
  {
    id: 5,
    title: "Social Media Influence",
    description:
      "Built a following of 1M+ across social media platforms, sharing insights about AI-powered development and revolutionizing how people think about coding.",
    tech: ["Content Strategy", "Social Media", "Community Engagement", "Brand Building"],
    image: "/FeaturedImages/socialmediainfl.png",
  },
  {
    id: 6,
    title: "Send an Agent",
    description:
      "Created a comprehensive platform educating people about AI agents and their practical applications, making advanced AI technology accessible to everyone.",
    tech: ["AI Education", "Platform Development", "User Guides", "Technical Writing"],
    image: "/FeaturedImages/sendanagent.png",
  },
]

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const [previousProject, setPreviousProject] = useState<(typeof projects)[0] | null>(null)
  const [isFlipping, setIsFlipping] = useState(false)

  const handleProjectSelect = (project: (typeof projects)[0]) => {
    if (project.id === selectedProject.id) return
    setIsFlipping(true)
    setPreviousProject(selectedProject)
    setTimeout(() => {
      setSelectedProject(project)
      setIsFlipping(false)
    }, 300)
  }

  return (
    <main className="min-h-screen p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="md:ml-[8%]">
          <header className="mb-16 animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl mb-4">Riley Brown</h1>
            <p className="text-xl md:text-2xl text-gray-600 font-inter">
              Just a guy, vibe coding.
            </p>
          </header>

          <section className="mb-16 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl md:text-4xl mb-6">Hey, I'm Riley Brown</h2>
            <p className="text-lg md:text-xl text-gray-700 font-inter max-w-2xl">
              My mission is to be a senior developer-level without writing a single line of code, leveraging AI tools and innovative approaches to build amazing things. Through my content and communities, I'm showing the world that the future of coding is more accessible than ever. Literally anyone can do it.
            </p>
          </section>

          <section className="mb-16 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-3xl md:text-4xl mb-6">Featured Projects</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 space-y-4">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedProject.id === project.id
                        ? "bg-[#2c5dcf]/10 border-l-4 border-[#2c5dcf]"
                        : "bg-white hover:bg-gray-100"
                    }`}
                    onClick={() => handleProjectSelect(project)}
                  >
                    <h3
                      className={`text-lg font-semibold mb-2 ${
                        selectedProject.id === project.id ? "text-[#2c5dcf]" : "text-gray-800"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm truncate ${
                        selectedProject.id === project.id ? "text-gray-700" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="w-full md:w-1/2 max-w-2xl">
                <div className="project-stack h-[600px] relative">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className={`project-card ${
                        project.id === selectedProject.id
                          ? "active slide-in-up"
                          : isFlipping && project.id === previousProject?.id
                            ? "exit slide-out-right"
                            : ""
                      }`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full object-cover h-64"
                      />
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4 text-[#2c5dcf]">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <button className="btn-primary inline-flex items-center">
                          View Project <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-3xl md:text-4xl mb-6">Skills & Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "AI Development",
                "Vibe-Coding",
                "Content Creation",
                "Community Building",
                "No-Code Tools",
                "Social Media",
                "AI Integration",
                "Educational Content",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white rounded-md p-4 text-center shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <p className="font-outfit font-semibold text-[#2c5dcf]">{skill}</p>
                </div>
              ))}
            </div>
          </section>

          <footer className="text-center animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
            <h2 className="text-3xl md:text-4xl mb-6">Let's Connect</h2>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-[#2c5dcf] hover:opacity-80 transition-colors">
                <GitHub className="h-8 w-8" />
              </a>
              <a href="#" className="text-[#2c5dcf] hover:opacity-80 transition-colors">
                <Linkedin className="h-8 w-8" />
              </a>
              <a href="#" className="text-[#2c5dcf] hover:opacity-80 transition-colors">
                <Mail className="h-8 w-8" />
              </a>
            </div>
            <button className="btn-primary inline-flex items-center mb-8">
              Reach Out to Me <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <p className="text-gray-600 font-inter">&copy; {new Date().getFullYear()} Riley Brown. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </main>
  )
}

