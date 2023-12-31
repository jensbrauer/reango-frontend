import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SubmitProduct } from './submitproduct';

function RUSureModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    };
  const [submitMessage, setSubmitMessage] = useState()

  const handleSubmit = () => {
    SubmitProduct(props.product)
    setSubmitMessage('Your Item was uploaded')
    };

  const rerender = () => {
    setShow(false);
    props.returnFunction()
  } 
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Upload Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{submitMessage ? submitMessage : props.product.name}</Modal.Body>
        <Modal.Footer>
          {submitMessage ? <Button variant="secondary" onClick={rerender}>
            Close
          </Button> :
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RUSureModal;
