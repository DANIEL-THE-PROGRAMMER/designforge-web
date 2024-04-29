import Image from "next/image";
import Link from "next/link";

export const Nav = () => {
  return (
    <>
      <div className="flex justify-between items-center h-[111px] px-[30px]">
        <Image src="/assets/logo.png" alt="" width={204} height={51} />
        <nav className="flex items-center">
          <ul className="flex gap-[70px] items-center font-semibold text-[18px] font-inter">
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="">Featured Artwork</Link>
            </li>
            <li>
              <Link href="">Artists Spotlight</Link>
            </li>
            <li>
              <Link href="">Resources and Tutorials</Link>
            </li>
            <li>
              <Link href="">Testimonials</Link>
            </li>
          </ul>
        </nav>
        <button className="outline-none border-none w-[192px] min-h-[50px] bg-[#1D7293] text-white text-[18px] font-semibold font-inter rounded-[12px] shadow-bs">
          Login
        </button>
      </div>
    </>
  );
};
