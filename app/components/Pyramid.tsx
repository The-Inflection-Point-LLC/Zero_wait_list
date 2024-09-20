import HighlightText from "@/components/HighlightText";
import ModalPdf from "@/components/ModalPdf";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface PyramidProps {
    title?: string;
    line?: string;
    line2?: string;
    tagline?: {
        title?: string;
        btnTxt?: string;
        link?: string;
    };
    tagline1?: {
        title?: string;
        btnTxt?: string;
        link?: string;
    };    
    pyramid?: {
        title1?: string;
        text1?: string;
        desc1?: string;
        title2?: string;
        text2?: string;
        desc2?: string;
        title3?: string;
        text3?: string;
        desc3?: string;
        title4?: string;
        text4?: string;
        desc4?: string;
    };
}

const Pyramid = (props: PyramidProps) => {
    return (
        <section id="Tools" className="bg-[#F0EFEE] flex flex-col items-center px-8 py-28 w-full">
            <div className="max-w-screen-3xl w-full flex flex-col items-center">
                {props.title && (
                    <HighlightText
                        text={props.title}
                        className="text-center 2xl:text-7xl lg:text-6xl text-4xl font-medium whitespace-pre-wrap mb-2"
                    />
                )}
                {props.line && (
                    <HighlightText
                        text={props.line}
                        className="lg:text-3xl text-2xl text-center font-normal whitespace-pre-wrap mb-8"
                    />
                )}                
                <div className="flex flex-row gap-8 mt-8 w-full max-w-4xl justify-center mb-5">
                    {props.tagline && props.tagline.title && (
                        <div className="flex items-center gap-4 px-6 py-3 bg-[#4472C5] text-white rounded-tr-2xl rounded-bl-2xl">
                            <HighlightText text={props.tagline.title} className="text-2xl" />
                            {props.tagline.btnTxt && (
                                <ModalPdf text={props.tagline.btnTxt} file={props.tagline.link ?? ""} />
                            )}
                        </div>
                    )}
                    {props.tagline1 && props.tagline1.title && (
                        <div className="flex items-center gap-4 px-6 py-3 bg-[#266480] text-white rounded-tr-2xl rounded-bl-2xl">
                            <HighlightText text={props.tagline1.title} className="text-2xl" />
                            {props.tagline1.btnTxt && (
                                <ModalPdf text={props.tagline1.btnTxt} file={props.tagline1.link ?? ""} />
                            )}
                        </div>
                    )}
                </div>
                {props.pyramid && (
                    <Accordion type="single" collapsible className="w-full flex flex-col items-center">
                        <div className="flex flex-col items-center w-full">
                            {/* Level 4 */}
                            <AccordionItem value="level4" className="w-full max-w-[50%] lg:max-w-[35%]">
                                <div className="p-4 border-4 bg-[#916F2D] mx-auto flex-col items-center justify-center rounded-tr-3xl rounded-bl-3xl shadow-lg transition-all duration-300 ease-in-out">
                                    <AccordionTrigger className="text-white w-full p-2">
                                        <div className="w-full">
                                            {props.pyramid.title4 && (
                                                <div className="mb-2 block">
                                                    <HighlightText
                                                        text={props.pyramid.title4}
                                                        className="lg:text-3xl sm:text-2xl text-xl whitespace-pre-wrap font-semibold text-center text-white"
                                                    />
                                                </div>
                                            )}
                                            {props.pyramid.text4 && (
                                                <div className="block">
                                                    <HighlightText
                                                        text={props.pyramid?.text4}
                                                        className="lg:text-xl text-lg text-center whitespace-pre-wrap text-white"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </AccordionTrigger>
                                    {props.pyramid.desc4 && (
                                        <AccordionContent className="mt-4 p-4 bg-white text-black rounded-b-3xl">
                                            <HighlightText
                                                text={props.pyramid.desc4}
                                                className="lg:text-lg text-base text-left whitespace-pre-wrap"
                                            />
                                        </AccordionContent>
                                    )}
                                </div>
                            </AccordionItem>

                            {/* Level 3 */}
                            <AccordionItem value="level3" className="w-full max-w-[60%] lg:max-w-[40%]">
                                <div className="p-4 border-4 bg-[#048404] mx-auto flex-col items-center justify-center rounded-tr-3xl rounded-bl-3xl shadow-lg transition-all duration-300 ease-in-out">
                                    <AccordionTrigger className="text-white w-full p-2">
                                        <div className="w-full">
                                            {props.pyramid.title3 && (
                                                <div className="mb-2 block">
                                                    <HighlightText
                                                        text={props.pyramid.title3}
                                                        className="lg:text-3xl sm:text-2xl text-xl whitespace-pre-wrap font-semibold text-center text-white"
                                                    />
                                                </div>
                                            )}
                                            {props.pyramid.text3 && (
                                                <div className="block">
                                                    <HighlightText
                                                        text={props.pyramid?.text3}
                                                        className="lg:text-xl text-lg text-center whitespace-pre-wrap text-white"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </AccordionTrigger>
                                    {props.pyramid.desc3 && (
                                        <AccordionContent className="mt-4 p-4 bg-white text-black rounded-b-3xl">
                                            <HighlightText
                                                text={props.pyramid.desc3}
                                                className="lg:text-lg text-base text-left whitespace-pre-wrap"
                                            />
                                        </AccordionContent>
                                    )}
                                </div>
                            </AccordionItem>

                            {/* Level 2 */}
                            <AccordionItem value="level2" className="w-full max-w-[70%] lg:max-w-[50%]">
                                <div className="p-4 border-4 bg-[#DF7A2E] mx-auto flex-col items-center justify-center rounded-tr-3xl rounded-bl-3xl shadow-lg transition-all duration-300 ease-in-out">
                                    <AccordionTrigger className="text-white w-full p-2">
                                        <div className="w-full">
                                            {props.pyramid.title2 && (
                                                <div className="mb-2 block">
                                                    <HighlightText
                                                        text={props.pyramid.title2}
                                                        className="lg:text-3xl sm:text-2xl text-xl whitespace-pre-wrap font-semibold text-center text-white"
                                                    />
                                                </div>
                                            )}
                                            {props.pyramid.text2 && (
                                                <div className="block">
                                                    <HighlightText
                                                        text={props.pyramid?.text2}
                                                        className="lg:text-xl text-lg text-center whitespace-pre-wrap text-white"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </AccordionTrigger>
                                    {props.pyramid.desc2 && (
                                        <AccordionContent className="mt-4 p-4 bg-white text-black rounded-b-3xl">
                                            <HighlightText
                                                text={props.pyramid.desc2}
                                                className="lg:text-lg text-base text-left whitespace-pre-wrap"
                                            />
                                        </AccordionContent>
                                    )}
                                </div>
                            </AccordionItem>

                            {/* Level 1  #4472C5  */}
                            <AccordionItem value="level1" className="w-full max-w-[80%] lg:max-w-[60%]"> 
                                <div className="p-4 border-4 bg-[#266480] mx-auto flex-col items-center justify-center rounded-tr-3xl rounded-bl-3xl shadow-lg transition-all duration-300 ease-in-out">
                                    <AccordionTrigger className="text-white w-full p-2">
                                        <div className="w-full">
                                            {props.pyramid.title1 && (
                                                <div className="mb-2 block">
                                                    <HighlightText
                                                        text={props.pyramid.title1}
                                                        className="lg:text-3xl sm:text-2xl text-xl whitespace-pre-wrap font-semibold text-center text-white"
                                                    />
                                                </div>
                                            )}
                                            {props.pyramid.text1 && (
                                                <div className="block">
                                                    <HighlightText
                                                        text={props.pyramid?.text1}
                                                        className="lg:text-xl text-lg text-center whitespace-pre-wrap text-white"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </AccordionTrigger>
                                    {props.pyramid.desc1 && (
                                        <AccordionContent className="mt-4 p-4 bg-white text-black rounded-b-3xl">
                                            <HighlightText
                                                text={props.pyramid.desc1}
                                                className="lg:text-lg text-base text-left whitespace-pre-wrap"
                                            />
                                        </AccordionContent>
                                    )}
                                </div>
                            </AccordionItem>
                        </div>
                    </Accordion>
                )}
                {props.line2 && (
                    <HighlightText
                        text={props.line2}
                        className="lg:text-2xl text-1xl text-center font-normal whitespace-pre-wrap mt-20 mb-20"
                    />
                )}                   
            </div>
        </section>
    );
};

export default Pyramid;
