import React from "react";
import mockData from '../mockData/mockData.json';
import LogoSVG from '../assets/Logo.svg'; // Importa el archivo SVG
import "./Header.css";

export function Header() {
    const { logo, menu, buttons } = mockData.header;

    return (
        <div className="header-container">
            <img src={LogoSVG} alt={logo.altText} className="logo"/> {/* Muestra el archivo SVG importado */}
            <ul className="menu-items">
                {menu.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
            <div className="button-container">
                {buttons.map(button => (
                    <button key={button.id} style={{ backgroundColor: button.color }}>
                        {button.text}
                    </button>
                ))}
            </div>          
        </div>
    );
}
