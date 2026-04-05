"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "Jerome Az",
    role: "Upwork Client",
    text: "Very quick delivery and very responsive. All tasks were successfully completed. Will hire again.",
  },
  {
    name: "Sean Blanchfield",
    role: "Upwork Client",
    text: "Provided exactly what I needed with clean and easy-to-understand code. Highly recommended.",
  },
  {
    name: "Sampath Bingi",
    role: "Upwork Client",
    text: "Extraordinary professional. Strong attention to detail and excellent implementation.",
  },
  {
    name: "Aman Verma",
    role: "Startup Founder",
    text: "Delivered beyond expectations. Clean architecture and scalable code.",
  },
  {
    name: "Rohit Sharma",
    role: "Product Manager",
    text: "Very reliable developer. Communication and execution both top-notch.",
  },
];

const Testimonials = ({ data = testimonialsData }) => {
  if (!data || data.length === 0) return null;

  return (
    <section
      id="testimonials" className="min-h-[120vh] flex flex-col items-center pt-20 md:pt-24 pb-20 md:pb-24 relative text-white bg-black px-6 overflow-hidden scroll-mt-24">
      {/* Heading */}
      <motion.div className="mb-10 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>

        <h2 className="text-3xl md:text-4xl font-semibold px-6 py-3 rounded-full bg-black/80 backdrop-blur-md relative inline-block mx-auto">
          <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#ff00af] to-[#ffcc00] -z-10">
            <span className="block w-full h-full rounded-full bg-black"></span>
          </span>
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">
            Testimonials
          </span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed">
          Feedback from{" "}
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">
            clients and collaborators
          </span>{" "}
          reflecting my{" "}
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">
            technical expertise, professionalism
          </span>{" "}
          and commitment to delivering{" "}
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">
            scalable, high-impact solutions
          </span>.
        </p>
      </motion.div>

      <motion.div className="w-full max-w-6xl"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
        <Swiper modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className} custom-dot"></span>`;
            },
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-[1.5px] rounded-xl bg-gradient-to-r from-[#ff00af] to-[#ffcc00]">
                <div className="rounded-2xl bg-[#111] p-6 h-full border border-white/5 ">

                  <div className="text-4xl mb-4 text-pink-500">“</div>

                  <p className="text-gray-300 text-sm mb-6">
                    {item.text}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ff00af] to-[#ffcc00] flex items-center justify-center text-white">
                      {item.name.charAt(0)}
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-400">
                        {item.role}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls */}
        <motion.div className="flex items-center justify-center gap-6 mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>

          {/* Prev */}
          <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#ff00af] to-[#ffcc00]">
            <button className="custom-prev w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#353535] transition" aria-label="Previous testimonial">
              <FiChevronLeft size={18} />
            </button>
          </div>

          {/* Dots */}
          <div className="custom-pagination flex items-center gap-2"></div>

          {/* Next */}
          <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#ff00af] to-[#ffcc00]">
            <button className="custom-next w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#353535] transition" aria-label="Next testimonial">
              <FiChevronRight size={18} />
            </button>
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
};

export default Testimonials;