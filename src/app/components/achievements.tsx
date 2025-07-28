import type React from "react"
import { Users, Code, Stethoscope } from "lucide-react"

interface AchievementProps {
  icon: React.ReactNode
  title: string
  value: string
  description: string
}

export function Achievement({ icon, title, value, description }: AchievementProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start">
      <div className="mr-4 bg-emerald-50 p-3 rounded-full text-emerald-600">{icon}</div>
      <div>
        <h4 className="font-bold text-gray-800">{title}</h4>
        <p className="text-2xl font-bold text-emerald-600 my-1">{value}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}

export function Achievements() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Achievement
        icon={<Users size={24} />}
        title="Students Mentored"
        value="300+"
        description="In programming and tech skills"
      />
      <Achievement
        icon={<Code size={24} />}
        title="Projects Completed"
        value="25+"
        description="Web applications and AI Agents"
      />
      <Achievement
        icon={<Stethoscope size={24} />}
        title="Medical Experience"
        value="5+ years"
        description="As licensed Homeopathic Doctor"
      />
    </div>
  )
}
