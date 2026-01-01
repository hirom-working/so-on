interface CassetteProps {
    isPlaying: boolean
}

export const Cassette = ({ isPlaying }: CassetteProps) => {
    return (
        <div className="w-full aspect-[1.6/1] bg-[#222] rounded-lg p-1.5 shadow-2xl relative overflow-hidden">
            {/* Casing Texture (Subtle Noise) */}
            <div className="absolute inset-0 bg-plastic-texture opacity-20 pointer-events-none mix-blend-overlay" />

            {/* Main Body Plastic */}
            <div className="w-full h-full bg-[#E3DAC9] rounded-[4px] relative overflow-hidden flex flex-col items-center shadow-inner">
                {/* Subtle Gradient for lighting on plastic */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/10 pointer-events-none" />

                {/* Screw Holes (Realistic) */}
                <Screw className="top-2 left-2" />
                <Screw className="top-2 right-2" />
                <Screw className="bottom-2 left-2" />
                <Screw className="bottom-2 right-2" />

                {/* Label Area (Paper Texture) */}
                <div className="w-[88%] h-[62%] mt-3 bg-[#FDFCF5] rounded-sm shadow-md relative overflow-hidden transform rotate-[0.2deg]">
                    {/* Paper Texture Overlay */}
                    <div className="absolute inset-0 bg-plastic-texture opacity-10 pointer-events-none" />

                    {/* Aesthetic Stripes - Retro Colors */}
                    <div className="absolute top-0 w-full h-8 bg-retro-primary/90 mix-blend-multiply" />
                    <div className="absolute top-8 w-full h-2 bg-retro-secondary/80 mix-blend-multiply" />

                    {/* Side Letter (A-side) */}
                    <div className="absolute top-3 left-3 text-2xl font-black text-retro-dark opacity-20 font-sans">A</div>

                    {/* Title */}
                    <div className="mt-12 ml-6">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 rounded-full bg-retro-primary" />
                            <div className="text-[10px] tracking-[0.2em] font-bold text-retro-dark/60 uppercase">High Fidelity</div>
                        </div>
                        <div className="font-handwriting text-retro-dark text-xl font-bold -rotate-1 opacity-90">
                            Lo-Fi Sleep
                        </div>
                    </div>

                    {/* Window Cutout - The most complex part */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[72%] h-[42%] bg-[#2A2A2A] rounded-2xl shadow-deep-inset flex items-center justify-center gap-8 px-4 border border-white/10">
                        {/* Window Glass Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none rounded-2xl" />

                        {/* Reel Left */}
                        <Reel isPlaying={isPlaying} tapeAmount="large" />

                        {/* Center Tape Guide */}
                        <div className="w-full h-12 bg-transparent relative z-0 flex items-center justify-center opacity-30">
                            <div className="w-full h-[1px] bg-white/20" />
                        </div>

                        {/* Reel Right */}
                        <Reel isPlaying={isPlaying} tapeAmount="small" />
                    </div>
                </div>

                {/* Bottom Trapezoid Area (Magnetic Head Access) */}
                <div className="absolute bottom-0 w-[68%] h-[22%] bg-[#Cbc0ad] clip-path-trapezoid flex items-center justify-center gap-12 shadow-[0_-2px_4px_rgba(0,0,0,0.1)]">
                    {/* Guide Holes */}
                    <div className="w-3 h-3 rounded-full bg-[#1a1a1a] shadow-inner ring-1 ring-white/30" />
                    <div className="w-3 h-3 rounded-full bg-[#1a1a1a] shadow-inner ring-1 ring-white/30" />
                </div>

            </div>
        </div>
    )
}

const Screw = ({ className }: { className: string }) => (
    <div className={`absolute w-2.5 h-2.5 rounded-full bg-zinc-400 shadow-inner flex items-center justify-center ${className}`}>
        <div className="w-full h-[1px] bg-zinc-600 rotate-45" />
        <div className="w-full h-[1px] bg-zinc-600 -rotate-45" />
    </div>
)

const Reel = ({ isPlaying, tapeAmount }: { isPlaying: boolean, tapeAmount: 'large' | 'small' }) => {
    const tapeSize = tapeAmount === 'large' ? 'w-10 h-10' : 'w-7 h-7'

    return (
        <div className={`relative z-10 flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>

            {/* Tape Roll (Dark Brown Magnetic Tape) */}
            <div className={`${tapeSize} rounded-full bg-[#3d2b1f] shadow-lg flex items-center justify-center transition-all duration-1000 border border-[#2a1d15]`}>
                {/* Reel Hub (White Plastic) */}
                <div className="w-5 h-5 bg-white rounded-full relative shadow-sm">
                    {/* Spokes (Teeth) */}
                    {[0, 60, 120, 180, 240, 300].map(deg => (
                        <div
                            key={deg}
                            className="absolute top-1/2 left-1/2 w-[3px] h-[8px] bg-white origin-bottom -translate-x-1/2 -translate-y-1/2 rounded-t-sm"
                            style={{ transform: `translateX(-50%) translateY(-50%) rotate(${deg}deg) translateY(-6px)` }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
