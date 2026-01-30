import "./App.css";

function App() {
  const genres = [
    {
      name: "Action",
      desc: "High energy movies with stunts and fights.",
      img: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee"
    },
    {
      name: "Comedy",
      desc: "Light-hearted movies meant to entertain.",
      img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
    },
    {
      name: "Drama",
      desc: "Story-based movies with emotional depth.",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    {
      name: "Horror",
      desc: "Movies designed to scare the audience.",
      img: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee"
    },
    {
      name: "Sci-Fi",
      desc: "Futuristic movies based on science.",
      img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Movie Genres</h2>

      <div className="row g-4">
        {genres.map((g, index) => (
          <div className="col-md-4" key={index}>
            <div className="card genre-card">
              <img src={g.img} className="card-img-top" alt={g.name} />
              <div className="card-body">
                <h5 className="card-title">{g.name}</h5>
                <p className="card-text">{g.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;