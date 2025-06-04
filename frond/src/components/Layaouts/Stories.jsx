import React, { useState, useEffect } from "react";

const mockUsers = [
  {
    id: 1,
    name: "Alison",
    avatar: "/assets/alison.jpg",
    story: "/assets/story1.jpg", // imagen o video
    type: "image",
  },
  {
    id: 2,
    name: "Ray",
    avatar: "/assets/ray.jpg",
    story: "/assets/story2.mp4",
    type: "video",
  },
  {
    id: 3,
    name: "Piero",
    avatar: "/assets/piero.jpg",
    story: "/assets/story3.jpg",
    type: "image",
  },
];

const Stories = () => {
  const [activeStory, setActiveStory] = useState(null);

  useEffect(() => {
    if (activeStory !== null) {
      const timer = setTimeout(() => {
        setActiveStory(null); // Volver al listado después de 3s
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [activeStory]);

  return (
    <div style={{ padding: "1rem" }}>
      {activeStory === null ? (
        <div
          style={{
            display: "flex",
            gap: "1rem",
            overflowX: "auto",
            justifyContent: "center", // Centra las stories
            alignItems: "center",
            width: "100%",
          }}
        >
          {mockUsers.map((user) => (
            <div
              key={user.id}
              style={{
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => setActiveStory(user)}
            >
              <img
                src={user.avatar}
                alt={user.name}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "2px solid #f43f5e",
                  objectFit: "cover",
                }}
              />
              <p style={{ fontSize: "12px", marginTop: "0.5rem" }}>{user.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            position: "relative",
            height: "300px",
            backgroundColor: "#000",
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          {activeStory.type === "image" ? (
            <img
              src={activeStory.story}
              alt="story"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <video
              src={activeStory.story}
              autoPlay
              muted
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
          <p
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {activeStory.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default Stories;
