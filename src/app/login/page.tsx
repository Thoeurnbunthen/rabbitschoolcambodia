"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (data.token) {
      // Save token in cookie
      document.cookie = `token=${data.token}; path=/; max-age=3600`;

      // Optional: still keep localStorage
      localStorage.setItem("token", data.token);

      router.push("/dashboard");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="relative py-3 sm:max-w-xs sm:mx-auto">
        <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg">
          <form
            onSubmit={handleLogin}
            className="flex flex-col justify-center items-center h-full select-none"
          >
            {/* Header */}
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <a href="https://amethgalarcio.web.app/" target="_blank">
                <img
                  src="https://amethgalarcio.web.app/assets/logo-42fde28c.svg"
                  className="w-8"
                  alt="logo"
                />
              </a>
              <p className="m-0 text-[16px] font-semibold dark:text-white">
                Login to your Account
              </p>
              <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                Get started with our app, just sign in and enjoy the experience.
              </span>
            </div>

            {/* Email */}
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-400">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
                required
              />
            </div>

            {/* Password */}
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-400">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
                required
              />
            </div>

            {/* Submit */}
            <div className="mt-5 w-full">
              <button
                type="submit"
                className="py-2 px-8 bg-blue-500 hover:bg-blue-800 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg cursor-pointer select-none"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
