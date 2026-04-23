import { useState } from "react";

function HeroSection () {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("");

  const handleSearch = () => {
  if (!destination.trim()) {
    alert("Please enter a destination");
    return;
  }
  alert(`Searching trips to: ${destination}`);
};

  return (

<div
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    position: "relative",
    top: "-30px"
  }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/5" />

  <div style={{ position: "relative", zIndex: 1 }}>
    <div className=" mt-5 "  style={{

      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "3rem 2rem",
      position: "relative",
      color: "white"
      
    }}>
      <div className="" style={{
        position: "absolute", inset: 0,
       
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}>
        <p  className="px-3 py-2 border-2 w-60 rounded-4xl bg-gray-600/50 z-50 border-b border-white/20 text-white" style={{ fontSize: "0.85rem" }}>New summer destinations added</p>
        <h1 style={{ fontSize: "3rem", fontWeight: "800", lineHeight: 1.2 }}>
          Discover the World<br />Through Aventra
        </h1>
        <p>Handpicked destinations crafted for modern explorers.</p>

        <div className="w-200" style={{
          display: "flex",
          gap: "0.5rem",
          background: "white",
          borderRadius: "50px",
          padding: "0.5rem 0.75rem",
          marginTop: "1.5rem",
          alignItems: "center"
        }}>
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
</span>
          <input
            placeholder=" Where to?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={{ border: "none", outline: "none", flex: 1, padding: "0.4rem", color: "black" }}
          />
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>

          </span>
          <input
            type="date"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            style={{ border: "none", outline: "none", flex: 1, padding: "0.4rem", color: "black" }}
          />
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>

          </span>
          <input
            placeholder="Guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            style={{ border: "none", outline: "none", flex: 1, padding: "0.4rem", color: "black" }}
          />
          <button
            onClick={handleSearch}
            style={{
              background: "black",
              color: "white",
              padding: "0.6rem 1.4rem",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer"
            }}
          >
            Search
          </button>
        </div>

        {destination && (
          <p style={{ marginTop: "0.75rem", fontSize: "0.9rem" }}>
            Searching trips to: <strong>{destination}</strong>
          </p>
        )}
      </div>
    </div>
  </div>
</div>

    
  );
};

export default HeroSection;