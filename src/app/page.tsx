"use client";

import {
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
  Youtube,
  MapPin,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";

import { Achievements } from "@/src/app/components/achievements";
import { QRCodeComponent } from "@/src/app/components/qr-code";
import { useState } from "react";

export default function CV() {
    const [showQRCode, setShowQRCode] = useState(false)
  return (
    <main className="bg-white min-h-screen p-6 md:p-10 max-w-4xl mx-auto">
      <div className="print:hidden mb-6 flex justify-end">
        <Button
          onClick={() => window.print()}
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          <Download className="mr-2 h-4 w-4" /> Download PDF
        </Button>
      </div>

      <header className="mb-8 border-b-2 border-emerald-600 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          HUMAIZA NAZ
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-emerald-600 mb-4">
          Full Stack Developer | Homeopathic Doctor
        </h2>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-gray-600">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
            <span>Karachi, Pakistan</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-emerald-600" />
            <span>+92 312-0119537</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-emerald-600" />
            <span>humaizaasghar@gmail.com</span>
          </div>
        </div>

        <div className="flex gap-4 mt-3">
          <a
            href="#"
            className="text-emerald-600 hover:text-emerald-800 flex items-center"
          >
            <Linkedin className="h-4 w-4 mr-1" /> LinkedIn
          </a>
          <a
            href="#"
            className="text-emerald-600 hover:text-emerald-800 flex items-center"
          >
            <Github className="h-4 w-4 mr-1" /> GitHub
          </a>
          <a
            href="#"
            className="text-emerald-600 hover:text-emerald-800 flex items-center"
          >
            <Youtube className="h-4 w-4 mr-1" /> KnowHowCoding
          </a>
        </div>
      </header>
 {/* QR Code Section */}
      <section className="mb-4 print:hidden">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-emerald-600 border-b border-gray-200 pb-1 mb-2">QR Code</h3>
          <button
            onClick={() => setShowQRCode(!showQRCode)}
            className="text-emerald-600 border border-emerald-600 hover:bg-emerald-50 px-3 py-1 rounded-md text-sm"
          >
            {showQRCode ? "Hide QR Code" : "Show QR Code"}
          </button>
        </div>
        {showQRCode && (
          <div className="flex justify-center mt-2">
            <QRCodeComponent value="https://www.yourwebsite.com" size={128} />
          </div>
        )}
      </section>
      <section className="mb-6">
        <h3 className="text-lg font-bold text-emerald-600 border-b border-gray-200 pb-1 mb-3">
          PROFESSIONAL SUMMARY
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Dynamic Full Stack Developer and AI Agent Developer proficient in
          React, Node.js, TypeScript, Python, and OpenAI SDK, specializing in
          scalable web applications and AI-driven health-tech solutions.
          Developed a prototype for the Governor Sindh IT Initiative website and
          a Pregnancy Agent for maternal support during GDG hackathons.
          Certified in OpenAI SDK and Agentic AI through PIAIC, with ongoing
          studies in Model Context Protocol (MCP) via PIAIC Cloud. Licensed
          Homeopathic Doctor, merging medical expertise with technology to
          create impactful solutions. Deployed 25+ projects and grew a tech
          community of 500+.
        </p>
      </section>

      <Achievements />

      <section className="mb-6">
        <h3 className="text-lg font-bold text-emerald-600 border-b border-gray-200 pb-1 mb-3">
          TECHNICAL SKILLS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <p className="font-semibold text-gray-800 mb-2">
                Programming Languages
              </p>
             <p>JavaScript (ES6+)</p> 
              <p>TypeScript</p>
              <p>Python</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-gray-800 mb-2">Frontend</p>
              <p>React.js</p>
              <p>Next.js</p>
              <p>Tailwind CSS</p>
              <p>Figma (UI/UX)</p>
            </div>
             <div className="mb-4">
              <p className="font-semibold text-gray-800 mb-2">Backend</p>
              <p>Node.js</p>
              <p>Strapi/Sanity CMS</p>
            </div>
          </div>

          <div>
           

            <div className="mb-4">
              <p className="font-semibold text-gray-800 mb-2">
                Databases & Tools
              </p>
              <p>PostgreSQL</p>
              <p>Vercel/Netlify </p>
            </div>
<div className="mb-4">
              <p className="font-semibold text-gray-800 mb-2">
                AI & Cloud
              </p>
              <p>OpenAI SDK</p>
              <p>Google Cloud AI Studio </p>
              <p>Gemini API</p>
              <p>Open router </p>
              <p>Vertex AI</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-gray-800 mb-2">AI Protocols:</p>
              <p>Studying Model Context Protocol (MCP) via PIAIC Cloud</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-bold text-emerald-600 border-b border-gray-200 pb-1 mb-3">
          PROFESSIONAL EXPERIENCE
        </h3>

        <div className="mb-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
            <h4 className="font-bold text-gray-800">
              Full Stack Developer Intern & Contributor (Freelance + Hackathons)
            </h4>
            <div className="text-gray-600 font-medium">
              Remote & Karachi | 2023–Present
            </div>
          </div>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>
             Developed a prototype for the Governor Sindh IT Initiative website using React, Next.js, and PostgreSQL, designed to support 50,000+ student registrations for AI and IT courses.
            </li>
            <li>
              Built a Pregnancy Agent during GDG Agentic AI Day Hackathon (July 2025) using OpenAI SDK and Google Cloud AI Studio, enabling memory logging, weekly baby updates, event tracking, diary with pictures, and blue/pink theme customization for maternal support.
            </li>
            <li>
              Integrated an AI-driven chatbot into an e-commerce website using OpenAI SDK and TypeScript, streamlining customer queries for retail services [Pending Metrics].
            </li>
            <li>
              Deployed 10+ web applications via Vercel and Netlify, improving UI/UX by 25% with Figma designs.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
            <h4 className="font-bold text-gray-800">
              Student & Leader – Governor Sindh IT Initiative
            </h4>
            <div className="text-gray-600 font-medium">
              Karachi | 2024–Present
            </div>
          </div>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>
              Actively participated as a student in React, Node.js, and Agentic AI courses, leading peer collaboration on 10+ projects.
            </li>
            <li>Contributed to educational content creation, reaching 1,000+ learners through shared resources.</li>
            <li>Coordinated 5+ peers in team-based project development, delivering prototypes under tight deadlines.</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
            <h4 className="font-bold text-gray-800">
              Founder & Director – Educational Coaching Center
            </h4>
            <div className="text-gray-600 font-medium">
              Karachi | 2008–Present
            </div>
          </div>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>
              Established and managed a coaching center serving many students annually, creating curricula for Computer Science and Science
            </li>
            
            <li>
              Integrated technology-driven learning, increasing student engagement by 40%.
</li>
            
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
            <h4 className="font-bold text-gray-800">
              Content Creator – KnowHowCoding (YouTube)
            </h4>
            <div className="text-gray-600 font-medium">2024–Present</div>
          </div>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            
            <li>
              Produced 30+ tutorials on Python, Web Development, AI, and OpenAI SDK, achieving 10,000+ total views [Pending Metrics]
            </li>
            <li>Grew a tech community of 500+ subscribers, focusing on AI and full stack development</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-bold text-emerald-600 border-b border-gray-200 pb-1 mb-3">
          EDUCATION & CERTIFICATIONS
        </h3>

      
        <div className="mb-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <h4 className="font-bold text-gray-800">
              Full Stack Web Development – Governor Sindh IT Initiative
            </h4>
            <div className="text-gray-600 font-medium">2024–Present</div>
          </div>
          <p className="text-gray-700">
            Courses: React, TypeScript, Node.js, Generative AI
          </p>
          <p className="text-gray-700">Specialization: Agentic AI</p>
        </div>

        <div className="mb-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <h4 className="font-bold text-gray-800">
              Python for Data Science & Agentic AI – PIAIC
            </h4>
            <div className="text-gray-600 font-medium"> PIAIC | Completed</div>
          </div>
         
        </div>
<div className="mb-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <h4 className="font-bold text-gray-800">
              GDG Agentic AI Day Hackathon Certificate
            </h4>
            <div className="text-gray-600 font-medium">  July 2025</div>
          </div>
         
        </div>

        <div className="mb-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <h4 className="font-bold text-gray-800">Node.js Crash Course</h4>
            <div className="text-gray-600 font-medium">
              Completed, 2025 (Self-Paced)
            </div>
          </div>
         
        </div>
  <div className="mb-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <h4 className="font-bold text-gray-800">
              DHMS – Diploma in Homeopathic Medical Science
            </h4>
            <div className="text-gray-600 font-medium">2015–2019</div>
          </div>
          <p className="text-gray-700">
            Central Homeopathic College, Karachi | Licensed Homeopathic Doctor
          </p>
        </div>
<div className="mb-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <h4 className="font-bold text-gray-800">
              Intermediate & Matriculation (Science)
            </h4>
            <div className="text-gray-600 font-medium">2011–2015</div>
          </div>
          <p className="text-gray-700">
            Block M College & Faiz-ul-Islam Public School, Karachi
          </p>
        </div>
        <div className="mb-4">
          <h4 className="font-bold text-gray-800 mb-1">
            Additional Certifications
          </h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Ultrasound Training (6 months, 1st Position)</li>
            <li>Acupressure Therapist (1-Year Diploma)</li>
            <li>Hackathon Participation & Leadership Certificates – GIAC</li>
            <li>Clinic Operation License – Certified Practitioner</li>
          </ul>
        </div>

        
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-bold text-emerald-600 border-b border-gray-200 pb-1 mb-3">
          PROJECTS & HACKATHONS
        </h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">
              Governor Sindh IT Initiative Website
            </span>{" "}
            – Developed a prototype using React, Next.js, PostgreSQL, and Tailwind CSS
          </li>
          <li>
            <span className="font-semibold">Pregnancy Agent (GDG Hackathon)</span> –
            Built an AI-driven maternal support agent using OpenAI SDK and Google Cloud AI Studio, featuring memory logging, weekly baby updates, event tracking, diary with pictures, and blue/pink theme customization.
          </li>
          <li>
            <span className="font-semibold">E-Commerce Chatbot:</span> –
          Integrated an AI chatbot into an e-commerce platform for retail services using Gemini and TypeScript.
          </li>
          <li>
            <span className="font-semibold">E-Commerce Website</span> – Designed a real-time analytics website and dashboard with React, Node.js, and Sanity CMS, optimized using Figma UI designs
          </li>
          <li>
            <span className="font-semibold">AI Agents</span> –
            Multi different types of AI agents by using (OpenAI sdk , Gemini)
          </li>
        
        
        </ul>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section>
          <h3 className="text-lg font-bold text-emerald-600 border-b border-gray-200 pb-1 mb-3">
            
            REFERENCES
          </h3>
          <p className="text-gray-700">Available upon request.</p>
          
        </section>

     
      </div>

     
    </main>
  );
}
