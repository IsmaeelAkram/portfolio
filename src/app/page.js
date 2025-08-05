import Badges from "@/components/badges";
import Content from "@/components/content";
import Logo from "@/components/logo";
import MyImage from "@/components/myImage";
import SocialIcon from "@/components/socialIcon";
import Image from "next/image";

const socials = [
  { src: "linkedin", href: "https://linkedin.com/in/ismaeelakram" },
  { src: "github", href: "https://github.com/ismaeelakram" },
  { src: "mail", href: "mailto:ismaeel@ismaeelakram.com" },
];

export default function Home() {
  return (
    <div className="p-10">
      <p className="font-serif text-[40px]">
        My website is under construction.
      </p>
      <a href="/Resume.pdf" className="font-serif !text-[20px]">
        Here is my résumé
      </a>
    </div>
  );
  return (
    <div className="w-full h-screen flex flex-col sm:p-10 p-3">
      <div className="grid grid-cols-1 sm:grid-cols-6 w-full">
        <div className="flex justify-start items-center sm:col-span-4 w-full sm:h-full">
          <Logo />
        </div>
        <div className="sm:col-span-2">
          <div className="flex flex-row mt-2 sm:mt-0 justify-end items-center gap-1 h-full">
            {socials.map((social, i) => (
              <SocialIcon social={social} key={i} i={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-full mt-8">
        <div className="sm:col-span-6 flex justify-start items-start w-full h-full">
          <Content />
        </div>
        {/* <div className="sm:col-span-2 flex justify-start items-center">
					<div className="grid auto-rows-auto">
						<div className="flex justify-center items-center">
							<MyImage />
						</div>
						<div className="flex justify-center items-center my-4">
							<Badges />
						</div>
					</div>
				</div> */}
      </div>
    </div>
  );
}
