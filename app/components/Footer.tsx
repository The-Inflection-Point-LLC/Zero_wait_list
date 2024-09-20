import HighlightText from "@/components/HighlightText";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";

interface FooterProps {
    instaLink?: string;
    fbLink?: string;
    linkedinLink?: string;
    youtubeLink?: string;
}

const Footer = (props: FooterProps) => {
    return (
        <section className="flex flex-col items-center justify-center w-full px-8 gap-16 bg-gray-100">
            <div className="w-full flex sm:flex-row flex-col max-sm:gap-10 mt-10 items-start justify-between max-w-screen-lg">
                <div className="flex flex-col gap-7">
                    <HighlightText text="In Greenwich" className="font-semibold text-2xl" />
                    <HighlightText text={`Backcountry \n237 Taconic Road`} className="whitespace-pre-wrap text-2xl" />
                    <HighlightText text={`Downtown \n100 Melrose Ave.`} className="whitespace-pre-wrap text-2xl" />
                </div>
                <div className="flex flex-col gap-5">
                    <HighlightText text="In Stamford" className="font-semibold text-2xl" />
                    <HighlightText
                        text={`North Stamford \n1200 High Ridge Road \n(off exit 35/Merritt)`}
                        className="whitespace-pre-wrap text-2xl"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-16 mb-16">
                <div className="flex space-x-8">
                    <div className="w-12 h-12 flex items-center justify-center border border-black rounded-full">
                        <Link href={props.fbLink ? props.fbLink : "#"} target="_blank">
                            <FacebookIcon className="w-8 h-8" />
                        </Link>
                    </div>

                    <div className="w-12 h-12 flex items-center justify-center border border-black rounded-full">
                        <Link href={props.instaLink ? props.instaLink : "#"} target="_blank">
                            <InstagramIcon className="w-8 h-8" />
                        </Link>
                    </div>
                    <div className="w-12 h-12 flex items-center justify-center border border-black rounded-full">
                        <Link href={props.linkedinLink ? props.linkedinLink : "#"} target="_blank">
                            <LinkedinIcon className="w-8 h-8" />
                        </Link>
                    </div>
                    <div className="w-12 h-12 flex items-center justify-center border border-black rounded-full">
                        <Link href={props.youtubeLink ? props.youtubeLink : "#"} target="_blank">
                            <YoutubeIcon className="w-8 h-8" />
                        </Link>
                    </div>
                </div>
                <p className="text-[#0B1539] text-center text-2xl font-normal">
                    ©The Inflection Point, LLC Greenwich, CT
                </p>
            </div>
        </section>
    );
};

export default Footer;
