import Image from "next/image";
import HighlightText from "@/components/HighlightText";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import ModalPdf from "@/components/ModalPdf";

interface WhoSectionProps {
    title?: string;
    data?: { id: number; title: string; text: string; color: string; img: any; moreInfo?: string }[];
}

const WhoSection = (props: WhoSectionProps) => {
    return (
        <section id="Who" className="flex flex-col items-center px-8 gap-16">
            <div className="lg:mt-36 mt-16">
                {props.title && (
                    <HighlightText
                        text={props.title}
                        className="text-center 2xl:text-7xl lg:text-6xl text-4xl font-medium whitespace-pre-wrap"
                    />
                )}
            </div>

            {props.data && props.data.length > 0 && (
                <div
                    className={cn(
                        `grid lg:grid-cols-2 mb-16  grid-cols-1 gap-6 w-full max-w-screen-xl`,
                        props.data.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3",
                        props.data.length === 1 ? "lg:grid-cols-1" : "lg:grid-cols-2"
                    )}
                >
                    {props.data.map((who) => (
                        <div key={who.id} className="flex flex-col rounded-tl-3xl w-full items-center justify-center">
                            <div className="max-w-screen-lg flex w-full flex-col lg:flex-row">
                                <div className="w-full h-full">
                                    <Image
                                        src={who.img.src}
                                        alt="who"
                                        width={300}
                                        objectFit="contain"
                                        height={300}
                                        className="rounded-tl-3xl w-full h-full"
                                    />
                                </div>
                                <div
                                    className="flex flex-col space-y-6 text-white justify-between p-4 h-full w-full"
                                    style={{ background: who.color }}
                                >
                                    <HighlightText
                                        text={who.title}
                                        className="md:text-3xl text-2xl font-semibold text-center"
                                    />
                                    <HighlightText
                                        text={who.text}
                                        className="lg:text-2xl sm:text-xl text-lg font-light whitespace-pre-wrap"
                                    />
                                    <div className="flex justify-start p-1 w-full gap-4">
                                        <ModalPdf
                                            file="/assets/pdfs/MitchDickey-bio.pdf"
                                            text="See his bio ->"
                                            // trigger={"See his bio ->"}
                                            className="bg-[#266480] text-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default WhoSection;
