// Modal.js
import React from "react"

const Modal = ({ closeModal, isOpen, children }) => {
  if (!isOpen) return null

  return (
    <>
      <div className="modal-overlay" onClick={closeModal} />
      <div className="modal-content">
        {children}
        <div>
          {/* <button className="btn" onClick={closeModal}>
            Close
          </button> */}
          <button className="btn btn-project" onClick={closeModal}>Close</button>
        </div>
      </div>
    </>
  )
}

export default Modal
