function Navbar () { 
return ( 
<nav className="text-white bg-gray-700/80 fixed top-D0 left-0 right-0 z-50 border-b border-white/20 px-8 py-2 mt-5 ml-8 mr-8"  style={{ 
display: "flex", 
justifyContent: "space-between", 
alignItems: "center", 
boxShadow: "0 2px 8px rgba(0,0,0,0.08)", 
borderRadius: "323px",
}}> 
<div style={{ fontWeight: "bold", fontSize: "1.2rem" }}> 
✈ Aventra Travel 
</div> 
<ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0 }}> 
<li>Discover</li> 
<li>Journeys</li> 
<li>Travel Styles</li> 
<li>Offers</li> 
</ul> 
<button  className="font-semibold" style={{ 
background: "white", 
color: "black", 
padding: "0.6rem 1.4rem", 
borderRadius: "50px", 
border: "none"  
}}> 
Book a trip 
</button> 
</nav> 
); 
} 
export default Navbar; 