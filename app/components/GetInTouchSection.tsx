"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Mail,
  UserRound,
  PhoneCall,
  MessageSquareText,
  LoaderIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import HighlightText from "@/components/HighlightText";

interface GetInTouchSectionProps {
  title?: string;
}

const GetInTouchSection = (props: GetInTouchSectionProps) => {
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const contactFormSchema = z.object({
    name: z.string(),
    email: z.string().email({ message: "Please provide a valid email." }),
    phone: z.string(),
    subject: z.array(z.string()).refine((value) => value.length > 0, {
      message: "You have to select at least one item.",
    }),
    companyName: z.string().optional(),
    message: z.string(),
  });

  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      companyName: "",
      subject: [],
    },
  });

  const items = [
    {
      id: "just-a-quick-call",
      label: "A quick call–I’d like to know more",
    },
    {
      id: "answers-to-questions",
      label: "I need answers to the five questions",
    },
    {
      id: "partner-with-zwl",
      label: "Partner with Zero Wait List",
    },
    {
      id: "i-have-a-suggestion",
      label: "I have a suggestion",
    },
    {
      id: "access-self-health",
      label: "Access to the self - help tier",
    },
    {
      id: "anything-else",
      label: "Or anything else",
    },
  ] as const;

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const formData = contactForm.getValues();

      const payload = {
        checkedValue: formData.subject.map((subjectId) => {
          const item = items.find((item) => item.id === subjectId);
          return item ? item.label : subjectId;
        }),
        name: formData.name,
        companyName: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      const response = await fetch(
        "https://api.zerowaitlist.com/api/EmailSender/contact/newContact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setIsLoading(false);
        toast({
          title: "Message Sent",
          description: "Your message has been sent successfully!",
        });
        contactForm.reset();
      } else {
        const errorText = await response.text();
        setIsLoading(false);
        toast({
          title: "Failed to Send",
          description: `${errorText}\nPlease try again.`,
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      toast({
        title: "Failed to Send",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      id="Contact"
      className="flex flex-col items-center justify-center w-full px-8 gap-16 bg-[#F0EFEE]"
    >
      <div className="mt-36 flex flex-col gap-8 max-w-[600px]">
        {props.title && (
          <HighlightText
            text={props.title}
            className="lg:text-6xl text-4xl font-medium text-center"
          />
        )}
        <div className="text-center text-2xl text-gray-500">
          <HighlightText text="Response emails from us will come from" />
          <HighlightText text="our team at Relational Intelligence." />
        </div>
      </div>
      <Form {...contactForm}>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-x-8 flex md:flex-row flex-col md:justify-between max-md:items-center lg:w-2/3 md:max-w-[900px] w-full mb-16"
        >
          <div className="flex flex-col gap-4 md:w-3/5 w-full items-start lg:items-end md:border-gray-300 p-4">
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={contactForm.control}
                  name="subject"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                            className="lg:w-6 lg:h-6 h-4 w-4"
                            name={item.id}
                          />
                        </FormControl>
                        <FormLabel className="font-normal lg:text-lg sm:text-lg">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 max-md:items-start items-center justify-center md:w-3/5 w-full">
            <FormField
              control={contactForm.control}
              name="name"
              render={({ field }) => (
                <FormItem className="lg:max-w-[400px] w-full">
                  <FormControl>
                    <Input
                      placeholder="Name"
                      icon={<UserRound color="#DF7A2E" />}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={contactForm.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full lg:max-w-[400px] ">
                  <FormControl>
                    <Input
                      required
                      icon={<Mail color="#DF7A2E" />}
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={contactForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full lg:max-w-[400px] ">
                  <FormControl>
                    <Input
                      icon={<PhoneCall color="#DF7A2E" />}
                      placeholder="Phone"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={contactForm.control}
              name="companyName"
              render={({ field }) => (
                <FormItem className="w-full lg:max-w-[400px] ">
                  <FormControl>
                    <Input
                      placeholder="Company Name (Optional)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={contactForm.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full lg:max-w-[400px]">
                  <FormControl>
                    <Textarea
                      icon={<MessageSquareText color="#DF7A2E" />}
                      placeholder="Message"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              value="Send"
              size={"lg"}
              className="max-md:w-full flex items-center gap-4"
            >
              Submit {isLoading && <LoaderIcon className="w-6 h-6" />}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default GetInTouchSection;
