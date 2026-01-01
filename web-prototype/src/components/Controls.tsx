import { Play, Square, Settings } from 'lucide-react'

interface ControlsProps {
    isPlaying: boolean
    onPlay: () => void
    onStop: () => void
}

export const Controls = ({ isPlaying, onPlay, onStop }: ControlsProps) => {
    return (
        <div className="w-full h-full flex items-center justify-center gap-8">
            {/* Play Button */}
            <button
                onClick={onPlay}
                className={`
          w-16 h-16 rounded-full flex items-center justify-center
          transition-all duration-100 active:scale-95 shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.5)]
          ${isPlaying ? 'bg-retro-accent1 text-white shadow-inner' : 'bg-[#EFD5B0] text-retro-black'}
        `}
            >
                <Play size={24} fill="currentColor" className={isPlaying ? 'opacity-100' : 'opacity-80'} />
            </button>

            {/* Stop Button */}
            <button
                onClick={onStop}
                className={`
          w-16 h-16 rounded-full flex items-center justify-center
          transition-all duration-100 active:scale-95 shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.5)]
          ${!isPlaying ? 'bg-retro-accent3 text-white shadow-inner' : 'bg-[#EFD5B0] text-retro-black'}
        `}
            >
                <Square size={20} fill="currentColor" className={!isPlaying ? 'opacity-100' : 'opacity-80'} />
            </button>

            {/* Settings Button */}
            <button
                className="
          w-12 h-12 rounded-full flex items-center justify-center bg-[#EFD5B0] text-retro-black opacity-60 hover:opacity-100
          transition-all duration-100 active:scale-95 shadow-[2px_2px_5px_rgba(0,0,0,0.05),-2px_-2px_5px_rgba(255,255,255,0.4)]
        "
            >
                <Settings size={20} />
            </button>
        </div>
    )
}
