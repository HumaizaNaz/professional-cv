interface SkillBarProps {
  skill: string
  percentage: number
}

export function SkillBar({ skill, percentage }: SkillBarProps) {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{skill}</span>
        <span className="text-gray-600 text-sm">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}
