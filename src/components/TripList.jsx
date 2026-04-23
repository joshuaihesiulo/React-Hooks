import TripCard from "./TripCard";

const trips = [
  {
    id: 1,
    destination: "Japan Express",
    route: "Osaka to Tokyo",
    days: 9,
    groupSize: "18-30s",
    price: 2624,        // ✅ make sure this exists
    oldPrice: 3499,
    savings: 875,
    departureDate: "Jul 31, 2026",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400",
  },
  {
    id: 2,
    destination: "Antarctica Classic",
    route: "Ushuaia to Ushuaia",
    days: 11,
    groupSize: "18-40s",
    price: 9399,        // ✅ make sure this exists
    oldPrice: 9999,
    savings: 600,
    departureDate: "Mar 22, 2027",
    image: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400",
  },
  {
    id: 3,
    destination: "Costa Rica Quest",
    route: "San José to San José",
    days: 15,
    groupSize: "20-44s",
    price: 1259,        // ✅ make sure this exists
    oldPrice: 1499,
    savings: 240,
    departureDate: "May 22, 2026",  // ✅ comma here!
    image: "https://images.unsplash.com/photo-1518259102261-b40117eabbc9?w=400",
  },
  {
  id: 4,
  destination: "Lagos Beach Escape",
  route: "Lagos Island to Tarkwa Bay",
  days: 5,
  groupSize: "18-35s",
  price: 850,
  oldPrice: 1100,
  savings: 250,
  departureDate: "Aug 10, 2026",
  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/8e/70/d7/beach.jpg?w=1000&h=-1&s=1",
}
];

function TripList() {
  return (
    <section className="" style={{ padding: "3rem 2rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
        The Aventra Experience
      </h2>
      <p style={{ color: "#666", marginBottom: "2rem" }}>
        Seamless planning, curated stays, and support at every step
      </p>

      <div style={{
        display: "flex",
        gap: "1.5rem",
        justifyContent: "center",
        flexWrap: "wrap",
      }}>
        {trips.map((trip) => (
          <TripCard key={trip.id} {...trip} />
        ))}
      </div>
    </section>
  );
}

export default TripList;