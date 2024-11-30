import React from "react";
import { Container } from "./Container";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { TbArrowBigRightFilled } from "react-icons/tb";

export const Navigation = () => {
  return (
    <div className="sticky top-0 backdrop-blur-xl bg-[rgba(0,0,0,0.8)] border-b border-slate-800 z-50">
      <Container className="flex justify-between py-5">
        <Link href="/">
          <Image src={logo} alt="Family Guy" width={70} height={60} />
        </Link>
        <Link
          href="/quiz"
          className="flex items-center justify-center gap-1 px-5 font-semibold text-black transition-colors bg-green-500 rounded-md duration-600 hover:bg-green-600"
        >
          <TbArrowBigRightFilled className="text-lg" />
          Take a Quiz
        </Link>
      </Container>
    </div>
  );
};
