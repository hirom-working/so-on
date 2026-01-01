import { Play, Square, Settings } from 'lucide-react'

interface ControlsProps {
    isPlaying: boolean
    onPlay: () => void
    onStop: () => void
}

export const Controls = ({ isPlaying, onPlay, onStop }: ControlsProps) => {
    return (
        <div className="w-full h-full flex items-center justify-center gap-10">
            {/* Play Button - Metallic Tactile Feel */}
            <button
                onClick={onPlay}
                className={`
          group relative w-20 h-20 rounded-full flex items-center justify-center
          transition-all duration-200 active:scale-95
          ${isPlaying
                        ? 'shadow-soft-pressed bg-retro-primary text-white/90'
                        : 'shadow-soft-raised bg-gradient-to-br from-[#f0f0f0] to-[#d4d4d4] text-retro-dark'
                    }
        `}
            >
                {/* Button Ring Detail */}
                <div className={`
           absolute inset-0 rounded-full border-[1px] 
           ${isPlaying ? 'border-transparent' : 'border-white/50'}
        `} />

                <Play
                    size={28}
                    fill="currentColor"
                    className={`
            transition-all duration-200 
            ${isPlaying ? 'scale-90 opacity-100 drop-shadow-sm' : 'opacity-70 group-hover:opacity-100'}
          `}
                />
            </button>

            {/* Stop Button */}
            <button
                onClick={onStop}
                className={`
          group relative w-20 h-20 rounded-full flex items-center justify-center
          transition-all duration-200 active:scale-95
          ${!isPlaying
                        ? 'shadow-soft-pressed bg-retro-secondary text-white/90'
                        : 'shadow-soft-raised bg-gradient-to-br from-[#f0f0f0] to-[#d4d4d4] text-retro-dark'
                    }
        `}
            >
                <div className={`
           absolute inset-0 rounded-full border-[1px] 
           ${!isPlaying ? 'border-transparent' : 'border-white/50'}
        `} />

                <Square
                    size={24}
                    fill="currentColor"
                    className={`
            transition-all duration-200
            ${!isPlaying ? 'scale-90 opacity-100 drop-shadow-sm' : 'opacity-70 group-hover:opacity-100'}
          `}
                />
            </button>

            {/* Settings Button - Smaller metal knob style */}
            <button
                className="
          w-14 h-14 rounded-full flex items-center justify-center 
          bg-gradient-to-b from-[#e0e0e0] to-[#c0c0c0]
          shadow-soft-raised text-retro-dark/60 hover:text-retro-dark
          transition-all duration-200 active:scale-95 active:shadow-soft-pressed
          border border-white/40
        "
            >
                <Settings size={22} className="drop-shadow-sm" />
            </button>
        </div>
    )
}
