import MaxWidthWrapper from "./MaxWidthWrapper";
import { Link, animateScroll as scroll } from "react-scroll";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import HighlightText from "./HighlightText";
import Logo from "@/public/assets/Logo.png";
import Image from "next/image";

interface NavbarProps {
    brandName: string;
}

const Navbar = (props: NavbarProps) => {
    return (
        <div className="bg-inherit sticky z-50 top-0 inset-x-0 flex items-center border-b border-orange-50 shadow-sm">
            <header className="relative m-2 w-full">
                <MaxWidthWrapper>
                    {/* Mobile Navbar */}
                    <div className="md:hidden w-full flex items-center justify-end bg-inherit rounded-sm">
                        <Sheet>
                            <SheetTrigger asChild>
                                <MenuIcon className="h-12 w-12 cursor-pointer" />
                            </SheetTrigger>
                            <SheetContent side="top" className="bg-[#F4EADF]">
                                <SheetHeader className="flex flex-col md:gap-6 gap-4">
                                    <SheetTitle className="flex md:gap-6 gap-4 items-center">
                                        <SheetTrigger asChild>
                                            <Link
                                                to="Home"
                                                activeClass="active"
                                                className="cursor-pointer md:w-10 md:h-10 w-8 h-8"
                                                offset={-150}
                                                duration={500}
                                                smooth={true}
                                                spy={true}
                                            >
                                                <Image
                                                    src={Logo}
                                                    alt="Image"
                                                    className="aspect-square object-contain"
                                                    layout="responsive"
                                                    width={100}
                                                    height={100}
                                                />
                                            </Link>
                                        </SheetTrigger>
                                        <HighlightText
                                            className="md:text-3xl text-2xl leading-3 font-medium"
                                            text={props.brandName}
                                        />
                                    </SheetTitle>
                                    <SheetDescription className="flex flex-col items-start justify-center w-full gap-y-2">
                                        <SheetTrigger asChild>
                                            {/* <Link
                                                to="Test"
                                                className="cursor-pointer font-normal md:text-2xl text-xl text-primary bg-[#E8DED4] hover:bg-[#F4EADF] rounded-xl w-full text-start px-4 py-1"
                                                offset={-80}
                                                duration={500}
                                                smooth={true}
                                                spy={true}
                                            >
                                                Try
                                            </Link> */}
                                        </SheetTrigger>
                                        <SheetTrigger asChild>
                                            <Link
                                                to="CardsComponent"
                                                className="cursor-pointer font-normal md:text-2xl text-xl text-primary bg-[#E8DED4] hover:bg-[#F4EADF] rounded-xl w-full text-start px-4 py-1"
                                                offset={-80}
                                                duration={500}
                                                smooth={true}
                                                spy={true}
                                            >
                                                What we do
                                            </Link>
                                        </SheetTrigger>
                                        <SheetTrigger asChild>
                                            <Link
                                                to="How"
                                                className="cursor-pointer font-normal md:text-2xl text-xl text-primary bg-[#E8DED4] hover:bg-[#F4EADF] rounded-xl w-full text-start px-4 py-1"
                                                offset={-80}
                                                duration={500}
                                                smooth={true}
                                                spy={true}
                                            >
                                                How we do it
                                            </Link>
                                        </SheetTrigger>
                                        {/* <SheetTrigger asChild>
                                            <Link
                                                to="Tools"
                                                className="cursor-pointer font-normal md:text-2xl text-xl text-primary bg-[#E8DED4] hover:bg-[#F4EADF] rounded-xl w-full text-start px-4 py-1"
                                                offset={-110}
                                                duration={500}
                                                smooth={true}
                                                spy={true}
                                            >
                                                Tools
                                            </Link>
                                        </SheetTrigger> */}
                                        <SheetTrigger asChild>
                                            <Link
                                                to="Section3"
                                                className="cursor-pointer font-normal md:text-2xl text-xl text-primary bg-[#E8DED4] hover:bg-[#F4EADF] rounded-xl w-full text-start px-4 py-1"
                                                offset={-60}
                                                duration={500}
                                                smooth={true}
                                                spy={true}
                                            >
                                                Partnering
                                            </Link>
                                        </SheetTrigger>
                                        <SheetTrigger asChild>
                                            <Link
                                                to="WhO"
                                                className="cursor-pointer font-normal md:text-2xl text-xl text-primary bg-[#E8DED4] hover:bg-[#F4EADF] rounded-xl w-full text-start px-4 py-1"
                                                offset={-60}
                                                duration={500}
                                                smooth={true}
                                                spy={true}
                                            >
                                                Who we are
                                            </Link>
                                        </SheetTrigger>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                    {/* Desktop Navbar */}
                    <div className="md:flex hidden lg:px-6 px-0 py-2 gap-[25%] xl:gap-[35%] items-center rounded-sm">
                        <Link
                            to="Home"
                            activeClass="none"
                            offset={-250}
                            duration={500}
                            smooth={true}
                            spy={true}
                            className="cursor-pointer"
                        >
                            <p className="text-4xl font-bold text-[#df7a2e]"> </p>
                        </Link>

                        <div className="border lg:gap-8 gap-6 text-primary font-normal text-2xl py-6 rounded-full border-black flex items-center justify-center lg:px-20 px-8">
                            {/* <Link
                                to="Test"
                                className="cursor-pointer"
                                offset={-110}
                                duration={500}
                                smooth={true}
                                spy={true}
                            >
                                Try
                            </Link> */}
                            <Link
                                to="CardsComponent"
                                className="cursor-pointer"
                                offset={-90}
                                duration={500}
                                smooth={true}
                                spy={true}
                            >
                                What we do
                            </Link>
                            <Link
                                to="How"
                                className="cursor-pointer"
                                offset={-130}
                                duration={500}
                                smooth={true}
                                spy={true}
                            >
                                How we do it
                            </Link>
                            {/* <Link
                                to="Tools"
                                className="cursor-pointer"
                                offset={-110}
                                duration={500}
                                smooth={true}
                                spy={true}
                            >
                                Tools
                            </Link> */}
                            <Link
                                to="Section3"
                                className="cursor-pointer"
                                offset={-100}
                                duration={500}
                                smooth={true}
                                spy={true}
                            >
                                Partnering
                            </Link>
                            <Link
                                to="Who"
                                className="cursor-pointer"
                                offset={-100}
                                duration={500}
                                smooth={true}
                                spy={true}
                            >
                                Who we are
                            </Link>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    );
};

export default Navbar;
