"use client";
import { useState } from "react";

export default function ImpactForm({ onSave }: any) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [unit, setUnit] = useState("+");
  const [icon, setIcon] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("/api/impact", {
      method: "POST",
      body: JSON.stringify({ title, value, unit, icon }),
      headers: { "Content-Type": "application/json" },
    });
    setTitle("");
    setValue(0);
    setUnit("+");
    setIcon("");
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="number"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Unit"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Icon"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-[#623D3C] text-white py-2 px-4 rounded"
      >
        Add Impact
      </button>
    </form>
  );
}
