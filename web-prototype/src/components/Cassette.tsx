interface CassetteProps {
    isPlaying: boolean
    progress?: number // 0 (start) to 1 (end)
}

export const Cassette = ({ isPlaying, progress = 0 }: CassetteProps) => {
    // Calculate tape amounts based on progress
    const leftTapeRatio = progress
    const rightTapeRatio = 1 - progress

    return (
        <div className="h-full aspect-[1/1.6] bg-[#1a1a1a] rounded-lg p-1.5 shadow-2xl relative overflow-hidden">
            {/* Outer Shell Bevel */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#3a3a3a] via-[#222] to-[#111] pointer-events-none" />

            {/* Casing Texture (Subtle Noise) */}
            <div className="absolute inset-0 bg-plastic-texture opacity-30 pointer-events-none mix-blend-overlay" />

            {/* Main Body Plastic - Horizontal flex to stack Trapezoid(left), Window(middle), Label(right) after 90deg CW rotation */}
            <div className="w-full h-full bg-gradient-to-br from-[#EDE5D5] via-[#E3DAC9] to-[#D8CFBF] rounded-[4px] relative overflow-hidden flex flex-row items-stretch shadow-inner">
                {/* Subtle Gradient for lighting on plastic */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-black/15 pointer-events-none" />

                {/* Screw Holes (Repositioned for vertical) */}
                <Screw className="top-2 left-2" />
                <Screw className="top-2 right-2" />
                <Screw className="bottom-2 left-2" />
                <Screw className="bottom-2 right-2" />

                {/* Left Section (Former Bottom Trapezoid Area) */}
                <div className="w-[20%] h-full flex flex-col items-center justify-center gap-10 bg-gradient-to-r from-[#c5baaa] to-[#d4c9b9] shadow-[2px_0_6px_rgba(0,0,0,0.15),inset_-1px_0_0_rgba(255,255,255,0.4)] relative">
                     <div className="absolute inset-0 bg-plastic-texture opacity-10 pointer-events-none" />
                     <GuideHole />
                     <div className="w-3 h-8 bg-[#2a2a2a] rounded-sm shadow-[inset_2px_0_4px_rgba(0,0,0,0.5)]" />
                     <GuideHole />
                </div>

                {/* Right Section (Window + Label Area) */}
                <div className="flex-1 flex flex-row items-stretch m-2 mr-3">
                    {/* Window Area */}
                    <div className="flex-[1.5] bg-[#1a1a1a] rounded-xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] border border-[#333] relative overflow-hidden flex flex-col items-center justify-center gap-6 py-4">
                         {/* Window Depth Layer */}
                        <div className="absolute inset-[2px] rounded-[10px] bg-gradient-to-b from-[#252525] to-[#1a1a1a] pointer-events-none" />

                        {/* Window Glass Effect */}
                        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none z-10">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent" />
                        </div>

                        {/* Reel Top (Former Left) */}
                        <Reel isPlaying={isPlaying} tapeRatio={leftTapeRatio} />

                        {/* Tape Path (Vertical) */}
                        <div className="w-10 h-full relative z-0 flex items-center justify-center">
                            <div className="absolute w-[3px] h-full bg-gradient-to-r from-[#4a3828] via-[#3d2b1f] to-[#2a1d15] shadow-sm" />
                        </div>

                        {/* Reel Bottom (Former Right) */}
                        <Reel isPlaying={isPlaying} tapeRatio={rightTapeRatio} />
                    </div>

                    {/* Label Area */}
                    <div className="flex-1 bg-[#FDFCF5] ml-1 rounded-sm shadow-md relative overflow-hidden flex items-center justify-center">
                        {/* Paper Texture Overlay */}
                        <div className="absolute inset-0 bg-plastic-texture opacity-15 pointer-events-none" />

                        {/* Aesthetic Stripes - Rotated */}
                        <div className="absolute left-0 h-full w-4 bg-retro-primary/90 mix-blend-multiply" />
                        <div className="absolute left-4 h-full w-1.5 bg-retro-secondary/80 mix-blend-multiply" />

                        {/* Handwritten Label - Rotated Vertical */}
                        <div
                            className="text-[#1a1a1a] text-[16px] transform rotate-90 whitespace-nowrap"
                            style={{
                                fontFamily: "'Caveat', cursive",
                                fontWeight: 500
                            }}
                        >
                            sentakuki 2026/01/04
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Screw = ({ className }: { className: string }) => (
    <div className={`absolute w-3 h-3 rounded-full bg-gradient-to-br from-[#a8a8a8] via-[#888] to-[#666] shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)] flex items-center justify-center z-20 ${className}`}>
        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#777] to-[#999] shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] flex items-center justify-center">
            <div className="absolute w-[1px] h-1.5 bg-[#444] rotate-45" />
            <div className="absolute w-[1px] h-1.5 bg-[#444] -rotate-45" />
        </div>
    </div>
)

const GuideHole = () => (
    <div className="w-3.5 h-3.5 rounded-full bg-[#1a1a1a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_0.5px_0_rgba(255,255,255,0.3)] relative">
        <div className="absolute inset-[2px] rounded-full bg-[#0a0a0a]" />
    </div>
)

const Reel = ({ isPlaying, tapeRatio }: { isPlaying: boolean, tapeRatio: number }) => {
    const minSize = 28
    const maxSize = 44
    const tapeSize = minSize + (maxSize - minSize) * tapeRatio

    return (
        <div className={`relative z-10 w-11 h-11 flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>
            <div
                className="absolute rounded-full bg-black/30 blur-[2px] translate-y-[1px]"
                style={{ width: tapeSize, height: tapeSize }}
            />
            <div
                className="absolute rounded-full bg-gradient-to-br from-[#4a3828] via-[#3d2b1f] to-[#2a1d15] shadow-lg flex items-center justify-center transition-all duration-300 border border-[#1a1008]"
                style={{ width: tapeSize - 4, height: tapeSize - 4 }}
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                {tapeRatio > 0.3 && <div className="absolute inset-[3px] rounded-full border border-[#2a1d15]/50" />}
                {tapeRatio > 0.5 && <div className="absolute inset-[6px] rounded-full border border-[#2a1d15]/30" />}
            </div>
            <div className="absolute w-5 h-5 rounded-full bg-gradient-to-br from-[#f0f0f0] via-[#d0d0d0] to-[#a0a0a0] shadow-[0_1px_3px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.8)]">
                <div className="absolute inset-[6px] rounded-full bg-gradient-to-br from-[#888] to-[#bbb] shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]" />
                {[0, 60, 120, 180, 240, 300].map(deg => (
                    <div
                        key={deg}
                        className="absolute top-1/2 left-1/2 w-[2px] h-[8px] bg-gradient-to-b from-[#e8e8e8] to-[#c0c0c0] origin-center rounded-t-sm"
                        style={{ transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-5px)` }}
                    />
                ))}
            </div>
        </div>
    )
}