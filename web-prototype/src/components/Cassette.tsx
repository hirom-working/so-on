interface CassetteProps {
    isPlaying: boolean
    progress?: number // 0 (start) to 1 (end)
}

export const Cassette = ({ isPlaying, progress = 0 }: CassetteProps) => {
    // Calculate tape amounts based on progress
    const leftTapeRatio = progress
    const rightTapeRatio = 1 - progress

    return (
        <div className="w-full aspect-[1.6/1] bg-gradient-to-br from-[#9BA892] via-[#7F8C76] to-[#65705B] rounded-lg relative overflow-hidden shadow-2xl flex flex-col items-center">
            {/* SVG Noise Filter Definition */}
            <svg className="hidden">
                <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                    <feColorMatrix type="saturate" values="0" />
                    <feComponentTransfer>
                        <feFuncR type="linear" slope="0.5" />
                        <feFuncG type="linear" slope="0.5" />
                        <feFuncB type="linear" slope="0.5" />
                    </feComponentTransfer>
                </filter>
            </svg>

            {/* Subtle Lighting Highlights */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/10 pointer-events-none" />
            
            {/* Casing Texture (SVG Noise for Strong Earthy Feel) */}
            <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay" style={{ filter: 'url(#noiseFilter)' }} />
            <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply" style={{ filter: 'url(#noiseFilter)' }} />

            {/* Main Body Plastic - Depth details */}
            <div className="absolute inset-0 rounded-lg border border-white/30 pointer-events-none" />
            <div className="absolute inset-[1px] rounded-[7px] border border-black/5 pointer-events-none" />

            {/* Edge Highlights */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/60" />
            <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-white/40" />

            {/* Edge Shadows */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/20" />
            <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-black/15" />

            {/* Screw Holes (Realistic) */}
            <Screw className="top-2.5 left-2.5" />
            <Screw className="top-2.5 right-2.5" />
            <Screw className="bottom-2.5 left-2.5" />
            <Screw className="bottom-2.5 right-2.5" />

            {/* Label Area (Paper Texture) */}
            <div className="w-[88%] h-[62%] mt-3.5 bg-[#FDFCF5] rounded-sm shadow-md relative overflow-hidden transform rotate-[0.2deg]">
                {/* Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ filter: 'url(#noiseFilter)' }} />

                {/* Paper Edge Wear */}
                <div className="absolute inset-0 border border-[#e0d8c8] rounded-sm pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-b from-black/5 to-transparent" />

                {/* Aesthetic Stripes - Retro Colors */}
                <div className="absolute top-0 w-full h-8 bg-retro-primary/90 mix-blend-multiply" />
                <div className="absolute top-8 w-full h-2 bg-retro-secondary/80 mix-blend-multiply" />

                {/* Stripe Gloss */}
                <div className="absolute top-0 w-full h-8 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

                {/* Handwritten Label */}
                <div className="absolute top-[6px] left-0 right-0 flex justify-center z-20">
                    <div
                        className="text-[#1a1a1a] text-[14px] -rotate-[0.5deg]"
                        style={{
                            fontFamily: "'Caveat', cursive",
                            fontWeight: 500
                        }}
                    >
                        sentakuki 2026/01/04
                    </div>
                </div>

                {/* Window Cutout */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[38%] w-[74%] h-[44%] bg-[#1a1a1a] rounded-xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.8),inset_0_-1px_2px_rgba(255,255,255,0.1)] flex items-center justify-center gap-6 px-3 border border-[#333]">
                    {/* Window Depth Layer */}
                    <div className="absolute inset-[2px] rounded-[10px] bg-gradient-to-b from-[#252525] to-[#1a1a1a] pointer-events-none" />

                    {/* Window Glass Effect */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent" />
                        <div className="absolute top-0 left-[20%] w-[30%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg]" />
                    </div>

                    {/* Reel Left */}
                    <Reel isPlaying={isPlaying} tapeRatio={leftTapeRatio} />

                    {/* Center Tape Path */}
                    <div className="w-full h-10 relative z-0 flex items-center justify-center">
                        <div className="absolute w-full h-[3px] bg-gradient-to-b from-[#4a3828] via-[#3d2b1f] to-[#2a1d15] shadow-sm" />
                    </div>

                    {/* Reel Right */}
                    <Reel isPlaying={isPlaying} tapeRatio={rightTapeRatio} />
                </div>
            </div>

            {/* Bottom Area (Magnetic Head Access) */}
            <div className="absolute bottom-0 w-[68%] h-[22%] bg-gradient-to-b from-[#7F8C76] to-[#65705B] clip-path-trapezoid flex items-center justify-center gap-10 shadow-[0_-2px_6px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.4)] border-t border-black/5">
                {/* Surface texture */}
                <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay" style={{ filter: 'url(#noiseFilter)' }} />
                <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply" style={{ filter: 'url(#noiseFilter)' }} />

                {/* Guide Holes */}
                <GuideHole />
                <div className="w-8 h-3 bg-[#2a2a2a] rounded-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]" />
                <GuideHole />
            </div>
        </div>
    )
}

const Screw = ({ className }: { className: string }) => (
    <div className={`absolute w-3 h-3 rounded-full bg-gradient-to-br from-[#8F9C86] via-[#7A8771] to-[#5F6956] shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.5)] flex items-center justify-center ${className}`}>
        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#7A8771] to-[#8F9C86] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] flex items-center justify-center">
            <div className="absolute w-[1px] h-1.5 bg-[#3A4A40] rotate-45 shadow-[0_0_1px_rgba(0,0,0,0.3)]" />
            <div className="absolute w-[1px] h-1.5 bg-[#3A4A40] -rotate-45 shadow-[0_0_1px_rgba(0,0,0,0.3)]" />
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
                        className="absolute top-1/2 left-1/2 w-[3px] h-[9px] bg-gradient-to-b from-[#e8e8e8] to-[#c0c0c0] origin-center rounded-t-sm shadow-[0_0_1px_rgba(0,0,0,0.3)]"
                        style={{ transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-6px)` }}
                    />
                ))}
            </div>
        </div>
    )
}