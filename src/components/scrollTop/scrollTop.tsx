"use client";
import { useEffect, useState } from "react";
import "./scrollTop.css";

export default function ScrollTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (isVisible && (
        <button className="scroll-top" onClick={scrollTop}>Up</button>
    ));
}
