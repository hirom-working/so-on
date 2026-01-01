import { useState } from 'react'

interface TimeDialProps {
    value: number
    onChange: (value: number) => void
}

const OPTIONS = [15, 30, 45, 60, 90]

export const TimeDial = ({ value, onChange }: TimeDialProps) => {
    const [rotation, setRotation] = useState(0)

    const handleClick = () => {
        const currentIndex = OPTIONS.indexOf(value)
        const nextIndex = (currentIndex + 1) % OPTIONS.length
        const nextValue = OPTIONS[nextIndex]

        onChange(nextValue)
        setRotation(prev => prev + 72) // 360 / 5 options
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-between py-1">
            <div
                className="w-20 h-20 rounded-full bg-[#D4C3A3] shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.4)] flex items-center justify-center relative cursor-pointer active:scale-95 transition-transform"
                onClick={handleClick}
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                {/* Dial Marker */}
                <div className="absolute top-2 w-2 h-2 rounded-full bg-retro-black/80" />

                {/* Center Knob */}
                <div className="w-12 h-12 rounded-full bg-[#E5D2B3] shadow-inner border border-white/20" />
            </div>

            <div className="text-retro-black font-bold text-lg font-mono">
                {value}<span className="text-xs ml-1 opacity-60">MIN</span>
            </div>
        </div>
    )
}
