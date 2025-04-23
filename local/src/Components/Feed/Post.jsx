// src/components/feed/Post.jsx
import { Avatar, IconButton } from "@mui/joy";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

export const Post = ({ post }) => {
  // Si no se pasa 'post', usamos un post simulado
  const mockPost = {
    user: {
      name: "Juan Pérez",
      avatar: "https://i.pravatar.cc/150?img=3", // Avatar aleatorio
    },
    createdAt: new Date(),
    content: "¡Este es un post de prueba en el dashboard!",
    image: "https://source.unsplash.com/random/600x400", // Imagen aleatoria
    likes: 25,
    comments: 10,
  };

  // Usar los datos pasados o el mock
  const data = post || mockPost;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      {/* Header: Usuario + Fecha */}
      <div className="flex items-center gap-3 mb-3">
        <Avatar src={data.user.avatar} alt={data.user.name} />
        <div>
          <h3 className="font-semibold">{data.user.name}</h3>
          <p className="text-gray-500 text-sm">
            {new Date(data.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Contenido del Post */}
      <p className="mb-3">{data.content}</p>

      {/* Imagen (si existe) */}
      {data.image && (
        <img
          src={data.image}
          alt="Post content"
          className="w-full rounded-lg mb-3 object-cover"
        />
      )}

      {/* Stats (Likes, Comentarios) */}
      <div className="flex justify-between text-gray-500 text-sm mb-2">
        <span>{data.likes} Me gusta</span>
        <span>{data.comments} Comentarios</span>
      </div>

      {/* Acciones: Like, Comentar, Compartir */}
      <div className="flex border-t pt-2 justify-around">
        <IconButton variant="plain" color="neutral">
          <FavoriteBorderIcon /> <span className="ml-1">Me gusta</span>
        </IconButton>
        <IconButton variant="plain" color="neutral">
          <ChatBubbleOutlineIcon /> <span className="ml-1">Comentar</span>
        </IconButton>
        <IconButton variant="plain" color="neutral">
          <ShareIcon /> <span className="ml-1">Compartir</span>
        </IconButton>
      </div>
    </div>
  );
};

// Ejemplo de uso con datos ficticios
const examplePost = {
  user: {
    name: "Ana López",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg", // Imagen de avatar
  },
  createdAt: "2023-04-22T10:00:00Z",
  content: "Este es un post de ejemplo con contenido ficticio.",
  image: "https://source.unsplash.com/random/800x400", // Imagen de muestra
  likes: 120,
  comments: 45,
};

export const ExamplePost = () => {
  return <Post post={examplePost} />;
};