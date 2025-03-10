import React from "react";
import "./style.css";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    aside?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = "", aside = false }) => {
    return aside ? (
        <section className={`card ${className}`}>{children}</section>
    ) : (
        <aside className={`card ${className}`}>{children}</aside>
    );
};

export default Card;