

export const Cassette = (/*{ isPlaying, progress = 0 }: CassetteProps*/) => {
    // Calculate tape amounts based on progress
    // Tape flows from right reel to left reel during playback
    // Right reel: full at start (progress=0), empty at end (progress=1)
    // Left reel: empty at start (progress=0), full at end (progress=1)
    // const leftTapeRatio = progress
    // const rightTapeRatio = 1 - progress
    return (
        <div className="w-full h-full bg-[#1a1a1a] rounded-lg p-1.5 shadow-2xl relative overflow-hidden">
            {/* ... (casing texture) */}

            {/* Main Body Plastic */}
            <div className="w-full h-full bg-gradient-to-br from-[#EDE5D5] via-[#E3DAC9] to-[#D8CFBF] rounded-[4px] relative overflow-hidden flex flex-row items-center shadow-inner">
                {/* ... (edge highlights and shadows) */}

                {/* Screw Holes (Repositioned) */}
                {/* <Screw className="top-2 left-2" /> */}
                {/* <Screw className="top-2 right-2" /> */}
                {/* <Screw className="bottom-2 left-2" /> */}
                {/* <Screw className="bottom-2 right-2" /> */}

                {/* Left Section (Window) */}
                <div className="w-[60%] h-full flex items-center justify-center relative">
                    {/* Window Cutout */}
                    <div className="w-[80%] h-[60%] bg-[#1a1a1a] rounded-xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.8),inset_0_-1px_2px_rgba(255,255,255,0.1)] flex items-center justify-center gap-6 px-3 border border-[#333]">
                        {/* ... (window content) */}
                    </div>
                </div>

                {/* Right Section (Label) */}
                <div className="w-[40%] h-full bg-[#FDFCF5] rounded-r-[4px] shadow-md relative overflow-hidden flex items-center justify-center">
                    {/* ... (paper texture) */}

                    {/* Handwritten Label (Rotated) */}
                    <div
                        className="text-[#1a1a1a] text-[14px] transform -rotate-90"
                        style={{
                            fontFamily: "'Caveat', cursive",
                            fontWeight: 500,
                            writingMode: 'vertical-rl',
                        }}
                    >
                        sentakuki 2026/01/04
                    </div>
                </div>
            </div>
        </div>
    );
};

// const Screw = ({ className }: { className: string }) => (
//     <div className={`absolute w-3 h-3 rounded-full bg-gradient-to-br from-[#a8a8a8] via-[#888] to-[#666] shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)] flex items-center justify-center ${className}`}>
//         {/* Screw head depression */}
//         <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#777] to-[#999] shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] flex items-center justify-center">
//             {/* Phillips head cross */}
//             <div className="absolute w-[1px] h-1.5 bg-[#444] rotate-45 shadow-[0_0_1px_rgba(0,0,0,0.5)]" />
//             <div className="absolute w-[1px] h-1.5 bg-[#444] -rotate-45 shadow-[0_0_1px_rgba(0,0,0,0.5)]" />
//         </div>
//     </div>
// )

// const GuideHole = () => (
//     <div className="w-3.5 h-3.5 rounded-full bg-[#1a1a1a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_0.5px_0_rgba(255,255,255,0.3)] relative">
//         {/* Hole depth ring */}
//         <div className="absolute inset-[2px] rounded-full bg-[#0a0a0a]" />
//     </div>
// )

// const Reel = ({ isPlaying, tapeRatio }: { isPlaying: boolean, tapeRatio: number }) => {
//     // tapeRatio: 0 (empty) to 1 (full)
//     // Size ranges from 28px (empty) to 44px (full)
//     const minSize = 28
//     const maxSize = 44
//     const tapeSize = minSize + (maxSize - minSize) * tapeRatio

//     return (
//         // Fixed size container to keep rotation axis stable
//         <div className={`relative z-10 w-11 h-11 flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>
//             {/* Outer shadow ring */}
//             <div
//                 className="absolute rounded-full bg-black/30 blur-[2px] translate-y-[1px]"
//                 style={{ width: tapeSize, height: tapeSize }}
//             />

//             {/* Tape Roll (Dark Brown Magnetic Tape) */}
//             <div
//                 className="absolute rounded-full bg-gradient-to-br from-[#4a3828] via-[#3d2b1f] to-[#2a1d15] shadow-lg flex items-center justify-center transition-all duration-300 border border-[#1a1008]"
//                 style={{ width: tapeSize - 4, height: tapeSize - 4 }}
//             >
//                 {/* Tape shine effect */}
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

//                 {/* Tape rings (depth effect) - only show if there's enough tape */}
//                 {tapeRatio > 0.3 && (
//                     <div className="absolute inset-[3px] rounded-full border border-[#2a1d15]/50" />
//                 )}
//                 {tapeRatio > 0.5 && (
//                     <div className="absolute inset-[6px] rounded-full border border-[#2a1d15]/30" />
//                 )}
//             </div>

//             {/* Reel Hub (Metallic) - Always centered */}
//             <div className="absolute w-5 h-5 rounded-full bg-gradient-to-br from-[#f0f0f0] via-[#d0d0d0] to-[#a0a0a0] shadow-[0_1px_3px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.8)]">
//                 {/* Hub center dimple */}
//                 <div className="absolute inset-[6px] rounded-full bg-gradient-to-br from-[#888] to-[#bbb] shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]" />

//                 {/* Spokes (Teeth) */}
//                 {[0, 60, 120, 180, 240, 300].map(deg => (
//                     <div
//                         key={deg}
//                         className="absolute top-1/2 left-1/2 w-[3px] h-[9px] bg-gradient-to-b from-[#e8e8e8] to-[#c0c0c0] origin-center rounded-t-sm shadow-[0_0_1px_rgba(0,0,0,0.3)]"
//                         style={{ transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-6px)` }}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }

