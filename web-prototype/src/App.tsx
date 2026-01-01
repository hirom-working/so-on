import { useState, useRef, useEffect } from 'react'
import { Cassette } from './components/Cassette'
import { VUMeter } from './components/VUMeter'
import { TimeDial } from './components/TimeDial'
import { Controls } from './components/Controls'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(30)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio('./audio.m4a')
    audioRef.current = audio

    audio.addEventListener('ended', () => {
      setIsPlaying(false)
    })

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#dcd5cd] p-4 flex flex-col items-center justify-center font-sans text-retro-dark select-none">

      {/* Device Casing */}
      <div className="
        w-full max-w-[380px] bg-[#F4E4BC] rounded-[40px] p-6 
        shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] 
        aspect-[9/18] flex flex-col gap-6 relative overflow-hidden border-8 border-[#fcf5e8]
      ">
        {/* Subtle Noise Texture on Casing */}
        <div className="absolute inset-0 bg-plastic-texture opacity-30 pointer-events-none" />

        {/* Brand / Top Section */}
        <div className="h-4 flex justify-between items-center px-2 opacity-50">
          <div className="flex gap-1">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-1 h-3 bg-retro-dark rounded-full" />
            ))}
          </div>
          <div className="text-[10px] font-bold tracking-[0.3em]">and so on</div>
        </div>

        {/* Display / Meter Section */}
        <div className="flex gap-4 h-36 bg-[#4a4540] rounded-2xl p-4 shadow-inner relative z-10 border-b-2 border-white/10">
          <div className="w-1/2">
            <VUMeter isPlaying={isPlaying} />
          </div>
          <div className="w-1/2">
            <TimeDial value={duration} onChange={setDuration} />
          </div>
        </div>

        {/* Cassette Deck Section */}
        <div className="flex-1 flex items-center justify-center p-2 bg-[#d6ccbc] rounded-xl shadow-inner border border-white/50 relative z-10">
          <Cassette isPlaying={isPlaying} />
        </div>

        {/* Control Section */}
        <div className="h-28 relative z-10">
          <Controls
            isPlaying={isPlaying}
            onPlay={handlePlay}
            onStop={handleStop}
          />
        </div>
      </div>

      <div className="mt-8 text-retro-dark/40 text-xs font-mono">
        DESIGN PROTOTYPE v2.0
      </div>
    </div>
  )
}

export default App
