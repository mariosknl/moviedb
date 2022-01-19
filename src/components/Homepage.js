import { useEffect } from "react";

function Homepage() {
  return (
    <div className="w-full h-full mx-auto">
      <h1 className="font-bold mx-auto">Welcome to the MovieDb</h1>
      <input type="text" placeholder="Search for your desired movie..." />
    </div>
  );
}

export default Homepage;
