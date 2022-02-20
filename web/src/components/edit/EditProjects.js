import React from 'react'
import { useState, useEffect} from 'react'
import axios from "axios";
import Table from "react-bootstrap/Table";
import ProjectRow from './ProjectRow';
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

function EditProjects() {
  const [projects, setProjects] = useState([]);
  const [title,setTitle] = useState('');
  const [subtitle,setSubtitle] = useState('');
  const [description,setDescription] = useState('');
  const [link,setLink] = useState('');
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/project", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  }, []);


  const handleAdd = (event) =>{
    const requestOptions={
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title:title,
        subtitle:subtitle,
        description:description,
        link:link
      })
    }
    fetch('http://127.0.0.1:8000/api/project',requestOptions)
    .then(res=>{
      console.log(res.status);
      window.location.reload();

    })
  }

  return (
    <div class="col-12" style={{ paddingTop: "10vh"}}>
      <div class=" input-group-lg w-50 mx-auto">
      <h1 style={{fontSize:"30px"}}>Edit Projects</h1>

        <div>
          <InputGroup className="mb-2">
          <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
            <FormControl
              type="text"
              placeholder="Title"
              name="title"
              defaultValue={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </InputGroup> {'   '}
          <InputGroup className="mb-2">
          <InputGroup.Text id="basic-addon1">Sub Title</InputGroup.Text>
            <FormControl
              type="text"
              placeholder="Sub Title"
              name="subtitle"
              defaultValue={subtitle}
              onChange={(e) => {
                setSubtitle(e.target.value);
              }}
            />
          </InputGroup> {'   '}<InputGroup className="mb-2">
          <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
            <FormControl
              type="text"
              placeholder="Description"
              name="description"
              defaultValue={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </InputGroup> {'   '}<InputGroup className="mb-2">
          <InputGroup.Text id="basic-addon1">Link</InputGroup.Text>
            <FormControl
              type="text"
              placeholder="Link"
              name="link"
              defaultValue={link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
          </InputGroup> {'   '}
          <Button variant="outline-success" onClick={handleAdd}>
            Add Project
          </Button>
        </div>
        <Table>
          <thead>
            <tr>
            <th>ID</th>
              <th>Title</th>
              <th>Sub Title</th>
              <th>Description</th>
              <th>Link</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => {
              return <ProjectRow project={project}></ProjectRow>;
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default EditProjects