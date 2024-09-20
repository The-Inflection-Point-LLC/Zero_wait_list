import HighlightText from "@/components/HighlightText";
import ModalPdf from "@/components/ModalPdf";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ToolsAndTechProps {
    title?: string;
    desc?: string;
    image?: any;
}

const ToolsAndTech = (props: ToolsAndTechProps) => {
    return (
        <section id="Tools" className="bg-[#F0EFEE] flex items-center justify-center px-8 py-28 w-full">
            <div className="max-w-screen-2xl gap-16 flex lg:px-16 flex-col items-center justify-center">
                {props.title && (
                    <HighlightText
                        text={props.title}
                        className="text-center lg:text-6xl text-4xl font-medium whitespace-pre-wrap"
                    />
                )}
                <div className="flex lg:flex-row flex-col items-center justify-between xl:gap-36 gap-20">
                    <div className="flex flex-col items-start justify-end lg:gap-8 gap-5">
                        {props.desc && <HighlightText text={props.desc} className=" whitespace-pre-wrap lg:text-lg" />}
                        <ModalPdf text="See the Tool List" file="/assets/pdfs/MitchDickey-toolList.pdf" />
                    </div>
                    <div className="flex items-center justify-center xl:w-8/12 w-full">
                        <Image
                            src={props.image}
                            alt="Tools and Tech"
                            width={400}
                            height={400}
                            className="aspect-square w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsAndTech;
