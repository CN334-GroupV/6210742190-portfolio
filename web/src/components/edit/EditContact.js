import React from "react";
import { useState, useEffect } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";
function EditContract() {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [map, setMap] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/contact", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data)
      .then((data) => {
        // console.log(data);
        setAddress(data.address);
        setEmail(data.email);
        setPhone(data.phone);
        setMap(data.map);
      });
  }, []);
  const handleSubmit = (e) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        address:address,
        email:email,
        phone:phone,
        map:map,
      }),
    };
    fetch("http://127.0.0.1:8000/api/contact", requestOptions).then((res) => {
      console.log(res.status);
    });
  };
  return (
    <div class="col-12" style={{ paddingTop: "10vh" }}>
      <div class="input-group input-group-lg w-50 mx-auto">
      <h1 style={{fontSize:"30px"}}>Edit Contact</h1>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
          <FormControl
            type="text"
            placeholder="Address"
            name="Address"
            defaultValue={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">E-mail</InputGroup.Text>
          <FormControl
            type="text"
            placeholder="Email"
            name="email"
            defaultValue={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
          <FormControl
            type="text"
            placeholder="Phone"
            name="phone"
            defaultValue={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Map</InputGroup.Text>
          <FormControl
            as="textarea"
            type="text"
            placeholder="Map"
            name="map"
            defaultValue={map}
            onChange={(e) => {
              setMap(e.target.value);
            }}
          />
        </InputGroup>
        <Button variant="outline-success" onClick={handleSubmit}>
          Success
        </Button>
      </div>
    </div>
  );
}

export default EditContract;
