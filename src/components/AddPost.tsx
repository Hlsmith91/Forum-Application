import React, {useState } from "react";
import { useAppDispatch } from "../app/hooks";
import {addPost} from '../app/postsSlice';
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';


interface IAddPostProps{
    addPost: any;
}

const AddPost: React.FC<IAddPostProps> = () =>{

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(false);

    const dispatch = useAppDispatch();

    const onChange = (evt : any) => {
        if(evt.target.id === "title")
        {
            setTitle(evt.target.value);
        }
        else if(evt.target.id === "body")
        {
            setBody(evt.target.value);
        }
    }

    const add = () => {
        if(title.length === 0 || body.length === 0)
        {
            alert("Something is empty!");
            return;
        }
        dispatch(addPost({userId: 0, title, body}));
    }

    return (
        <div>
            <InputGroup className="sm"> 
            <InputGroup.Text   id="title" onChange={onChange}>Title</InputGroup.Text><br/>
            <InputGroup.Text id="body" onChange={onChange}>Body</InputGroup.Text>
            </InputGroup>
            <Button onClick={add}>Post</Button>
        </div>
    );
}

export default AddPost;