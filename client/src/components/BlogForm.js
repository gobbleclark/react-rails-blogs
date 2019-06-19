import React, { useState, } from 'react';
import {Form, } from 'semantic-ui-react';
import axios from 'axios';


const BlogForm = (props) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/blogs", { title, body, })
          .then(res => {
            props.add(res.data);
            props.toggleForm();
          })
      };
    

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
                <Form.Input
                    label="title"
                    placeholder="Title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <Form.Input
                    label="Body"
                    placeholder="body"
                    name="body"
                    required
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                />
            </Form.Group>
            <Form.Button>Submit</Form.Button>
        </Form>
    )



}

export default BlogForm;