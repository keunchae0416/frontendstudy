// App.jsx
import React from "react";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <ProfileCard
        name="김철수"
        age={25}
        job="프론트엔드 개발자"
        avatar="https://randomuser.me/api/portraits/men/1.jpg"
      />
      <ProfileCard
        name="이영희"
        age={28}
        job="디자이너"
        avatar="https://randomuser.me/api/portraits/women/1.jpg"
      />
    </div>
  );
}

// ProfileCard 컴포넌트
function ProfileCard({ name, age, job, avatar }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "200px",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}
    >
      <img
        src={avatar}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%"
        }}
      />
      <h3>{name}</h3>
      <p>나이: {age}</p>
      <p>직업: {job}</p>
    </div>
  );
}

export default App;