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
        setRotation(prev => prev + 72)
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-between py-1">
            {/* Knob Container */}
            <div
                className="
            relative w-20 h-20 rounded-full 
            bg-gradient-to-br from-[#e6d8c3] to-[#cbbba0]
            shadow-[3px_3px_8px_rgba(0,0,0,0.15),-2px_-2px_6px_rgba(255,255,255,0.6)]
            flex items-center justify-center cursor-pointer 
            active:scale-[0.98] transition-all duration-300 ease-out
            border-4 border-[#e9e0d2]
        "
                onClick={handleClick}
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                {/* Grip Texture (Ribs) */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-3 bg-retro-dark/10 rounded-full"
                        style={{
                            top: 2,
                            left: '50%',
                            transform: `translateX(-50%) rotate(${i * 30}deg)`,
                            transformOrigin: '50% 36px'
                        }}
                    />
                ))}

                {/* Indicator Dot */}
                <div className="absolute top-3 w-2.5 h-2.5 rounded-full bg-retro-secondary shadow-inset box-shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)]" />

                {/* Center Cap */}
                <div className="w-10 h-10 rounded-full bg-[#dccdb4] shadow-soft-pressed border border-white/20" />
            </div>

            <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-retro-dark opacity-80" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {value}
                </span>
                <span className="text-[10px] font-bold text-retro-secondary tracking-[0.2em]">MINUTES</span>
            </div>
        </div>
    )
}
