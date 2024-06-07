import React from "react";
import { useState } from "react";
const Home = () => {
  const [form, setform] = useState({ query: "" });
  const [persist, setPersist] = useState("");

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/home", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ ...form }),
    });
    const a = await res.json();
    console.log(a.query);
    setPersist(pre=>pre + a.query);
  };
  return (
    <div className="container flex justify-evenly  ">
      <div className="">
         <form>
          <input
            type="text"
            name="query"
            id="query"
            placeholder="enter query"
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <div className="mt-20">{persist}</div>
    </div>
  );
};

export default Home;
