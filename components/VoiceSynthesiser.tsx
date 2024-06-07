'use client'
import React from 'react'

type State = {
    sender: string;
    response: string | null | undefined;
}

function VoiceSynthesiser({
    state,
    displaySettings
} : {
    state: State;
    displaySettings: boolean;
}) {
  return (
    <div className='flex flex-col items-center justify-center text-white'>
        {displaySettings && (
            <>
                <div>
                    <p className='text-xs text-gray-500 p-2'>
                        Voice:
                    </p>
                    <select className="flex-1 bg-cyan-500 text-white border
                    border-gray-500 text-sm rounded-lg "
                    >
                        {window.speechSynthesis.getVoices().map((voice) => (
                            <option value={voice.name} key={voice.name}>
                                {voice.name}
                            </option>
                        ))}
                    </select>
                </div>
            </>
        )}
    </div>
  )
}

export default VoiceSynthesiser