import Image from "next/image";

export const Resources = () => {
  return (
    <>
      <div className="pt-[201px] pb-[206px] flex flex-col items-center">
        <h3 className="text-[#073141] uppercase text-[24px] font-extrabold tracking-[3.6px] font-manrope">
          Resources and tutorials
        </h3>
        <p className="font-inter text-[#F6FDFF] mt-[20px] mb-[40px] md:w-[1000px] text-center whitespace-pre-line">
          {`Welcome to the Resources and Tutorials section of DesignForge—a treasure trove of knowledge and inspiration for digital artists and enthusiasts. Whether you're looking to sharpen your skills, learn new techniques, or dive deeper into the world of digital art, you'll find everything you need right here. Explore our collection of resources, tutorials, and guides curated to help you unlock your creative potential and take your artistry to the next level.
          `}
        </p>
        <div className="grid grid-cols-2 container mx-auto  px-[100px] gap-[40px]">
          {ResourcesArray.map((resource, index) => {
            return (
              <div
                className="p-[40px] box flex gap-[40px] items-center"
                key={index + 1}
              >
                <Image src={`${resource.image}`} alt="" width={200} height={200} />
                <div
                  className="flex flex-col gap-[10px]"
                  style={{ width: "calc(100% - 200px)" }}
                >
                  <span className="text-[#073141] text-[24px] font-semibold font-manrope">
                    {resource.name}
                  </span>
                  <span className="text-[#073141] font-inter text-[18px]">
                    {resource.context}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <h3 className="text-[#073141] uppercase text-[24px] mt-[40px] mb-[20px] font-extrabold tracking-[3.6px] font-manrope">
          HELPFUL GUIDES
        </h3>
        <div className="grid grid-cols-2 container mx-auto  px-[100px] gap-[40px]">
          {HelpfulGuide.map((resource, index) => {
            return (
              <div
                className="p-[40px] box flex gap-[40px] items-center"
                key={index + 1}
              >
                <Image src={`${resource.image}`} alt="" width={200} height={200} />
                <div
                  className="flex flex-col gap-[10px]"
                  style={{ width: "calc(100% - 200px)" }}
                >
                  <span className="text-[#073141] text-[24px] font-semibold font-manrope">
                    {resource.name}
                  </span>
                  <span className="text-[#073141] font-inter text-[18px]">
                    {resource.context}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <h3 className="text-[#073141] uppercase text-[24px] mt-[40px] mb-[20px] font-extrabold tracking-[3.6px] font-manrope">
          INSPIRING WORKSHOPS
        </h3>
        <div className="grid grid-cols-2 container mx-auto  px-[100px] gap-[40px]">
          {Workshops.map((resource, index) => {
            return (
              <div
                className="p-[40px] box flex gap-[40px] items-center"
                key={index + 1}
              >
                <Image src={`${resource.image}`} alt="" width={200} height={200} />
                <div
                  className="flex flex-col gap-[10px]"
                  style={{ width: "calc(100% - 200px)" }}
                >
                  <span className="text-[#073141] text-[24px] font-semibold font-manrope">
                    {resource.name}
                  </span>
                  <span className="text-[#073141] font-inter text-[18px]">
                    {resource.context}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const ResourcesArray = [
  {
    image: "/assets/photo (3).png",
    name: "Digital Painting 101",
    context:
      "Dive into the fundamentals of digital painting with our comprehensive guide. Learn essential techniques, brush settings, and color theory tips to create stunning digital artworks with confidence and precision.",
  },
  {
    image: "/assets/photo (4).png",
    name: "Comprehensive",
    context:
      "Discover the secrets of effective composition and visual storytelling in our comprehensive tutorial. Learn to arrange elements in your artwork for captivating compositions that convey your message with clarity and impact.",
  },
  {
    image: "/assets/photo (5).png",
    name: "Introduction to 3D Modeling",
    context:
      "Dive into the fundamentals of digital painting with our comprehensive guide. Learn essential techniques, brush settings, and color theory tips to create stunning digital artworks with confidence and precision.",
  },
  {
    image: "/assets/photo (6).png",
    name: "Exploring Animation",
    context:
      "Elevate your art with our animation tutorial series, covering everything from keyframe basics to advanced rigging and motion graphics. Our step-by-step guides will empower you to master animation and infuse vitality into your creations.",
  },
];

const HelpfulGuide = [
  {
    image: "/assets/photo (7).png",
    name: "Choosing the Right Digital Art Software:",
    context:
      "Dive into the fundamentals of digital painting with our comprehensive guide. Learn essential techniques, brush settings, and color theory tips to create stunning digital artworks with confidence and precision.",
  },
  {
    image: "/assets/photo (8).png",
    name: "Navigating the Digital Art Market",
    context:
      "Ready to advance your art career? Our guide navigates the digital art market, offering insights and tips for promoting your work, enhancing your online presence, and monetizing your talents.",
  },
  {
    image: "/assets/photo (9).png",
    name: "Understanding Color Theory",
    context:
      "Discover color theory's power to elevate your digital artworks. Master harmony, contrast, and symbolism for visually striking compositions that resonate with your audience.",
  },
];

const Workshops = [
  {
    image: "/assets/photo (10).png",
    name: "Choosing the Right Digital Art Software:",
    context:
      "Elevate your digital painting skills with our workshop series. Covering advanced rendering techniques and specialized subjects, our masterclasses unlock your full creative potential.",
  },
  {
    image: "/assets/photo (11).png",
    name: "Character Design Bootcamp",
    context:
      "Join our intensive character design workshop for a unique journey. Our expert instructors will guide artists of all levels in crafting compelling characters brimming with depth, personality, and visual allure.",
  },
  {
    image: "/assets/photo (12).png",
    name: "Artistic Entrepreneurship Seminar",
    context:
      "Discover color theory's power to elevate your digital artworks. Master harmony, contrast, and symbolism for visually striking compositions that resonate with your audience.",
  },
];
