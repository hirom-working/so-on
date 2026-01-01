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
            {/* Metal Base Plate */}
            <div className="relative w-[88px] h-[88px] rounded-full bg-gradient-to-br from-[#a8a098] via-[#888078] to-[#686058] p-[3px] shadow-[0_3px_6px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                {/* Inner ring */}
                <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-[#787068] to-[#585048]" />

                {/* Knob Container */}
                <div
                    className="
                        relative w-full h-full rounded-full
                        bg-gradient-to-br from-[#f0e8d8] via-[#e0d4c0] to-[#c8bca8]
                        shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-2px_4px_rgba(0,0,0,0.1)]
                        flex items-center justify-center cursor-pointer
                        active:scale-[0.98] transition-all duration-200 ease-out
                    "
                    onClick={handleClick}
                    style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                >
                    {/* Outer edge highlight */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none" />

                    {/* Grip Texture (Ribs) - more realistic */}
                    {[...Array(24)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute"
                            style={{
                                top: '4px',
                                left: '50%',
                                transform: `translateX(-50%) rotate(${i * 15}deg)`,
                                transformOrigin: '50% 38px'
                            }}
                        >
                            <div className="w-[3px] h-[10px] bg-gradient-to-r from-black/10 via-black/5 to-white/20 rounded-full" />
                        </div>
                    ))}

                    {/* Indicator - Metal pointer */}
                    <div className="absolute top-2 flex flex-col items-center">
                        <div className="w-[4px] h-[12px] bg-gradient-to-b from-[#d0d0d0] via-[#a0a0a0] to-[#707070] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.5)]" />
                    </div>

                    {/* Center Cap - Raised */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e8e0d0] via-[#d8ccb8] to-[#c0b4a0] shadow-[0_2px_4px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-1px_2px_rgba(0,0,0,0.1)] relative">
                        {/* Center dimple */}
                        <div className="absolute inset-[14px] rounded-full bg-gradient-to-br from-[#c8bca8] to-[#d8ccb8] shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)]" />
                        {/* Top highlight */}
                        <div className="absolute top-1 left-2 right-2 h-4 bg-gradient-to-b from-white/30 to-transparent rounded-full" />
                    </div>

                    {/* Knob edge shadow */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_-2px_6px_rgba(0,0,0,0.15)] pointer-events-none" />
                </div>
            </div>

            {/* Time Display */}
            <div className="flex flex-col items-center mt-1">
                <div className="relative">
                    <span
                        className="text-3xl font-bold text-retro-dark/85 tabular-nums"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            textShadow: '0 1px 0 rgba(255,255,255,0.5)'
                        }}
                    >
                        {value}
                    </span>
                </div>
                <span className="text-[9px] font-bold text-retro-secondary/80 tracking-[0.2em] mt-[-2px]">MINUTES</span>
            </div>
        </div>
    )
}
