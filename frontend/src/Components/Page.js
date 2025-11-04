import React from "react";
import { Radio, Search } from 'lucide-react';
import '../Styles/App.css'
import Caminhada from '../Images/caminhada.png'
import corrida_bike from '../Images/corrida_bike.png'
import corrida_pcd from '../Images/corrida_pcd.png'
import corrida_solo from '../Images/corrida_solo.png'
import corrida from '../Images/corrida.png'
import { Link } from "react-router-dom";
export default function Page() {
    const imagensSemana = [
        {
            src: corrida,
            name: "Corrida de Rua",
            genre: "Superando limites a cada passo.",
        },
        {
            src: corrida_bike,
            name: "Corrida de Bicicleta",
            genre: "Algo essencial para tonificar as pernas.",
        },
        {
            src: corrida_pcd,
            name: "Treino Inclusivo",
            genre: "Ótimo para ajudar pessoas com mobilidade reduzida",
        },
        {
            src: corrida_solo,
            name: "Corrida Solo",
            genre: "É sempre bom correr, independente de ser sozinho ou não",
        },
    ];


    return (
        <>
            <div className="container">
                {/* Sidebar */}
                <div className="sidebar">
                    <div className="logo">SALUTE!</div>

                    <div className="nav-section">
                        <h2 className="nav-title">Descubra</h2>
                        <nav className="nav-links">
                            <Link to="/" className="nav-link">
                                <Radio size={20} />
                                <span>Inicio</span>
                            </Link>
                            <Link to="/dashboard" className="nav-link">
                                <Radio size={20} />
                                <span>Pesquisas</span>
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="main-content">
                    {/* Header */}
                    <div className="header">
                        <div className="search-container">
                            <Search className="search-icon" size={20} />
                            <input type="text"
                                placeholder="Acesse nossa pesquisa"
                                className="search-input"
                            />
                        </div>
                    </div>

                    {/* Hero Section */}
                    <div className="content">
                        <div className="hero-section">
                            <h1 className="main-title">E AÍ? JÁ CORREU HOJE?</h1>
                            <p className="subtitle">Muito mais que um hobbie, para nós é uma necessidade!!!</p>
                            <p className="description">
                                Todos nós, amantes da corrida de rua, sabemos que quem corre é mais feliz. Agora ainda temos a tecnologia a nosso favor!!!
                            </p>
                        </div>
                        {/* Hero Image */}
                        <div className="hero-image">
                            <img
                                src={Caminhada}
                                alt="Pessoa correndo livre"
                            />
                        </div>
                        {/* Description */}
                        <p className="info-text">
                            Estudantes da Universidade Virtual de São Paulo dedicam seus esforços para melhorar a qualidade de vida e segurança do corredor
                            durante a prática do esporte e ainda mantém um Banco de Dados atualizado com informações do perfil socioeconômico dos
                            participantes, visando melhorar os serviços prestados
                        </p>

                        {/* Images Section */}
                        <div className="artists-section">
                            <div className="artists-grid">
                                {imagensSemana.map((item, index) => (
                                    <div key={index} className="artist-card">
                                        <div className="artist-image-container">
                                            <img src={item.src}
                                                alt={item.name}
                                                className="artist-image" />
                                        </div>
                                        <h3 className="artist-name">{item.name}</h3>
                                        <h3 className="artist-genre">{item.genre}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

