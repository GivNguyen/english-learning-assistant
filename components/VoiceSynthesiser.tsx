'use client'
import React, { useState } from 'react'

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
    const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null)
  return (
    <div className='flex flex-col items-center justify-center text-white'>
        {displaySettings && (
            <>
                <div>
                    <p className='text-xs text-gray-500 p-2'>
                        Voice:
                    </p>
                    <select className="flex-1 bg-cyan-500 text-white border
                    border-gray-500 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500
                    block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                    dark:focus:ring-cyan-500 dark:focus:border-cyan-500">
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