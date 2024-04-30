import Image from "next/image";

export const Testimonials = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <h3 className="text-[#073141] uppercase text-[24px] font-extrabold tracking-[3.6px] font-manrope">
            testımonıals
          </h3>
          <p className="text-[20px] text-[#073141] font-inter mt-[20px] mb-[40px] md:w-[1000px] text-center">
            At DesignForge, we take pride in the success and satisfaction of our
            members. But don{"'"}t just take our word for it—hear what our
            community has to say about their experience with DesignForge.
          </p>
        </div>
        <div className="flex gap-[40px] overflow-hidden">
          <div className="flex gap-[40px] shrink-0">
            {Testimonies.map((testimony, index) => {
              return (
                <div
                  className="p-[40px] flex gap-[40px] box items-center basis-[753px]"
                  key={index}
                >
                  <Image
                    src={`${testimony.image}`}
                    alt=""
                    width={300}
                    height={400}
                  />
                  <div
                    className="flex flex-col"
                    style={{ width: "calc(100% - 300px)" }}
                  >
                    <span className="text-[#073141] text-[24px] font-semibold font-manrope">
                      {testimony.name}
                    </span>
                    <span className="font-inter text-[#073141] text-[18px]">
                      {testimony.context}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const Testimonies = [
  {
    image: "/assets/Rectangle 18.png",
    name: "Jackson Chen",
    context:
      "I've been a member of DesignForge for over a year now, and I can honestly say it's one of the best decisions I've made for my art career. The workshops are top-notch, and I've had the opportunity to connect with fellow artists and even collaborate on projects. DesignForge is a true gem in the digital art community.",
  },
  {
    image: "/assets/Rectangle 18 (1).png",
    name: "Sophia Lee",
    context:
      "DesignForge has been an invaluable resource for me as a digital artist. The tutorials are well-explained and easy to follow, and the community is incredibly supportive. I've learned so much and grown as an artist since joining DesignForge. Highly recommended!",
  },
];
