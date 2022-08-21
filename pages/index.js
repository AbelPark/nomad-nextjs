import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (await fetch("/api/movies")).json();
  return {
    props: {
      results,
    },
  };
}
