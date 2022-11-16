import React from "react";

const User = ({ userData }) => {
  return (
    <tr>
      <th>{userData.name}</th>
      <th>{userData.email}</th>
    </tr>
  );
};

const userList = () => {
  const users = [
    { email: "yu@gmail.com", name: "유재석" },
    { email: "kim@gmail.com", name: "김종국" },
    { email: "ha@gmail.com", name: "하하" },
    { email: "song@gmail.com", name: "송지효" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User userData={user} />
        ))}
      </tbody>
    </table>
  );
};

export default userList;
