"use client"; // using hooks
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Impact {
  id: number;
  title: string;
  value: number;
  unit?: string;
  icon?: string;
}

export default function DashboardPage() {
  const [impacts, setImpacts] = useState<Impact[]>([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/dashboard/login");
  }, [router]);

  useEffect(() => {
    async function fetchImpacts() {
      const res = await fetch("/dashboard/api/impact");
      const data = await res.json();
      setImpacts(data);
    }
    fetchImpacts();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Impact Dashboard</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Value</th>
            <th className="border p-2">Unit</th>
            <th className="border p-2">Icon</th>
          </tr>
        </thead>
        <tbody>
          {impacts.map((impact) => (
            <tr key={impact.id}>
              <td className="border p-2">{impact.id}</td>
              <td className="border p-2">{impact.title}</td>
              <td className="border p-2">{impact.value}</td>
              <td className="border p-2">{impact.unit || "-"}</td>
              <td className="border p-2">{impact.icon || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
