// src/components/feed/CreatePost.jsx
import { Avatar, Textarea, Button } from "@mui/joy";

export const CreatePost = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex gap-3 mb-3">
        <Avatar src="https://randomuser.me/api/portraits/men/2.jpg" />
        <Textarea
          placeholder="¿Qué estás pensando?"
          variant="outlined"
          minRows={2}
          sx={{ width: "100%" }}
        />
      </div>
      <div className="flex justify-end">
        <Button variant="solid" color="primary">
          Publicar
        </Button>
      </div>
    </div>
  );
};