// src/components/feed/Feed.jsx
import { mockPosts } from "../../data/mockPosts";
import { Post } from "./Post";
import { CreatePost } from "./CreatePost";
import { Stories } from "./Stories";

export const Feed = () => {
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {/* Historias (Stories) */}
      <Stories />

      {/* Crear Publicación */}
      <CreatePost />

      {/* Lista de Posts */}
      <div className="mt-4 space-y-4">
        {mockPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};