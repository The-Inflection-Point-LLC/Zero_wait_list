import Image from "next/image";
import ModalVideo from "@/components/ModalVideo";
import HighlightText from "@/components/HighlightText";
import ModalPdf from "@/components/ModalPdf";

interface HeroSectionProps {
    title: string;
    img?: any;
    desc?: string;
    title2?: string;
    desc2?: string;
    btns?: { type: "video" | "pdf"; link: string; btnText: string; title: string }[];
}

const HeroSection = (props: HeroSectionProps) => {
    return (
        <section id="Home" className="w-full flex justify-center">
            <div className="flex lg:flex-row lg:px-8 px-4 flex-col items-center lg:gap-6 gap-10 my-16 lg:mt-20 lg:mb-32 md:mt-28 mt-20 justify-center max-w-screen-3xl">
                <div className="flex flex-col items-center justify-center mx-auto gap-8 lg:w-1/2">
                    <div className="break-words flex flex-col justify-center gap-6 lg:gap-10">
                        <HighlightText
                            text={props.title}
                            className="2xl:text-8xl lg:text-6xl text-5xl font-semibold text-center lg:text-left leading-tight whitespace-pre-wrap"
                            spanClass="2xl:text-8xl lg:text-6xl text-5xl text-center lg:text-left whitespace-pre-wrap"
                        />
                        {props.desc && (
                            <HighlightText
                                text={props.desc}
                                className="lg:text-3xl sm:text-2xl text-xl lg:text-left text-center whitespace-pre-wrap"
                            />
                        )}

                        {(props.title2 || props.desc2) && (
                            <div className="flex flex-col gap-2 mt-16">
                                {props.title2 && (
                                    <HighlightText
                                        text={props.title2}
                                        className="lg:text-3xl sm:text-3xl text-2xl font-semibold"
                                    />
                                )}
                                {props.desc2 && (
                                    <HighlightText
                                        text={props.desc2}
                                        className="lg:text-2xl sm:text-2xl whitespace-pre-wrap text-xl"
                                        spanClass="!inline-flex items-start md:gap-2"
                                    />
                                )}
                            </div>
                        )}
                    </div>
                    {props.btns && props.btns.length > 0 && (
                        <div className="flex lg:flex-row flex-col gap-4 max-lg:w-full">
                            {props.btns.map((btn, index) =>
                                btn.type === "video" ? (
                                    <ModalVideo
                                        key={`btn-${index}`}
                                        title={btn.title}
                                        text={btn.btnText}
                                        className="max-lg:w-full"
                                        videoId={btn.link}
                                    />
                                ) : (
                                    <ModalPdf
                                        key={`btn-${index}`}
                                        text={btn.btnText}
                                        title={btn.title}
                                        file=""
                                        className="max-lg:w-full"
                                    />
                                )
                            )}
                        </div>
                    )}
                </div>
                {props.img && (
                    <div>
                        <Image src={props.img.src} alt="Hero" className="lg:flex hidden" width={490} height={300} />

                        <div className="lg:h-96 max-lg:flex hidden">
                            <Image src={props.img.src} alt="Hero" width={380} height={200} />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default HeroSection;
