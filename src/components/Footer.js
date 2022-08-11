import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer className="fixed bottom-8 w-full h-[80px]">
      <div className="flex items-center justify-center gap-x-10">
        <a href="https://github.com/ismailkaraalioglu" className=" hover:opacity-50 transition-all ease-linear">
          <BsGithub size={30} />
        </a>
        <a href="https://github.com/ismailkaraalioglu" className=" hover:opacity-50 transition-all ease-linear">
          <BsLinkedin size={30} />
        </a>
        <a href="https://github.com/ismailkaraalioglu" className=" hover:opacity-50 transition-all ease-linear">
          <BsTwitter size={30} />
        </a>
      </div>

      <h1 className="text-center mt-5 text-xl">Created with care by İsmail Karaalioğlu</h1>
    </footer>
  );
}

export default Footer;
