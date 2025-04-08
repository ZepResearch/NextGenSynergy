


export function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative rounded-2xl border border-purple-400/20 bg-purple-900/10 p-6 backdrop-blur-sm transition-all hover:bg-purple-900/20">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative flex flex-col gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/30 backdrop-blur-sm">
          {icon}
        </div>

        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <p className="text-purple-100/70">{description}</p>
      </div>
    </div>
  )
}

