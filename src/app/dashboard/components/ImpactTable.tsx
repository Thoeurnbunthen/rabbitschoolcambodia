"use client";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ImpactTable({ impacts, onUpdate }: any) {
  const handleDelete = async (id: number) => {
    await fetch("/api/impact", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    onUpdate();
  };

  return (
    <table className="w-full border-collapse border border-gray-300 mt-6">
      <thead>
        <tr>
          <th className="border p-2">ID</th>
          <th className="border p-2">Title</th>
          <th className="border p-2">Value</th>
          <th className="border p-2">Unit</th>
          <th className="border p-2">Icon</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {impacts.map((impact: any) => (
          <tr key={impact.id}>
            <td className="border p-2">{impact.id}</td>
            <td className="border p-2">{impact.title}</td>
            <td className="border p-2">{impact.value}</td>
            <td className="border p-2">{impact.unit}</td>
            <td className="border p-2">{impact.icon}</td>
            <td className="border p-2 flex gap-2">
              <button className="text-blue-500">
                <FaEdit />
              </button>
              <button
                className="text-red-500"
                onClick={() => handleDelete(impact.id)}
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
