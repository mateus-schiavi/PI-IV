import React from "react";
import {Radio, Search } from 'lucide-react';
import '../Styles/App.css'
import RunnerDashboard from "./Dashboard";
import { Link } from "react-router-dom";
export default function Page() {
    const artists = [
        { name: 'Artista', genre: 'R&B', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop' },
        { name: 'Artista', genre: 'Hip hop', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
        { name: 'Artista', genre: 'Eletrônica', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop' },
        { name: 'Artista', genre: 'Funk', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop' }
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
                                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop"
                                alt="Pessoa correndo livre"
                            />
                        </div>
                        {/* Description */}
                        <p className="info-text">
                            Estudantes da Universidade Virtual de São Paulo dedicam seus esforços para melhorar a qualidade de vida e segurança do corredor
                            durante a prática do esporte e ainda mantém um Banco de Dados atualizado com informações do perfil socioeconômico dos
                            participantes, visando melhorar os serviços prestados
                        </p>

                        {/* Artists Section */}
                        <div className="artists-section">
                            <h2 className="section-title">Imagens da semana!!</h2>
                            <div className="artists-grid">
                                {artists.map((artist, index) => (
                                    <div key={index} className="artist-card">
                                        <div className="artist-image-container">
                                            <img src={artist.name}
                                                alt={artist.name}
                                                className="artist-image" />
                                        </div>
                                        <h3 className="artist-name">{artist.name}</h3>
                                        <h3 className="artist-genre">{artist.genre}</h3>
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

