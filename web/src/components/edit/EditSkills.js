import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import SkillRow from "./SkillRow";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

function EditSkills() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/skill", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setSkills(data);
      });
  }, []);


  const handleAdd = (event) =>{
    const requestOptions={
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({skill:newSkill})
    }
    fetch('http://127.0.0.1:8000/api/skill',requestOptions)
    .then(res=>{
      console.log(res.status);
      window.location.reload();

    })
  }

  return (
    <div class="col-12" style={{ paddingTop: "10vh" }}>
      <div class="input-group input-group-lg w-50 mx-auto">
        <div>
          <InputGroup className="mb-5">
          <Button variant="outline-success" onClick={handleAdd}>
            Add Skill
          </Button>
            <FormControl
              type="text"
              placeholder="New Skill"
              name="newskill"
              defaultValue={newSkill}
              onChange={(e) => {
                setNewSkill(e.target.value);
              }}
            />
          </InputGroup> {'   '}
        </div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Skill</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => {
              return <SkillRow skill={skill}></SkillRow>;
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default EditSkills;
