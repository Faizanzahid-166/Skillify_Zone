// components/Section.jsx
import MovieCard from './MovieCard.jsx';

const Section = ({ title, items }) => (
  <section className="my-6">
    <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
    <div className="flex overflow-x-scroll gap-4">
      {items.map(item => <MovieCard key={item.id} {...item} />)}
    </div>
  </section>
);

export default Section;
