import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SimpleModal({
  gameStatus,
  show,
  onClose,
  title,
  message,
  yesButton,
  noButton,
  closeButton,
}) {
  const navigate = useNavigate();
  return (
    <>
      <Modal show={show} onHide={onClose} animation={true} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{message}</Modal.Body>

        <Modal.Footer>
          {gameStatus === "started" ? (
            <div>
              <Button
                variant="secondary"
                onClick={() => navigate({ pathname: "/" })}
              >
                YES
              </Button>
              <Button variant="primary" onClick={onClose}>
                NO
              </Button>
            </div>
          ) : (
            <Button variant="primary" onClick={onClose}>
              PLAY AGAIN!
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SimpleModal;
