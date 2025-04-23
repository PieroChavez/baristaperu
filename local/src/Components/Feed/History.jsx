// src/components/feed/Stories.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Stories = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const stories = [
    { id: 1, user: "Tu historia", avatar: "https://via.placeholder.com/150" },
    { id: 2, user: "Usuario 1", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3, user: "Usuario 2", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 4, user: "Usuario 3", avatar: "https://randomuser.me/api/portraits/women/3.jpg" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <Slider {...settings}>
        {stories.map((story) => (
          <div key={story.id} className="text-center px-2">
            <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-blue-500 p-0.5">
              <img
                src={story.avatar}
                alt={story.user}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <p className="text-xs mt-1 truncate">{story.user}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};