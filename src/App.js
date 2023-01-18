import React from "react";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  const assistants = [
    {
      name: "hi",
      age: "30",
    },
    {
      name: "bye",
      age: "20",
    },
  ];
  return (
    <div>
      {assistants.map((a, index) => (
        <h1 key={index}>
          {a.name} and {a.age}
        </h1>
      ))}
      <div>Personal Digital Assistants</div>
      <ProfileCard name="alexa" color="red" />
      <ProfileCard name="google assistant" />
      <ProfileCard name="cortana" />
    </div>
  );
};

export default App;
