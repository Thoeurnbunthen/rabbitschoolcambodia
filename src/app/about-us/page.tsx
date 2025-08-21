"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHandHoldingHeart } from "react-icons/fa";

const Page = () => {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#F7F5F4] w-full">
      <Navbar />

      <section className="relative w-full h-[60vh] sm:h-[50vh] max-sm:h-[50vh] md:h-screen">
        <Image
          src="/images/image copy 4.png"
          alt="Rabbit School"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div
          className="md:max-w-1/2 absolute inset-0 flex flex-col justify-center px-4 md:px-12 text-start text-[#FED45F] font-extrabold"
          data-aos="fade-up"
        >
          <h1
            className="text-2xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg shadow-black leading-snug"
            data-aos="zoom-in"
          >
            <span className="text-white">Our Story:</span> The Belief That
            Started It All — Every Child Deserves Opportunity
          </h1>
        </div>
      </section>

      <div
        className="bg-white p-6 md:p-12 drop-shadow-lg shadow-black animate-fadeInUp"
        data-aos="fade-left"
      >
        <div className="flex flex-col md:flex-row-reverse md:gap-8 items-center md:items-start ">
          <div className="md:w-1/2 ">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#623D3C]">
              A Belief that Started it All
            </h2>
            <p className="mb-4 flex text-justify md:mt-10 ">
              The Rabbit School is a Cambodian NGO that began in May 1997 as a
              pilot project to provide education to children with special needs
              at the Nutrition Centre— a government-run orphanage in Phnom Penh
              originally established for children aged 0–6 who had been
              abandoned or lost their families during the Khmer Rouge regime
              (1975–1979). In offering education to this extremely disadvantaged
              group, The Rabbit School laid the foundation for Cambodia’s first
              formal educational programs for children with disabilities.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95">
            <Image
              src="/images/Pasted image (8).png"
              alt="Vocational Training"
              width={800}
              height={500}
              className="rounded-lg object-cover w-full h-[200px] max-sm:h-[300px] md:h-[320px]"
            />
          </div>
        </div>
      </div>

      <section className="px-4 md:px-12 mt-12">
        <div
          className="flex flex-col md:flex-row-reverse md:gap-8 items-center md:items-start mb-16"
          data-aos="fade-right"
        >
          <div className="md:w-1/2 mt-6 md:mt-0 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95">
            <Image
              src="/images/Pasted image (7).png"
              alt="Vocational Training"
              width={800}
              height={500}
              className="rounded-lg object-cover w-full h-[200px] max-sm:h-[300px] md:h-[320px]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#623D3C]">
              Growing with the Community
            </h2>
            <p className="mb-4 flex text-justify md:mt-10">
              What started as a small initiative within an orphanage has grown
              into a nationally recognized organization dedicated to inclusive
              education. In 2008, we opened our first integrated classroom
              within Toul Kork Primary School and launched a Vocational Training
              Centre in Phnom Penh. These milestones reflected our expanding
              commitment—not only to education but also to life skills and
              future employment for children with intellectual disabilities and
              autism.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[#8BAEA7] p-6 md:p-12" data-aos="fade-up">
        <div className="flex flex-col md:flex-row-reverse md:gap-8 items-center md:items-start ">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#623D3C]">
              Reaching Further
            </h2>
            <p className="mb-4 flex text-justify md:mt-10">
              Since 2014, The Rabbit School has expanded its impact to other
              parts of the country, now operating education projects in Kandal,
              Kampong Speu, and Siem Reap provinces. Across all our locations,
              we offer tailored learning programs that respect each child’s
              pace, strengths, and unique potential.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95">
            <Image
              src="/images/Pasted image (6).png"
              alt="Vocational Training"
              width={800}
              height={500}
              className="rounded-lg object-cover w-full h-[200px] max-sm:h-[300px] md:h-[320px]"
            />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-12 py-12" data-aos="fade-left">
        <div className="flex flex-col md:flex-row-reverse md:gap-8 items-center md:items-start">
          <div className="md:w-1/2 mt-6 md:mt-0 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95">
            <Image
              src="/images/Pasted image (5).png"
              alt="Vocational Training"
              width={800}
              height={500}
              className="rounded-lg object-cover w-full h-[200px] max-sm:h-[300px] md:h-[320px]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#623D3C]">
              Our Ongoing Commitment
            </h2>
            <p className="mb-4 flex text-justify md:mt-10">
              Today, The Rabbit School stands as a beacon of inclusive education
              in Cambodia. As we continue to evolve, we remain committed to
              expanding access, improving quality, and building a sustainable
              future for our programs.
            </p>
          </div>
        </div>
      </div>

      <section
        className="relative w-full md:h-[50vh] sm:h-[25vh] max-sm:h-[20vh]  flex items-center justify-center"
        data-aos="fade-up"
      >
        <Image
          src="/images/ss.jpg"
          alt="Rabbit School"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#A81B17]/70 via-[#A81B17]/50 to-[#A81B17]/70" />

        <div
          className=" md:max-w-1/1  relative inset-0 flex flex-col justify-center   md:px-12   font-extrabold  z-10 text-center text-white px-4"
          data-aos="fade-right"
        >
          <h1 className="text-2xl md:text-4xl font-bold">
            What Drives Us: A Belief in Every Child
          </h1>
          <p className="mt-4 text-sm md:text-lg">
            Every child deserves a chance to reach their full potential—no
            matter their abilities or background.
          </p>
        </div>
      </section>

      <section className="max-w-8xl mx-auto py-10 px-6" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold text-[#623D3C] mb-10 px-10 sm:px-2 max-sm:px-2">
          Why Cambodia
        </h2>

        <div className="grid  gap-8  text-justify">
          <div className="bg-white shadow-md rounded-lg p-6 flex  justify-between max-sm:flex-col overflow-hidden  transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100 active:scale-90">
            <div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#623D3C] mb-4">
                  A Deeply Marginalized Group
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  In Cambodia, children with intellectual disabilities remain
                  among the most excluded. Inclusive education is still not a
                  national priority, and most schools are not equipped to meet
                  their needs. Traditional beliefs and misinformation further
                  deepen the stigma— many still see disabilities as a punishment
                  for actions in a past life. These societal attitudes leave
                  children isolated, misunderstood, and left behind.
                </p>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#623D3C] mt-6 mb-4">
                  Barriers Made Worse by Poverty
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Poverty intensifies every challenge. Many families cannot
                  afford education, therapy, or care for their child with
                  special needs. Without support, these children often remain at
                  home—hidden from society, without access to learning or a
                  hopeful future.
                </p>
              </div>
            </div>
            <div className="bg-white  p-5">
              <h3 className="text-lg font-bold text-[#623D3C] mb-4">
                Why We Exist
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The Rabbit School is here to change that. Through our education
                programs, vocational training, and family support initiatives,
                we help children with intellectual disabilities overcome the
                many barriers they face—discrimination, lack of adapted
                education, health access, and future employment. We offer more
                than a classroom. We offer inclusion, hope, and pathways to
                self-reliance and independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-15 " data-aos="fade-down">
        <h2 className="text-2xl md:text-3xl font-bold text-[#623D3C] mb-10">
          Our Core Drivers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#79A2C9] text-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <div className="flex gap-5">
              <Image
                src="/images/Pasted image.png"
                alt="Empowerment Icon"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-2xl font-bold text-black max-sm:text-xl sm:text-xl  ">
                Empowerment
              </h3>
            </div>
            <p>
              Supporting children and families to build confidence,
              independence, and a sense of worth.
            </p>
          </div>

          <div className="bg-[#8BAEA7] text-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <div className="flex gap-5">
              <Image
                src="/images/Pasted image (2).png"
                alt="Empowerment Icon"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-2xl font-bold text-black max-sm:text-xl sm:text-xl">
                Empowerment
              </h3>
            </div>
            <p>
              Supporting children and families to build confidence,
              independence, and a sense of worth.
            </p>
          </div>

          <div className="bg-[#8BAEA7] text-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <div className="flex gap-5">
              <Image
                src="/images/Pasted image (3).png"
                alt="Empowerment Icon"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-2xl font-bold text-black max-sm:text-xl sm:text-xl">
                Empowerment
              </h3>
            </div>
            <p>
              Supporting children and families to build confidence,
              independence, and a sense of worth.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6" data-aos="fade-right">
        <div className="mt-20 ">
          <h3 className="text-4xl text-[#623D3C] sm:text-2xl max-sm:text-2xl font-bold p-5 ">
            Picture Of Students
          </h3>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 pb-4">
              {[
                "/images/image copy.png",
                "/images/image copy 6.png",
                "/images/image copy 2.png",
                "/images/image copy 4.png",
                "/images/image copy 5.png",
                "/images/image copy 3.png",
              ].map((src, i) => (
                <div
                  key={i}
                  onClick={() => setActive(active === i ? null : i)}
                  className={`min-w-[250px] bg-white rounded-xl shadow-md shadow-gray-400 
                    overflow-hidden transition-all duration-300 cursor-pointer
                    hover:scale-110 hover:shadow-xl hover:z-10
                    ${
                      active === i
                        ? "scale-110 shadow-xl z-10"
                        : "scale-95 opacity-80"
                    }
                  `}
                >
                  <Image
                    src={src}
                    alt={`Activity ${i + 1}`}
                    width={300}
                    height={200}
                    className="w-full h-70 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="max-w-2xl mx-auto py-12 px-4 sm:px-6 text-center"
        data-aos="fade-left"
      >
        <h2 className="text-2xl sm:text-xl md:text-4xl font-bold text-[#623D3C]">
          Aligned with the UN SDG Goals
        </h2>
        <p className="mt-4 text-black text-sm  ">
          Our work supports inclusive and equitable quality education, decent
          work, and reduced inequalities.
        </p>

        <div className="grid grid-cols-1 max-sm:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 mt-8  max-sm:gap-1">
          <Image
            src="/images/Pasted image (9).png"
            alt="SDG 4 Quality Education"
            width={100}
            height={100}
            className="rounded-lg shadow-md object-cover max-sm:w-25 max-sm:h-25 md:w-full mx-auto"
          />

          <Image
            src="/images/Pasted image (10).png"
            alt="SDG 8 Decent Work and Economic Growth"
            width={200}
            height={200}
            className="rounded-lg shadow-md object-cover max-sm:w-25 max-sm:h-25 md:w-full mx-auto"
          />

          <Image
            src="/images/Pasted image (11).png"
            alt="SDG 10 Reduced Inequalities"
            width={200}
            height={200}
            className="rounded-lg shadow-md object-cover max-sm:w-25 max-sm:h-25 md:w-full mx-auto"
          />
        </div>
        <div className=" w-30 mt-10 ">
          <Link
            href="/donate"
            className="hidden md:flex items-center space-x-2 bg-orange-400 hover:bg-orange-500 text-white font-medium px-5 py-2 rounded-full transition"
          >
            <FaHandHoldingHeart />
            <span>Donate</span>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
