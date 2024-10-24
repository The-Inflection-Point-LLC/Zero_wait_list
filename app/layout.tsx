import type { Metadata } from "next";
import { Epilogue as FontSans } from "next/font/google";
import "../styles/globals.css";
import "video-react/dist/video-react.css";
import { cn } from "../lib/utils";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Zero Wait List",
    description:
        "Offering quick, high-quality personal/family evaluations and accessible psychoeducational workshops. Mitch Dickey partners with doctors to provide efficient, targeted care that improves emotional, mental and relationship health.  Help helps you define what you need and ensures that you get it — all while maintaining affordability and accessibility for a wide range of people and issues/concerns.  He is alongside you every step of the way.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.png" sizes="any" />
            </head>
            <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
