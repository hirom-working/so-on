interface CassetteProps {
    isPlaying: boolean
    progress?: number // 0 (start) to 1 (end)
}

export const Cassette = ({ isPlaying, progress = 0 }: CassetteProps) => {
    // Calculate tape amounts based on progress
    // When rotated 90deg clockwise:
    // - Top reel (originally left) starts empty, fills up
    // - Bottom reel (originally right) starts full, empties
    const topTapeRatio = progress
    const bottomTapeRatio = 1 - progress

    return (
        <div className="w-full h-full bg-gradient-to-br from-[#F5F0E6] via-[#EDE5D5] to-[#E3DAC9] rounded-lg shadow-xl relative overflow-hidden flex">
            {/* Subtle Gradient for lighting on plastic */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/10 pointer-events-none" />

            {/* Edge Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/60" />
            <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-white/40" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/15" />
            <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-black/10" />

            {/* Left Section - Magnetic Head Access (trapezoid area) */}
            <div className="w-[22%] h-full bg-gradient-to-r from-[#d8d0c0] to-[#e0d8c8] flex flex-col items-center justify-center gap-6 relative">
                {/* Surface texture */}
                <div className="absolute inset-0 bg-plastic-texture opacity-10 pointer-events-none" />

                {/* Guide Holes */}
                <GuideHole />
                <div className="w-3 h-6 bg-[#2a2a2a] rounded-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]" />
                <GuideHole />
            </div>

            {/* Center Section - Window with Reels */}
            <div className="flex-1 flex flex-col items-center justify-center py-3 relative">
                {/* Window Cutout */}
                <div className="w-[70%] h-[85%] bg-[#1a1a1a] rounded-xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] flex flex-col items-center justify-between py-4 relative">
                    {/* Window Depth Layer */}
                    <div className="absolute inset-[2px] rounded-[10px] bg-gradient-to-b from-[#252525] to-[#1a1a1a] pointer-events-none" />

                    {/* Window Glass Effect */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                    </div>

                    {/* Top Reel */}
                    <Reel isPlaying={isPlaying} tapeRatio={topTapeRatio} />

                    {/* Bottom Reel */}
                    <Reel isPlaying={isPlaying} tapeRatio={bottomTapeRatio} />
                </div>
            </div>

            {/* Right Section - Label Area */}
            <div className="w-[35%] h-full bg-[#FDFCF8] flex items-center justify-center relative">
                {/* Paper Texture */}
                <div className="absolute inset-0 bg-plastic-texture opacity-10 pointer-events-none" />

                {/* Label border */}
                <div className="absolute inset-1 border border-[#e8e0d0] rounded-sm pointer-events-none" />

                {/* Handwritten Label - vertical text */}
                <div
                    className="text-[#1a1a1a] text-[18px] writing-mode-vertical"
                    style={{
                        fontFamily: "'Caveat', cursive",
                        fontWeight: 500,
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed'
                    }}
                >
                    sentakuki 2026/01/04
                </div>
            </div>
        </div>
    )
}

const GuideHole = () => (
    <div className="w-4 h-4 rounded-full bg-[#1a1a1a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_0.5px_0_rgba(255,255,255,0.3)] relative">
        {/* Hole depth ring */}
        <div className="absolute inset-[2px] rounded-full bg-[#0a0a0a]" />
    </div>
)

const Reel = ({ isPlaying, tapeRatio }: { isPlaying: boolean, tapeRatio: number }) => {
    // tapeRatio: 0 (empty) to 1 (full)
    const hubSize = 24
    const minTapeSize = 28
    const maxTapeSize = 70
    const tapeSize = minTapeSize + (maxTapeSize - minTapeSize) * tapeRatio

    // Calculate number of visible tape layers
    const maxLayers = 10
    const visibleLayers = Math.floor(tapeRatio * maxLayers)

    // Generate tape layer rings
    const tapeRings = []
    if (visibleLayers > 0) {
        const layerStep = (tapeSize - hubSize - 4) / maxLayers
        for (let i = 0; i < visibleLayers; i++) {
            const ringSize = hubSize + 4 + (i + 1) * layerStep
            const hue = 25 + (i % 3) * 2
            const saturation = 35 + (i % 2) * 10
            const lightness = 20 + (i % 4) * 2
            tapeRings.push(
                <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: ringSize,
                        height: ringSize,
                        background: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
                        boxShadow: i === visibleLayers - 1
                            ? 'inset 0 1px 2px rgba(255,255,255,0.1), inset 0 -1px 2px rgba(0,0,0,0.3)'
                            : 'none'
                    }}
                />
            )
        }
    }

    return (
        <div className={`relative z-10 w-16 h-16 flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>
            {/* Outer shadow */}
            <div
                className="absolute rounded-full bg-black/30 blur-[2px] translate-y-[1px]"
                style={{ width: tapeSize + 2, height: tapeSize + 2 }}
            />

            {/* Base tape color */}
            {tapeRatio > 0 && (
                <div
                    className="absolute rounded-full bg-gradient-to-br from-[#3d2b1f] to-[#2a1d15] border border-[#1a1008]"
                    style={{ width: tapeSize, height: tapeSize }}
                />
            )}

            {/* Tape winding layers */}
            <div className="absolute flex items-center justify-center" style={{ width: tapeSize, height: tapeSize }}>
                {[...tapeRings].reverse()}
            </div>

            {/* Tape shine effect */}
            {tapeRatio > 0 && (
                <div
                    className="absolute rounded-full bg-gradient-to-tr from-transparent via-white/8 to-transparent pointer-events-none"
                    style={{ width: tapeSize - 2, height: tapeSize - 2 }}
                />
            )}

            {/* Reel Hub (Metallic) */}
            <div className="absolute w-7 h-7 rounded-full bg-gradient-to-br from-[#f0f0f0] via-[#d0d0d0] to-[#a0a0a0] shadow-[0_1px_3px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.8)]">
                {/* Hub center dimple */}
                <div className="absolute inset-[8px] rounded-full bg-gradient-to-br from-[#888] to-[#bbb] shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]" />

                {/* Spokes (Teeth) */}
                {[0, 60, 120, 180, 240, 300].map(deg => (
                    <div
                        key={deg}
                        className="absolute top-1/2 left-1/2 w-[3px] h-[12px] bg-gradient-to-b from-[#e8e8e8] to-[#c0c0c0] origin-center rounded-t-sm shadow-[0_0_1px_rgba(0,0,0,0.3)]"
                        style={{ transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-8px)` }}
                    />
                ))}
            </div>
        </div>
    )
}
