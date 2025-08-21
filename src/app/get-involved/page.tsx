"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { FaHandHoldingHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const GetInvolvedPage = () => {
  return (
    <>
      <Navbar />

      <div className="font-sans">
        {/* Intro */}
        <motion.section
          className="text-center py-8 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold mb-6 text-[#623D3C]">
            GET INVOLVED
          </h1>
          <p className="text-gray-700">
            There are many ways to support Rabbit School and help transform the
            lives of children and youth with intellectual disabilities and
            autism in Cambodia. Choose the path that speaks to you—and become
            the reason a child can grow up with dignity, opportunity, and
            self-reliance.
          </p>
        </motion.section>

        {/* Join Hands */}
        <motion.section
          className="bg-gray-100 px-6 flex flex-col md:flex-row items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        ></motion.section>

        <motion.section
          className="py-12 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto font-sans">
            {[
              {
                title: "Make a Donation",
                text: "Every contribution helps us strengthen and expand our programs, ensuring the highest quality education and opportunities for our students.",
                image: "/images/donation.png",
                bg: "bg-yellow-300",
                link: "/donate",
                button: "Donate now",
              },
              {
                title: "Join Hands with Us",
                text: "Partner your company with Rabbit School to create opportunities for children and youth with intellectual disabilities and autism in Cambodia.",
                image: "/images/join.png",
                bg: "bg-blue-400",
                link: "/contact",
                button: "Join with us",
              },
              {
                title: "Work with us",
                text: "Join our passionate team and help empower children and youth with intellectual disabilities and autism to reach their full potential.",
                image: "/images/work.png",
                bg: "bg-orange-300",
                link: "/jobs",
                button: "Jobs & Work",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className={`${card.bg} rounded-2xl shadow-lg p-8 text-left flex flex-col justify-between`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div>
                  <Image
                    src={card.image}
                    alt={`${card.title} icon`}
                    width={40}
                    height={40}
                    className="mb-4"
                  />
                  <h3 className="text-lg font-bold text-[#623D3C] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#623D3C] text-sm mb-6">{card.text}</p>
                </div>

                {/* Button with underline */}
                <Link
                  href={card.link}
                  className="block w-25 border-b-2 border-black group-hover:border-gray-700 transition"
                >
                  {card.button}

                  {/* Animated underline */}
                  <span className="absolute text-black/90 left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      <Footer />
    </>
  );
};

export default GetInvolvedPage;
