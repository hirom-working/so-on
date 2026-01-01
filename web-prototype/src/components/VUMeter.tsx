import { useEffect, useState } from 'react'

interface VUMeterProps {
    isPlaying: boolean
}

export const VUMeter = ({ isPlaying }: VUMeterProps) => {
    const [needleRotation, setNeedleRotation] = useState(-45)

    useEffect(() => {
        if (!isPlaying) {
            setNeedleRotation(-45)
            return
        }

        const interval = setInterval(() => {
            // More organic jitter for realism
            const target = -25 + (Math.random() * 35) + (Math.sin(Date.now() / 200) * 10)
            setNeedleRotation(prev => prev + (target - prev) * 0.15)
        }, 40)

        return () => clearInterval(interval)
    }, [isPlaying])

    return (
        <div className="w-full h-full bg-[#f0e6d2] rounded-lg border-2 border-[#d0c0a0] shadow-inner p-1 relative flex flex-col items-center justify-end overflow-hidden group">
            {/* Background Scale Graphics */}
            <div className="absolute top-2 left-0 w-full text-center">
                <div className="text-[8px] font-bold text-retro-dark/40 tracking-wider">LEVEL</div>
            </div>

            {/* Arced Scale Lines */}
            <svg className="absolute top-4 w-[90%] h-[80%] overflow-visible" viewBox="0 0 100 60">
                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#a09070" strokeWidth="2" strokeLinecap="round" />
                {/* Tick Marks */}
                <path d="M 10 50 L 15 45" stroke="#a09070" strokeWidth="1" />
                <path d="M 50 10 L 50 18" stroke="#a09070" strokeWidth="2" />
                <path d="M 90 50 L 85 45" stroke="#d97d54" strokeWidth="2" /> {/* Red zone */}
            </svg>

            {/* Glass Reflection Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none rounded-lg z-20" />

            {/* Needle Shadow (Blurry, offset) */}
            <div
                className="absolute bottom-[10px] left-1/2 w-[2px] h-[55px] bg-black/10 origin-bottom blur-[1px] z-0"
                style={{ transform: `translateX(-50%) rotate(${needleRotation + 4}deg)` }}
            />

            {/* Needle Real */}
            <div
                className="absolute bottom-[10px] left-1/2 w-[1.5px] h-[55px] bg-retro-primary origin-bottom transition-transform duration-75 z-10"
                style={{ transform: `translateX(-50%) rotate(${needleRotation}deg)` }}
            />

            {/* Pivot Cap */}
            <div className="absolute bottom-[4px] left-1/2 w-3 h-3 bg-[#333] rounded-full -translate-x-1/2 z-20 shadow-sm border border-white/20" />
        </div>
    )
}
