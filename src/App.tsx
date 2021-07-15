import React from 'react'
// import Button from './components/button/Button'
// import Accordion from './components/Accordion/Accordion'
import UploadArea from './components/UploadArea/UploadArea'

function App() {
  return (
    <>
      {/* <Button /> */}
      {/* <Accordion /> */}
      <UploadArea
        acceptTypes={['.png', '.doc', '.db']}
        maxSizeOfFileInBytes={314572800}
      />
    </>
  )
}

export default App
