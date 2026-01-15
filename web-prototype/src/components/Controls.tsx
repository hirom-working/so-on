import { useState } from 'react'
import { Play, Square, Settings } from 'lucide-react'
import { SettingsModal } from './SettingsModal'

interface ControlsProps {
    isPlaying: boolean
    onPlay: () => void
    onStop: () => void
}

export const Controls = ({ onPlay, onStop }: ControlsProps) => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    return (
        <div className="w-full h-full flex items-end justify-center gap-3 px-6 pb-4 bg-gradient-to-b from-[#d4cab8] to-[#c5bba8] rounded-b-[30px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] relative">
            {/* Surface texture */}
            <div className="absolute inset-0 bg-plastic-texture opacity-15 pointer-events-none rounded-b-[30px]" />

            {/* Button Well/Depression */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-[70px] bg-gradient-to-b from-[#2a2520] to-[#1a1510] rounded-lg shadow-[inset_0_2px_8px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.2)] pointer-events-none">
                {/* Inner well highlight */}
                <div className="absolute inset-[1px] rounded-lg bg-gradient-to-b from-[#3a3530] to-transparent opacity-50" />
            </div>

            {/* Play Button - Accent Color */}
            <PianoKey
                icon={<Play size={18} fill="currentColor" />}
                onClick={onPlay}
                variant="primary"
            />

            {/* Stop Button - Neutral */}
            <PianoKey
                icon={<Square size={16} fill="currentColor" />}
                onClick={onStop}
                variant="neutral"
            />

            {/* Settings Button - Neutral */}
            <PianoKey
                icon={<Settings size={16} />}
                onClick={() => setIsSettingsOpen(true)}
                variant="neutral"
            />

            {/* Settings Modal */}
            <SettingsModal
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
            />
        </div>
    )
}

interface PianoKeyProps {
    icon: React.ReactNode
    onClick: () => void
    variant: 'primary' | 'neutral'
}

const PianoKey = ({ icon, onClick, variant }: PianoKeyProps) => {
    const isPrimary = variant === 'primary'

    return (
        <div className="perspective-[500px] pb-1 z-10">
            <button
                onClick={onClick}
                className={`
                    group relative w-[72px] h-[58px] rounded-t-[3px] rounded-b-[6px]
                    flex flex-col items-center justify-center
                    transition-all duration-75 ease-out
                    origin-top

                    /* Metal bezel frame */
                    before:absolute before:inset-[-2px] before:rounded-t-[4px] before:rounded-b-[7px]
                    before:bg-gradient-to-b before:from-[#a8a098] before:via-[#888078] before:to-[#686058]
                    before:shadow-[0_2px_4px_rgba(0,0,0,0.4)]
                    before:-z-10

                    /* Base color */
                    ${isPrimary
                        ? 'bg-gradient-to-b from-[#e8956a] via-[#d97d54] to-[#c86a42]'
                        : 'bg-gradient-to-b from-[#f0f0f0] via-[#e0e0e0] to-[#c8c8c8]'
                    }

                    /* Shadow */
                    shadow-[0_4px_8px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_-1px_2px_rgba(0,0,0,0.1)]

                    /* Hover Effect */
                    hover:-translate-y-0.5 hover:shadow-[0_5px_10px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.5)]

                    /* Active (Pressed) Effect */
                    active:translate-y-[2px] active:[transform:translateY(2px)_rotateX(8deg)]
                    active:shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_2px_6px_rgba(0,0,0,0.15)]
                `}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Button surface texture */}
                <div className="absolute inset-0 rounded-t-[3px] rounded-b-[6px] bg-plastic-texture opacity-10 pointer-events-none" />

                {/* Glossy Highlight Top */}
                <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/50 to-transparent rounded-t-[3px] pointer-events-none group-active:from-white/30" />

                {/* Side highlights */}
                <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-black/10 to-black/20 pointer-events-none" />

                {/* Bottom edge shadow */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-t from-black/20 to-transparent rounded-b-[6px] pointer-events-none" />

                {/* Icon */}
                <div className={`
                    transition-all duration-75
                    ${isPrimary ? 'text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]' : 'text-[#4a4540] drop-shadow-[0_1px_0_rgba(255,255,255,0.5)]'}
                    group-active:scale-95 group-active:opacity-90
                `}>
                    {icon}
                </div>

                {/* Active press flash effect */}
                <div className="absolute inset-0 rounded-t-[3px] rounded-b-[6px] bg-white/0 group-active:bg-white/10 transition-colors duration-75 pointer-events-none" />
            </button>
        </div>
    )
}
