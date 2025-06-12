import React, { useState, useEffect } from "react";
import { stories } from "@/assets/Stories/Stories";
import { avatarstorie } from "@/assets/Avatar/Avatar/AvatarStories";

const Stories = () => {
  const [activeStory, setActiveStory] = useState(null);

  useEffect(() => {
    if (activeStory !== null) {
      const timer = setTimeout(() => {
        setActiveStory(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [activeStory]);

  // Combinamos historias con avatars por ID
  const combinedData = stories.map((story) => {
    const avatar = avatarstorie.find((a) => a.id === story.id);
    const extension = story.story.split('.').pop().toLowerCase();
    const type = extension === "mp4" ? "video" : "image";
    return {
      ...story,
      avatar: avatar?.avatar || "",
      type,
    };
  });

  return (
    <div style={{ padding: "1rem" }}>
      {activeStory === null ? (
        <div
          style={{
            display: "flex",
            gap: "1rem",
            overflowX: "auto",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          {combinedData.map((user) => (
            <div
              key={user.id}
              style={{ textAlign: "center", cursor: "pointer" }}
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
