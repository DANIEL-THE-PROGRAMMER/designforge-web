import { Artist, Artwork, Exhibition } from "../icons";

export const About = () => {
  return (
    <>
      <div className="flex flex-col pt-[189px] pb-[200px] px-[215px] container mx-auto items-center">
        <h3 className="text-[#073141] uppercase text-[24px] font-extrabold tracking-[3.6px] font-manrope">
          ABOUT DESIGNFORGE
        </h3>
        <p className="text-[20px] text-[#073141] font-inter mt-[20px] mb-[40px] text-center">
          Where creativity knows no bounds and digital art takes center stage.
          At DesignForge, we believe in the power of imagination to transform
          pixels into masterpieces, and we{"'"}re passionate about fostering a
          vibrant community of digital artists, designers, and enthusiasts from
          around the globe.
        </p>
        <div className="flex justify-between items-center w-[1000px]">
          {AboutArray.map((content, index) => {
            return (
              <div className="flex flex-col items-center" key={index}>
                <span>{content.icon}</span>
                <span className="text-[#073141] font-inter text-[18px] font-semibold leading-[24px] mt-[10px] mb-[13px]">
                  {content.name}
                </span>
                <span className="font-medium text-[32px] leading-[42px] font-inter">
                  {content.count}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const AboutArray = [
  {
    icon: <Artist />,
    name: "Artist",
    count: `100 +`,
  },
  {
    icon: <Artwork />,
    name: "Artwork",
    count: `200`,
  },
  {
    icon: <Exhibition />,
    name: "Online Exhibition",
    count: `10`,
  },
  {
    icon: <Artist />,
    name: "Experience",
    count: `2 years`,
  },
];
