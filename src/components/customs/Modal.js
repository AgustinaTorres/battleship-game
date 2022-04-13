import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SimpleModal({ gameStatus, show, onClose, title, message, surrender }) {
  const navigation = useNavigate();
  const onSurrender = () => {
    navigation({ pathname: "/" });
    navigation(0);
    surrender("surrended");
  };
  return (
    <>
      <Modal show={show} onHide={onClose} animation={true} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{message}</Modal.Body>

        <Modal.Footer>
          <div>
            <Button variant="secondary" onClick={onSurrender}>
              YES
            </Button>
            <Button variant="primary" onClick={onClose}>
              CANCEL
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SimpleModal;
