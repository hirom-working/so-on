interface CassetteProps {
    isPlaying: boolean
    progress?: number // 0 (start) to 1 (end)
}

export const Cassette = ({ isPlaying, progress = 0 }: CassetteProps) => {
    // Calculate tape amounts based on progress
    // After 90deg rotation: top reel (originally left) fills, bottom reel empties
    const leftTapeRatio = progress
    const rightTapeRatio = 1 - progress

    return (
        <div className="w-full h-full bg-gradient-to-br from-[#F5F0E6] via-[#EDE5D5] to-[#E3DAC9] rounded-lg shadow-xl relative overflow-hidden flex flex-col">
            {/* Edge highlights */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/60" />
            <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-white/40" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/15" />
            <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-black/10" />

            {/* Main content area - Label + Window side by side */}
            <div className="flex-1 flex p-2 gap-1">
                {/* Window Section (left side, becomes top after rotation) */}
                <div className="w-[60%] h-full bg-[#1a1a1a] rounded-lg shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)] flex items-center justify-center gap-2 px-2 relative">
                    {/* Window depth */}
                    <div className="absolute inset-[2px] rounded-md bg-gradient-to-b from-[#252525] to-[#1a1a1a] pointer-events-none" />

                    {/* Glass effect */}
                    <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                    </div>

                    {/* Reel Left */}
                    <Reel isPlaying={isPlaying} tapeRatio={leftTapeRatio} />

                    {/* Reel Right */}
                    <Reel isPlaying={isPlaying} tapeRatio={rightTapeRatio} />
                </div>

                {/* Label Section (right side, becomes bottom after rotation) */}
                <div className="flex-1 bg-[#FDFCF8] rounded-sm flex items-center justify-center relative">
                    {/* Paper texture */}
                    <div className="absolute inset-0 bg-plastic-texture opacity-8 pointer-events-none" />
                    {/* Border */}
                    <div className="absolute inset-1 border border-[#e8e0d0] rounded-sm pointer-events-none" />

                    {/* Handwritten Label */}
                    <div
                        className="text-[#1a1a1a] text-[14px]"
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

            {/* Bottom Section - Magnetic Head Access */}
            <div className="h-[22%] bg-gradient-to-b from-[#d8d0c0] to-[#cec6b6] flex items-center justify-center gap-6 relative">
                <div className="absolute inset-0 bg-plastic-texture opacity-10 pointer-events-none" />
                <GuideHole />
                <div className="w-5 h-2.5 bg-[#2a2a2a] rounded-sm shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]" />
                <GuideHole />
            </div>
        </div>
    )
}

const GuideHole = () => (
    <div className="w-3 h-3 rounded-full bg-[#1a1a1a] shadow-[inset_0_2px_3px_rgba(0,0,0,0.8),0_0.5px_0_rgba(255,255,255,0.3)] relative">
        <div className="absolute inset-[2px] rounded-full bg-[#0a0a0a]" />
    </div>
)

const Reel = ({ isPlaying, tapeRatio }: { isPlaying: boolean, tapeRatio: number }) => {
    const hubSize = 20
    const minTapeSize = 22
    const maxTapeSize = 48
    const tapeSize = minTapeSize + (maxTapeSize - minTapeSize) * tapeRatio

    const maxLayers = 8
    const visibleLayers = Math.floor(tapeRatio * maxLayers)

    const tapeRings = []
    if (visibleLayers > 0) {
        const layerStep = (tapeSize - hubSize - 2) / maxLayers
        for (let i = 0; i < visibleLayers; i++) {
            const ringSize = hubSize + 2 + (i + 1) * layerStep
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
                            ? 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -1px 1px rgba(0,0,0,0.3)'
                            : 'none'
                    }}
                />
            )
        }
    }

    return (
        <div
            className={`relative z-10 flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}
            style={{ width: maxTapeSize, height: maxTapeSize }}
        >
            {tapeRatio > 0 && (
                <div
                    className="absolute rounded-full bg-black/25 blur-[1px] translate-y-[1px]"
                    style={{ width: tapeSize, height: tapeSize }}
                />
            )}

            {tapeRatio > 0 && (
                <div
                    className="absolute rounded-full bg-gradient-to-br from-[#3d2b1f] to-[#2a1d15] border border-[#1a1008]"
                    style={{ width: tapeSize - 2, height: tapeSize - 2 }}
                />
            )}

            {tapeRatio > 0 && (
                <div className="absolute flex items-center justify-center" style={{ width: tapeSize, height: tapeSize }}>
                    {[...tapeRings].reverse()}
                </div>
            )}

            {tapeRatio > 0 && (
                <div
                    className="absolute rounded-full bg-gradient-to-tr from-transparent via-white/8 to-transparent pointer-events-none"
                    style={{ width: tapeSize - 4, height: tapeSize - 4 }}
                />
            )}

            {/* Reel Hub */}
            <div className="absolute w-5 h-5 rounded-full bg-gradient-to-br from-[#f0f0f0] via-[#d0d0d0] to-[#a0a0a0] shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.8)]">
                <div className="absolute inset-[6px] rounded-full bg-gradient-to-br from-[#888] to-[#bbb] shadow-[inset_0_1px_1px_rgba(0,0,0,0.4)]" />
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
