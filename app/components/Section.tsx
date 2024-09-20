import HighlightText from "@/components/HighlightText";
import ModalImage from "@/components/ModalImage";
import ModalPdf from "@/components/ModalPdf";
import ModalText from "@/components/ModalText";
import ModalVideo from "@/components/ModalVideo";

interface Section3Props {
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

const Section3 = (props: Section3Props) => {
    return (
        <section id="Section3" className="bg-white flex items-center justify-center px-8 lg:pt-28 py-16 w-full">
            <div className="max-w-screen-2xl lg:gap-20 gap-14 flex flex-col items-start justify-center">
                <div className="flex flex-col items-start justify-center lg:gap-10 gap-6">
                    {props.title1 && (
                        <HighlightText
                            text={props.title1}
                            className="lg:text-6xl text-4xl font-medium whitespace-pre-wrap"
                        />
                    )}
                    {props.text1 && (
                        <HighlightText
                            text={props.text1}
                            className="lg:text-3xl text-2xl font-normal whitespace-pre-wrap"
                        />
                    )}
                    {props.btn1 && props.btn1.type === "video" && <ModalVideo text={props.btn1.text} videoId="" />}
                    {props.btn1 && props.btn1.type === "pdf" && (
                        <ModalPdf text={props.btn1.text} file={props.btn1.link ?? ""} />
                    )}
                    {props.btn1 && props.btn1.type === "img" && (
                        <ModalImage text={props.btn1.text} img={props.btn1.link} />
                    )}
                    {props.btn1 && props.btn1.type === "text" && (
                        <ModalText text={props.btn1.text} desc={props.btn1.link ?? ""} title={props.title1} />
                    )}
                </div>
                <div className="flex flex-col items-start justify-center lg:gap-10 gap-6">
                    {props.title2 && (
                        <HighlightText
                            text={props.title2}
                            className="lg:text-6xl text-4xl font-medium whitespace-pre-wrap"
                        />
                    )}
                    {props.text2 && (
                        <HighlightText
                            text={props.text2}
                            className="lg:text-3xl text-2xl font-normal whitespace-pre-wrap"
                        />
                    )}
                    {props.btn2 && props.btn2.type === "video" && <ModalVideo text={props.btn2.text} videoId="" />}
                    {props.btn2 && props.btn2.type === "pdf" && (
                        <ModalPdf text={props.btn2.text} file={props.btn2.link ?? ""} />
                    )}
                    {props.btn2 && props.btn2.type === "img" && (
                        <ModalImage text={props.btn2.text} img={props.btn2.link} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Section3;
