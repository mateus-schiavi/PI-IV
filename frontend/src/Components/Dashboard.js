import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Search, MoreVertical, Share2 } from 'lucide-react';
import '../Styles/Dashboard.css'
export default function RunnerDashboard() {
    const [corredores, setCorredores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // URL da API Django - ajuste conforme sua configuração
    const API_URL = 'http://localhost:8000/api/corredores/';

    useEffect(() => {
        fetchCorredores();
    }, []);

    const fetchCorredores = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Erro ao buscar dados');
            }
            const data = await response.json();
            setCorredores(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    // Função para contar valores de um campo específico
    const countByField = (field) => {
        const counts = {};
        corredores.forEach(corredor => {
            const value = corredor[field];
            if (value) {
                counts[value] = (counts[value] || 0) + 1;
            }
        });
        return counts;
    };

    // Função para converter contagem em dados para gráfico
    const convertToChartData = (counts, colorMap) => {
        return Object.entries(counts).map(([name, value]) => ({
            name,
            value,
            color: colorMap[name] || '#9CA3AF'
        }));
    };

    // Mapas de cores
    const generoColors = {
        'Masculino': '#4F46E5',
        'Feminino': '#EF4444',
        'Outro': '#10B981'
    };

    const idadeColors = {
        '18 a 24': '#4F46E5',
        '25 a 34': '#EF4444',
        '35 a 44': '#FBBF24',
        '45 a 54': '#10B981',
        '55 a 64': '#8B5CF6',
        '65+': '#EC4899'
    };

    const escolaridadeColors = {
        'Ensino fundamental incompleto': '#4F46E5',
        'Ensino fundamental completo': '#10B981',
        'Ensino médio incompleto': '#FBBF24',
        'Ensino médio completo': '#EF4444',
        'Ensino superior incompleto': '#8B5CF6',
        'Ensino superior completo': '#06B6D4',
        'Pós-graduação(especialização, mestrado, doutorado)': '#F97316'
    };

    const estadoCivilColors = {
        'Solteiro(a)': '#4F46E5',
        'Casado(a) / União Estável': '#EF4444',
        'Divorciado(a)': '#10B981',
        'Viúvo(a)': '#FBBF24'
    };

    const rendaColors = {
        'Até 1 salário mínimo': '#4F46E5',
        'De 1 a 2 salários mínimos': '#06B6D4',
        'De 2 a 3 salários mínimos': '#10B981',
        'De 3 a 5 salários mínimos': '#FBBF24',
        'De 5 a 10 salários mínimos': '#EF4444',
        'Acima de 10 salários mínimos': '#8B5CF6',
        'Prefiro não informar': '#9CA3AF'
    };

    const frequenciaColors = {
        '1 vez por semana': '#4F46E5',
        '2 a 3 vezes por semana': '#FBBF24',
        '4 a 5 vezes por semana': '#EF4444',
        'Todos os dias': '#10B981'
    };

    // Gerar dados dos gráficos
    const generoData = convertToChartData(countByField('genero'), generoColors);
    const idadeData = convertToChartData(countByField('idade'), idadeColors);
    const escolaridadeData = convertToChartData(countByField('escolaridade'), escolaridadeColors);
    const estadoCivilData = convertToChartData(countByField('estado_civil'), estadoCivilColors);
    const rendaData = convertToChartData(countByField('renda_familiar_mensal'), rendaColors);
    const frequenciaData = convertToChartData(countByField('frequencia'), frequenciaColors);
    const profissaoData = convertToChartData(countByField('profissao'), {});

    // Cores diversificadas para profissões
    const profissaoColorsArray = ['#4F46E5', '#EF4444', '#FBBF24', '#10B981', '#8B5CF6', '#EC4899', '#06B6D4', '#F97316', '#14B8A6', '#F59E0B'];
    profissaoData.forEach((item, index) => {
        item.color = profissaoColorsArray[index % profissaoColorsArray.length];
    });

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '18px' }}>
                Carregando dados...
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '18px', color: '#EF4444' }}>
                Erro: {error}
            </div>
        );
    }

    return (
        <>
            <div className="dashboard-container">
                {/* Header */}
                <div className="header">
                    <h1 className="header-title">Perfil socioeconômico dos corredores!</h1>
                    <div className="header-actions">
                        <button className="btn btn-icon">
                            <MoreVertical size={20} />
                        </button>
                        <button className="btn btn-primary">
                            <Share2 size={16} />
                            Compartilhar
                        </button>
                    </div>
                </div>

                {/* Search */}
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Buscar..."
                    />
                    <Search className="search-icon" size={18} />
                </div>

                {/* Stats */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-label">Quantidade de dados analisados</div>
                        <div className="stat-value">{corredores.length} participantes</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-label">Período da pesquisa</div>
                        <div className="stat-value">De 02 até 15/09/25</div>
                    </div>
                </div>

                {/* Charts Grid */}
                <div className="charts-grid">
                    {/* Gênero */}
                    <div className="chart-card">
                        <h3 className="chart-title">Gênero</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={generoData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={(entry) => `${entry.name}: ${entry.value}`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {generoData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Idade */}
                    <div className="chart-card">
                        <h3 className="chart-title">Idade</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={idadeData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={(entry) => entry.name}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {idadeData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Escolaridade */}
                    <div className="chart-card">
                        <h3 className="chart-title">Escolaridade</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={escolaridadeData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={(entry) => entry.name}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {escolaridadeData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Estado Civil */}
                    <div className="chart-card">
                        <h3 className="chart-title">Estado civil</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={estadoCivilData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={(entry) => entry.name}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {estadoCivilData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Renda Familiar */}
                    <div className="chart-card">
                        <h3 className="chart-title">Renda familiar</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={rendaData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={(entry) => entry.name}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {rendaData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Frequência */}
                    <div className="chart-card">
                        <h3 className="chart-title">Quantas vezes na semana pratica o esporte</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={frequenciaData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={(entry) => entry.name}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {frequenciaData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Profissão - Full Width */}
                    <div className="chart-card full-width-chart">
                        <h3 className="chart-title">Profissão</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={profissaoData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={true}
                                    label={(entry) => entry.name}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {profissaoData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Considerações */}
                <div className="considerations-card">
                    <h2 className="considerations-title">Considerações</h2>

                    <div className="consideration-item">
                        <div className="consideration-label">Faixa etária predominante</div>
                        <div className="consideration-value">Entre 35 e 54 anos</div>
                    </div>

                    <div className="consideration-item">
                        <div className="consideration-label">Faixa salarial predominante</div>
                        <div className="consideration-value">De 5 até 10 salários mínimos</div>
                    </div>

                    <div className="consideration-item">
                        <div className="consideration-label">Estado civil e gênero</div>
                        <div className="consideration-value">Majoritariamente o público é casado e masculino.</div>
                    </div>

                    <div className="consideration-item">
                        <div className="consideration-label">Frequência semanal e tempo em que pratica</div>
                        <div className="consideration-value">A maioria pratica de 2 a 3 vezes por semana</div>
                    </div>

                    <div className="consideration-item">
                        <div className="consideration-label">Profissão</div>
                        <div className="consideration-value">Totalmente diversificados, sendo um pequeno percentual a mais de pedagogos.</div>
                    </div>
                </div>
            </div>
        </>
    );
}