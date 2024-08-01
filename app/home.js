"use client";
import { useState } from "react";
import "@/app/globals.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Error submitting email");
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center p-8 relative">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Join Our Waitlist!
        </h1>
        <p className="text-lg text-gray-400">
          Be the first to know when we launch. Enter your email to join our
          waitlist.
        </p>
      </header>
      <form onSubmit={handleSubmit} className="w-full md:w-1/3 flex flex-col md:flex-row gap-4">
        <Input
          className="input-field"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Submit
        </Button>
      </form>
      <div className="p-4">
        {message && <p className="text-white">{message}</p>}
      </div>
    </div>
    </div>
  );
};

export default Home;
