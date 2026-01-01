import { useState } from 'react'
import { Cassette } from './components/Cassette'
import { VUMeter } from './components/VUMeter'
import { TimeDial } from './components/TimeDial'
import { Controls } from './components/Controls'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(30) // minutes

  return (
    <div className="min-h-screen bg-retro-bg p-8 flex flex-col items-center justify-center font-sans text-retro-black select-none">
      {/* Main Device Container */}
      <div className="w-full max-w-md bg-retro-bg/50 rounded-[3rem] p-6 shadow-xl border border-white/20 aspect-[9/16] flex flex-col gap-6 relative overflow-hidden">

        {/* Top Section: VU Meter & Dial */}
        <div className="flex gap-4 h-32">
          <div className="flex-1">
            <VUMeter isPlaying={isPlaying} />
          </div>
          <div className="flex-1">
            <TimeDial value={duration} onChange={setDuration} />
          </div>
        </div>

        {/* Middle Section: Cassette */}
        <div className="flex-1 flex items-center justify-center">
          <Cassette isPlaying={isPlaying} />
        </div>

        {/* Bottom Section: Controls */}
        <div className="h-24">
          <Controls
            isPlaying={isPlaying}
            onPlay={() => setIsPlaying(true)}
            onStop={() => setIsPlaying(false)}
          />
        </div>

      </div>

      {/* Footer / Debug info */}
      <div className="mt-8 text-retro-accent3 text-sm opacity-50">
        So-On Prototype v0.1
      </div>
    </div>
  )
}

export default App
