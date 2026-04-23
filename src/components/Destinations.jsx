import { useState, useEffect } from "react";

function Destinations() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
const [error, setError] = useState(null); 

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/alpha?codes=mx,id,jp,th")
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed"); 
        return res.json();
      })
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch(() => {                          
        setError("Could not load destinations. Try again.");
        setLoading(false);
      });
  }, []); 

  return (
    <section style={{ padding: "3rem 2rem", background: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "0.25rem" }}>
        Curated Destinations
      </h2>
      <p style={{ textAlign: "center", color: "#666", marginBottom: "2rem" }}>
        by Aventra
      </p>

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading destinations...</p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          maxWidth: "500px",
          margin: "0 auto",
        }}>
          {countries.map((country) => (
            <div
              key={country.cca2}
              style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}
            >
              <img
                src={country.flags.png}
                alt={country.name.common}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                color: "white",
                padding: "1rem 0.75rem",
              }}>
                <strong>{country.name.common}</strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Destinations;