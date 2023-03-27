import React from "react";

import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const App = () => {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition()

if(!browserSupportsSpeechRecognition){
  return <span>Your Browser dosent support speech to text</span>
}
  return (
    <div>
      <p>Microphone:{listening?'on':'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  )
}

export default App;