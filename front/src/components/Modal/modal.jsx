import React from 'react'
import { FaSquareXmark } from "react-icons/fa6"

const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0, 0.7)',
    zIndex: '1000'
}

const MODAL_STYLE = {
    position: 'fixed',
    bottom: '42%',
    left: '74%',
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '15px'
}

const CLOSE_STYLE = {
    cursor: 'pointer', 
    color: 'red', fontSize: '2em',   
}

function modal({ isOpen,setModalOpen, children }) {

    if (isOpen) {
        return (
            <div style={BACKGROUND_STYLE}>
             <div style={MODAL_STYLE}>
              <div>
                {children}
              </div>
              <div style={CLOSE_STYLE} onClick={setModalOpen}><FaSquareXmark/></div>
             </div>
            </div>
        )
    }

}

export default modal
