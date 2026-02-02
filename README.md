# 📊 Análise de Dados de Praticantes de Esportes de Rua

Projeto acadêmico desenvolvido no PI-IV com foco na análise de dados de pessoas que praticam esportes de rua. A aplicação tem como objetivo organizar, processar e apresentar informações relevantes para compreensão de padrões e comportamentos desse público.

## 🧠 Sobre o Projeto

Este projeto demonstra a aplicação prática de conceitos de análise de dados integrados a uma aplicação web. O sistema utiliza um backend em Python (Django) para processamento e gerenciamento dos dados e um frontend em JavaScript para visualização e interação com o usuário.

A proposta é transformar dados brutos em informações úteis, apoiando análises e tomadas de decisão relacionadas à prática de esportes urbanos.

## 🏗️ Arquitetura

O sistema é dividido em duas camadas principais:

- **Backend:** desenvolvido em Python com Django, responsável pelo processamento, organização e exposição dos dados via API.
- **Frontend:** desenvolvido em JavaScript, responsável pela visualização dos dados e interação com o usuário.

A comunicação entre as camadas ocorre por meio de APIs.

## 🚀 Funcionalidades

- 📊 Processamento e análise de dados
- 🔌 Integração entre frontend e backend
- 🌐 Interface web para visualização das informações
- 📈 Apoio à análise de padrões e comportamentos
- 🏃‍♂️ Aplicação voltada ao contexto de esportes de rua

## 🧰 Tecnologias Utilizadas

### Backend
- Python
- Django
- APIs REST
- Banco de dados (ajustar conforme utilizado)

### Frontend
- JavaScript
- Node.js
- NPM

## ▶️ Como Executar o Projeto

### Pré-requisitos
- Python 3.x
- Node.js
- NPM

### Backend (Django)

```bash
# Acesse a pasta do backend
cd backend

# Crie e ative o ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# Instale as dependências
pip install -r requirements.txt

# Execute as migrações
python manage.py migrate

# Inicie o servidor
python manage.py runserver

# Acesse a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```
