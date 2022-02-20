import React from "react";
import { useState, useEffect } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
function SkillRow(props) {
  const [disabled,setDisable] = useState(true)
  const obj = props.skill;
  const id = obj.id
  const [skill, setSkill] = useState(obj.skill)


  const putData = () =>{
    
    const requestOptions={
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({skill:skill})
    }
    fetch('http://127.0.0.1:8000/api/skill/'+obj.id,requestOptions)
    .then(res=>{
      console.log(res.status);
    })
  }


  const handleDelete = () =>{
    const requestOptions={
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch('http://127.0.0.1:8000/api/skill/'+obj.id,requestOptions)
    .then(res=>{
      console.log(res.status);
      window.location.reload();
    })
  }

  const handleEdit = (event) => {
    if(!disabled){
      putData()
    }
    setDisable(!disabled)
  } 
  return (
    <tr>
      {/* <button> Fetch Data </button> */}
      <td>{id}</td>
      {/* <td>{obj.skill}</td> */}
      <td>

      <InputGroup className="mb-3">
          <FormControl
            type="text"
            placeholder="Skill"
            name="skill"
            defaultValue={skill}
            onChange={(e) => {
              setSkill(e.target.value);
            }}
            disabled = {(disabled)? "disabled" : ""}
          />
        </InputGroup>
        </td>
        <td className="flex" style={{paddingLeft: '20px'}}>
        <button className="btn btn-warning" onClick={handleEdit}> {disabled ? "Edit" : "save"} </button>&nbsp;&nbsp;
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default SkillRow;
