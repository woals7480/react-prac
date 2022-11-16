import React, { useState } from "react";

const Input2 = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const { name, email, tel } = inputs;

  const change = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={name} onChange={change} />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" id="email" value={email} onChange={change} />
      </div>
      <div>
        <label>전화번호</label>
        <input type="tel" id="tel" value={tel} onChange={change} />
      </div>
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <p>Tel : {tel}</p>
    </div>
  );
};

export default Input2;
