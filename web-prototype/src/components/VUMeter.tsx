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

        // Simulate needle movement
        const interval = setInterval(() => {
            // Random movement between -10 and 20 degrees
            const target = -30 + Math.random() * 40
            setNeedleRotation(prev => prev + (target - prev) * 0.2)
        }, 50)

        return () => clearInterval(interval)
    }, [isPlaying])

    return (
        <div className="w-full h-full bg-[#E5CFA5] rounded-xl border border-white/40 shadow-inner p-2 relative flex flex-col items-center justify-end overflow-hidden">
            {/* Scale Marks */}
            <div className="absolute top-4 w-[90%] h-[90%] rounded-t-full border-t-[10px] border-retro-black/10" />

            {/* Needle */}
            <div
                className="absolute bottom-2 left-1/2 w-1 h-20 bg-retro-accent3 origin-bottom rounded-full transition-transform duration-75 shadow-sm z-10"
                style={{ transform: `translateX(-50%) rotate(${needleRotation}deg)` }}
            />

            {/* Pivot */}
            <div className="absolute bottom-1 left-1/2 w-4 h-4 bg-retro-black rounded-full -translate-x-1/2 z-20 shadow-md" />

            {/* Label */}
            <span className="text-[10px] font-bold text-retro-black/50 mb-1 z-0">VU L/R</span>
        </div>
    )
}
