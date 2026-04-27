import { motion } from 'motion/react';

const PHOTOS = [
  { id: 1, src: "/regenerated_image_1777321644281.png", rotation: "-5deg", caption: "where it all started" },
  { id: 2, src: "/regenerated_image_1777321418288.png", rotation: "3deg", caption: "3am and still talking" },
  { id: 3, src: "/regenerated_image_1777321419946.png", rotation: "-2deg", caption: "kaisi hai? (every single day)" },
  { id: 4, src: "/regenerated_image_1777321421789.png", rotation: "4deg", caption: "noticed everything. said nothing." },
  { id: 5, src: "/regenerated_image_1777320202204.png", rotation: "-3deg", caption: "the feeling was mutual all along" },
  { id: 6, src: "/regenerated_image_1777322191480.png", rotation: "2deg", caption: "us, always" },
];

export default function Scrapbook() {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto flex flex-wrap justify-center gap-12 sm:gap-20">
      {PHOTOS.map((photo, index) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, y: 50, scale: 0.9, rotate: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: photo.rotation
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, zIndex: 50, rotate: "0deg" }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="bg-white p-4 pb-12 shadow-2xl relative"
        >
          <div className="w-64 h-80 overflow-hidden bg-gray-100">
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="absolute bottom-3 left-0 right-0 text-center font-body italic text-gray-800 text-lg">
            {photo.caption}
          </p>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-white pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
}
