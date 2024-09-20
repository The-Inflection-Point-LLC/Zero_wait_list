import HighlightText from "@/components/HighlightText";
import ModalImage from "@/components/ModalImage";
import ModalPdf from "@/components/ModalPdf";
import ModalText from "@/components/ModalText";
import ModalVideo from "@/components/ModalVideo";

interface PartnerWithUsProps {
    title?: string;
    desc?: string;
    title1?: string;
    text1?: string;
    btn1?: {
        text: string;
        type: string;
        link?: string;
    };
    title2?: string;
    text2?: string;
    btn2?: {
        text: string;
        type: string;
        link?: string;
    };
}

const PartnerWithUs = (props: PartnerWithUsProps) => {
    return (
        <section id="Section3" className="bg-white flex flex-col items-center justify-center px-8 lg:pt-28 py-16 w-full">
            {/* Main Title */}
            {props.title && (
                <div className="w-full text-center mb-6">
                    <HighlightText
                        text={props.title}
                        className="2xl:text-7xl lg:text-6xl text-4xl font-medium whitespace-pre-wrap"
                    />
                </div>
            )}

            {/* Description */}
            {props.desc && (
                <div className="w-full flex justify-center mb-10">
                    <div className="md:max-w-[680px]">
                        <HighlightText
                            text={props.desc}
                            className="lg:text-2xl text-1xl text-center font-normal whitespace-pre-wrap"
                        />
                    </div>
                </div>
            )}

            {/* Content Grid */}
            <div className="max-w-screen-2xl flex flex-col lg:flex-row lg:gap-20 gap-14 w-full">
                {/* Left Column */}
                <div className="flex-1 flex flex-col items-start">
                    {props.title1 && (
                        <HighlightText
                            text={props.title1}
                            className="lg:text-4xl text-3xl font-medium whitespace-pre-wrap"
                        />
                    )}
                    {props.text1 && (
                        <HighlightText
                            text={props.text1}
                            className="lg:text-2xl sm:text-2xl whitespace-pre-wrap text-xl"
                            spanClass="!inline-flex items-start md:gap-0.5"
                        />
                    )}                
                    {props.btn1 && (
                        <div className="mt-4">
                            {props.btn1.type === "video" && <ModalVideo text={props.btn1.text} videoId="" />}
                            {props.btn1.type === "pdf" && (
                                <ModalPdf text={props.btn1.text} file={props.btn1.link ?? ""} />
                            )}
                            {props.btn1.type === "img" && (
                                <ModalImage text={props.btn1.text} img={props.btn1.link} />
                            )}
                            {props.btn1.type === "text" && (
                                <ModalText text={props.btn1.text} desc={props.btn1.link ?? ""} title={props.title1} />
                            )}
                        </div>
                    )}
                </div>

                {/* Right Column */}
                <div className="flex-1 flex flex-col items-start">
                    {props.title2 && (
                        <HighlightText
                            text={props.title2}
                            className="lg:text-4xl text-3xl font-medium whitespace-pre-wrap"
                        />
                    )}
                    {props.text2 && (
                        <HighlightText
                            text={props.text2}
                            className="lg:text-2xl sm:text-2xl whitespace-pre-wrap text-xl"
                            spanClass="!inline-flex items-start md:gap-0.5"
                        />
                    )}     
                    {props.btn2 && (
                        <div className="mt-4">
                            {props.btn2.type === "video" && <ModalVideo text={props.btn2.text} videoId="" />}
                            {props.btn2.type === "pdf" && (
                                <ModalPdf text={props.btn2.text} file={props.btn2.link ?? ""} />
                            )}
                            {props.btn2.type === "img" && (
                                <ModalImage text={props.btn2.text} img={props.btn2.link} />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PartnerWithUs;
