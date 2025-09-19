// src/components/MovieCard.jsx

const MovieCard = ({ title, thumbnail }) => {
  return (
    <div
      className="min-w-[150px] sm:min-w-[180px] cursor-pointer transform transition duration-300 hover:scale-90 hover:brightness-110 hover:shadow-lg"
    >
      <img
        src={thumbnail}
        alt={title}
        className="rounded-lg w-full h-70 object-cover"
      />
      <h2 className="text-white text-sm mt-2">{title}</h2>
    </div>
  );
};

export default MovieCard;
