import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
function EditAbout(props) {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/about", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data)
      .then((data) => {
        // console.log(data);
        setName(data.name);
        setGreeting(data.greeting);
        setDescription(data.description);
      });
  }, []);
  const handleSubmit = (e) => {
    
    const requestOptions={
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name:name,greeting:greeting,description:description})
    }
    fetch('http://127.0.0.1:8000/api/about',requestOptions)
    .then(res=>{
      console.log(res.status);
    })
  };
  return (
    <div class="col-12" style={{ paddingTop: "10vh" }}>
      <div class="input-group input-group-lg w-50 mx-auto">
      <h1 style={{fontSize:"30px"}}>Edit About</h1>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
          <FormControl
            type="text"
            placeholder="Your Name"
            name="name"
            defaultValue={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Greeging</InputGroup.Text>
          <FormControl
            type="text"
            placeholder="Greeting"
            name="greeting"
            defaultValue={greeting}
            onChange={(e) => {
              setGreeting(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
          <FormControl
            as="textarea"
            type="text"
            placeholder="Description"
            name="Description"
            defaultValue={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </InputGroup>
        <Button variant="outline-success" onClick={handleSubmit}>Success</Button>
      </div>
    </div>
  );
}

export default EditAbout;
