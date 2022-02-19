import React from 'react'
import { useState, useEffect} from 'react'
import axios from "axios";

export default function Contract() {
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [map,setMap] = useState('');
  useEffect(() => {
    axios
    .get("http://127.0.0.1:8000/api/contact", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data)
    .then((data) => {
      setAddress(data.address);
      setEmail(data.email);
      setPhone(data.phone);
      setMap(data.map)
    });
    // setAddress("158 m4 \n ngam");
    // setEmail("famp.visarut@gmail.com");
    // setPhone('0647163925')
    // setMap('https://www.google.com/maps/embed/v1/place?q=17.100871039435724,+104.67563807016795&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8')
  },[])

  return (
    <section id="contact" >
      <div className="container h-80">
        <div className=" bg-gray-900 rounded-lg sm:mr-10 p-10 flex items-end justify-start h-full relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src={map}
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/3 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                {/* 97 Warren St. <br />
                New York, NY 10007 */}
                {address}
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                {email}
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">{phone}</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
