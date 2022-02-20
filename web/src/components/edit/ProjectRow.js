import React from "react";
import { useState, useEffect } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

function ProjectRow(props) {
  const [disabled, setDisable] = useState(true);
  const obj = props.project;
  const id = obj.id;
  const [title, setTitle] = useState(obj.title);
  const [subtitle, setSubtitle] = useState(obj.subtitle);
  const [description, setDescription] = useState(obj.description);
  const [link, setLink] = useState(obj.link);

  const putData = () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        subtitle: subtitle,
        description: description,
        link: link,
      }),
    };
    fetch("http://127.0.0.1:8000/api/project/" + obj.id, requestOptions).then(
      (res) => {
        console.log(res.status);
      }
    );
  };

  const handleDelete = () => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://127.0.0.1:8000/api/project/" + obj.id, requestOptions).then(
      (res) => {
        console.log(res.status);
        window.location.reload();
      }
    );
  };

  const handleEdit = (event) => {
    if (!disabled) {
      putData();
    }
    setDisable(!disabled);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            placeholder="Title"
            name="Title"
            defaultValue={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            disabled={disabled ? "disabled" : ""}
          />
        </InputGroup>
      </td>
      <td>
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            placeholder="Sub Title"
            name="subtitle"
            defaultValue={subtitle}
            onChange={(e) => {
              setSubtitle(e.target.value);
            }}
            disabled={disabled ? "disabled" : ""}
          />
        </InputGroup>
      </td>
      <td>
        <InputGroup className="mb-3">
          <FormControl
          as="textarea"
            type="text"
            placeholder="Description"
            name="description"
            defaultValue={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            disabled={disabled ? "disabled" : ""}
          />
        </InputGroup>
      </td>
      <td>
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            placeholder="Link"
            name="link"
            defaultValue={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
            disabled={disabled ? "disabled" : ""}
          />
        </InputGroup>
      </td>
      <td className="flex" >
        <button className="btn btn-warning" onClick={handleEdit}> {disabled ? "Edit" : "save"} </button>&nbsp;&nbsp;
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default ProjectRow;
