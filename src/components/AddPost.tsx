import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { addPost } from "../app/postsSlice";
import {
  Button,
  InputGroup,
  Modal,
  Form,
  Container,
  Row,
} from "react-bootstrap";

interface IAddPostProps {
  addPost: any;
}

const AddPost: React.FC<IAddPostProps> = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const dispatch = useAppDispatch();

  const onChange = (evt: any) => {
    if (evt.target.id === "title") {
      setTitle(evt.target.value);
    } else if (evt.target.id === "body") {
      setBody(evt.target.value);
    }
  };

  const add = () => {
    if (title.length === 0 || body.length === 0) {
      alert("Something is empty!");
      return;
    }
    dispatch(addPost({ userId: 0, title, body }));
  };

  return (
    <div>
      <>
        <Modal show={showModal} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Add Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  id="title"
                  aria-label="title"
                  onChange={onChange}
                />
              </Row>
              <Row>
                <Form.Label>Body</Form.Label>
                <Form.Control id="body" as="textarea" onChange={onChange} />
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                add();
                setShowModal(false);
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <Button onClick={() => setShowModal(true)}>Post</Button>
    </div>
  );
};

export default AddPost;
