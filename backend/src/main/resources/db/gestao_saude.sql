--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.4

-- Started on 2025-08-23 00:56:59

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4934 (class 0 OID 17103)
-- Dependencies: 218
-- Data for Name: atletas; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.atletas VALUES (1, 'João Silva', 28, 'M', 72.50, 1.80, 'O+', 'Asma leve');
INSERT INTO public.atletas VALUES (2, 'Maria Oliveira', 24, 'F', 60.00, 1.65, 'A+', 'Alergia a pólen');
INSERT INTO public.atletas VALUES (3, 'Carlos Souza', 32, 'M', 80.30, 1.78, 'B-', 'Hipertensão controlada');
INSERT INTO public.atletas VALUES (4, 'Ana Pereira', 29, 'F', 55.50, 1.62, 'AB+', 'Alergia alimentar');
INSERT INTO public.atletas VALUES (5, 'Pedro Lima', 26, 'M', 75.00, 1.82, 'O-', 'Distúrbio de sono');
INSERT INTO public.atletas VALUES (6, 'Carla Santos', 30, 'F', 63.20, 1.67, 'A-', 'Diabetes tipo 2');
INSERT INTO public.atletas VALUES (7, 'Rafael Costa', 27, 'M', 78.10, 1.79, 'B+', 'Hipotireoidismo');
INSERT INTO public.atletas VALUES (8, 'Juliana Fernandes', 25, 'F', 58.00, 1.64, 'AB-', 'Asma moderada');
INSERT INTO public.atletas VALUES (9, 'Lucas Martins', 31, 'M', 82.00, 1.81, 'O+', 'Alergia a medicamentos');
INSERT INTO public.atletas VALUES (10, 'Fernanda Rocha', 28, 'F', 59.50, 1.66, 'A+', 'Enxaqueca crônica');
INSERT INTO public.atletas VALUES (11, 'Thiago Alves', 29, 'M', 77.00, 1.80, 'B+', 'Hipertensão leve');
INSERT INTO public.atletas VALUES (12, 'Patrícia Gomes', 24, 'F', 56.80, 1.63, 'AB+', 'Problemas de visão');
INSERT INTO public.atletas VALUES (13, 'Bruno Nascimento', 33, 'M', 85.00, 1.83, 'O-', 'Diabetes tipo 1');
INSERT INTO public.atletas VALUES (14, 'Camila Ribeiro', 27, 'F', 61.00, 1.68, 'A+', 'Alergia a frutos do mar');
INSERT INTO public.atletas VALUES (15, 'Eduardo Rocha', 26, 'M', 79.50, 1.78, 'B-', 'Hipotensão');
INSERT INTO public.atletas VALUES (16, 'Sofia Almeida', 30, 'F', 57.20, 1.65, 'AB-', 'Asma leve');
INSERT INTO public.atletas VALUES (17, 'Gustavo Pinto', 28, 'M', 74.00, 1.80, 'O+', 'Alergia a pólen');
INSERT INTO public.atletas VALUES (18, 'Isabela Correia', 25, 'F', 60.50, 1.66, 'A-', 'Distúrbio de sono');
INSERT INTO public.atletas VALUES (19, 'Felipe Castro', 32, 'M', 81.00, 1.79, 'B+', 'Hipertensão controlada');
INSERT INTO public.atletas VALUES (20, 'Mariana Teixeira', 29, 'F', 58.50, 1.67, 'AB+', 'Enxaqueca crônica');


--
-- TOC entry 4938 (class 0 OID 17127)
-- Dependencies: 222
-- Data for Name: eventos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.eventos VALUES (1, 'Maratona de São Paulo', 'São Paulo', '2025-09-15');
INSERT INTO public.eventos VALUES (2, 'Corrida do Sol', 'Rio de Janeiro', '2025-10-05');
INSERT INTO public.eventos VALUES (3, 'Meia Maratona do Porto', 'Porto Alegre', '2025-11-10');
INSERT INTO public.eventos VALUES (4, 'Corrida Noturna', 'Belo Horizonte', '2025-09-25');
INSERT INTO public.eventos VALUES (5, 'Maratona de Curitiba', 'Curitiba', '2025-10-15');
INSERT INTO public.eventos VALUES (6, 'Corrida do Lago', 'Brasília', '2025-11-20');
INSERT INTO public.eventos VALUES (7, 'Meia Maratona do Rio', 'Rio de Janeiro', '2025-12-05');
INSERT INTO public.eventos VALUES (8, 'Corrida da Cidade', 'São Paulo', '2025-12-15');
INSERT INTO public.eventos VALUES (9, 'Desafio do Sol', 'Recife', '2026-01-10');
INSERT INTO public.eventos VALUES (10, 'Maratona Norte', 'Manaus', '2026-02-20');
INSERT INTO public.eventos VALUES (11, 'Corrida das Estrelas', 'Fortaleza', '2026-03-05');
INSERT INTO public.eventos VALUES (12, 'Meia Maratona Centro', 'Salvador', '2026-03-20');
INSERT INTO public.eventos VALUES (13, 'Corrida do Parque', 'Porto Alegre', '2026-04-10');
INSERT INTO public.eventos VALUES (14, 'Maratona Sul', 'Curitiba', '2026-04-25');
INSERT INTO public.eventos VALUES (15, 'Corrida da Montanha', 'Belo Horizonte', '2026-05-15');
INSERT INTO public.eventos VALUES (16, 'Desafio Atlântico', 'Rio de Janeiro', '2026-06-05');
INSERT INTO public.eventos VALUES (17, 'Corrida das Águas', 'Brasília', '2026-06-20');
INSERT INTO public.eventos VALUES (18, 'Meia Maratona Leste', 'Recife', '2026-07-10');
INSERT INTO public.eventos VALUES (19, 'Corrida do Horizonte', 'Salvador', '2026-07-25');
INSERT INTO public.eventos VALUES (20, 'Maratona Capital', 'São Paulo', '2026-08-15');


--
-- TOC entry 4944 (class 0 OID 17173)
-- Dependencies: 228
-- Data for Name: alertas_medicos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.alertas_medicos VALUES (1, 1, 1, '2025-08-22 21:54:41.280182', 'Crise de asma durante prova', 'Alta');
INSERT INTO public.alertas_medicos VALUES (2, 2, 1, '2025-08-22 21:54:41.280182', 'Reação alérgica leve a pólen', 'Média');
INSERT INTO public.alertas_medicos VALUES (3, 3, 2, '2025-08-22 21:54:41.280182', 'Pressão arterial acima do limite', 'Alta');
INSERT INTO public.alertas_medicos VALUES (4, 4, 2, '2025-08-22 21:54:41.280182', 'Alergia alimentar detectada', 'Média');
INSERT INTO public.alertas_medicos VALUES (5, 5, 3, '2025-08-22 21:54:41.280182', 'Sonolência excessiva durante corrida', 'Baixa');
INSERT INTO public.alertas_medicos VALUES (6, 6, 3, '2025-08-22 21:54:41.280182', 'Níveis de glicose elevados', 'Alta');
INSERT INTO public.alertas_medicos VALUES (7, 7, 4, '2025-08-22 21:54:41.280182', 'Frequência cardíaca irregular', 'Crítica');
INSERT INTO public.alertas_medicos VALUES (8, 8, 4, '2025-08-22 21:54:41.280182', 'Crise de asma moderada', 'Alta');
INSERT INTO public.alertas_medicos VALUES (9, 9, 5, '2025-08-22 21:54:41.280182', 'Reação alérgica a medicamento', 'Crítica');
INSERT INTO public.alertas_medicos VALUES (10, 10, 5, '2025-08-22 21:54:41.280182', 'Enxaqueca intensa detectada', 'Alta');
INSERT INTO public.alertas_medicos VALUES (11, 11, 6, '2025-08-22 21:54:41.280182', 'Pressão levemente elevada', 'Média');
INSERT INTO public.alertas_medicos VALUES (12, 12, 6, '2025-08-22 21:54:41.280182', 'Problemas de visão durante prova', 'Baixa');
INSERT INTO public.alertas_medicos VALUES (13, 13, 7, '2025-08-22 21:54:41.280182', 'Glicose elevada, atenção', 'Alta');
INSERT INTO public.alertas_medicos VALUES (14, 14, 7, '2025-08-22 21:54:41.280182', 'Reação alérgica a frutos do mar', 'Média');
INSERT INTO public.alertas_medicos VALUES (15, 15, 8, '2025-08-22 21:54:41.280182', 'Pressão arterial baixa detectada', 'Média');
INSERT INTO public.alertas_medicos VALUES (16, 16, 8, '2025-08-22 21:54:41.280182', 'Crise de asma leve', 'Média');
INSERT INTO public.alertas_medicos VALUES (17, 17, 9, '2025-08-22 21:54:41.280182', 'Reação alérgica a pólen', 'Média');
INSERT INTO public.alertas_medicos VALUES (18, 18, 9, '2025-08-22 21:54:41.280182', 'Sonolência intensa durante prova', 'Baixa');
INSERT INTO public.alertas_medicos VALUES (19, 19, 10, '2025-08-22 21:54:41.280182', 'Pressão arterial elevada', 'Alta');
INSERT INTO public.alertas_medicos VALUES (20, 20, 10, '2025-08-22 21:54:41.280182', 'Enxaqueca intensa', 'Alta');


--
-- TOC entry 4940 (class 0 OID 17134)
-- Dependencies: 224
-- Data for Name: atletas_eventos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.atletas_eventos VALUES (1, 1, 1);
INSERT INTO public.atletas_eventos VALUES (2, 2, 1);
INSERT INTO public.atletas_eventos VALUES (3, 3, 2);
INSERT INTO public.atletas_eventos VALUES (4, 4, 2);
INSERT INTO public.atletas_eventos VALUES (5, 5, 3);
INSERT INTO public.atletas_eventos VALUES (6, 6, 3);
INSERT INTO public.atletas_eventos VALUES (7, 7, 4);
INSERT INTO public.atletas_eventos VALUES (8, 8, 4);
INSERT INTO public.atletas_eventos VALUES (9, 9, 5);
INSERT INTO public.atletas_eventos VALUES (10, 10, 5);
INSERT INTO public.atletas_eventos VALUES (11, 11, 6);
INSERT INTO public.atletas_eventos VALUES (12, 12, 6);
INSERT INTO public.atletas_eventos VALUES (13, 13, 7);
INSERT INTO public.atletas_eventos VALUES (14, 14, 7);
INSERT INTO public.atletas_eventos VALUES (15, 15, 8);
INSERT INTO public.atletas_eventos VALUES (16, 16, 8);
INSERT INTO public.atletas_eventos VALUES (17, 17, 9);
INSERT INTO public.atletas_eventos VALUES (18, 18, 9);
INSERT INTO public.atletas_eventos VALUES (19, 19, 10);
INSERT INTO public.atletas_eventos VALUES (20, 20, 10);


--
-- TOC entry 4936 (class 0 OID 17115)
-- Dependencies: 220
-- Data for Name: contatos_emergencia; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.contatos_emergencia VALUES (1, 1, 'Paulo Silva', '11999998888', 'Pai');
INSERT INTO public.contatos_emergencia VALUES (2, 2, 'Clara Oliveira', '11988887777', 'Mãe');
INSERT INTO public.contatos_emergencia VALUES (3, 3, 'Fernanda Souza', '11977776666', 'Esposa');
INSERT INTO public.contatos_emergencia VALUES (4, 4, 'João Pereira', '11966665555', 'Irmão');
INSERT INTO public.contatos_emergencia VALUES (5, 5, 'Ricardo Lima', '11955554444', 'Pai');
INSERT INTO public.contatos_emergencia VALUES (6, 6, 'Sônia Santos', '11944443333', 'Mãe');
INSERT INTO public.contatos_emergencia VALUES (7, 7, 'Mariana Costa', '11933332222', 'Esposa');
INSERT INTO public.contatos_emergencia VALUES (8, 8, 'Rafael Fernandes', '11922221111', 'Irmão');
INSERT INTO public.contatos_emergencia VALUES (9, 9, 'Paula Martins', '11911110000', 'Mãe');
INSERT INTO public.contatos_emergencia VALUES (10, 10, 'Eduardo Rocha', '11900009999', 'Pai');
INSERT INTO public.contatos_emergencia VALUES (11, 11, 'Luciana Alves', '11999991111', 'Esposa');
INSERT INTO public.contatos_emergencia VALUES (12, 12, 'Carlos Gomes', '11988882222', 'Irmão');
INSERT INTO public.contatos_emergencia VALUES (13, 13, 'Patrícia Nascimento', '11977773333', 'Mãe');
INSERT INTO public.contatos_emergencia VALUES (14, 14, 'Vitor Ribeiro', '11966664444', 'Pai');
INSERT INTO public.contatos_emergencia VALUES (15, 15, 'Ana Rocha', '11955555555', 'Esposa');
INSERT INTO public.contatos_emergencia VALUES (16, 16, 'Roberto Almeida', '11944446666', 'Irmão');
INSERT INTO public.contatos_emergencia VALUES (17, 17, 'Fernanda Pinto', '11933337777', 'Mãe');
INSERT INTO public.contatos_emergencia VALUES (18, 18, 'Marcos Correia', '11922228888', 'Pai');
INSERT INTO public.contatos_emergencia VALUES (19, 19, 'Carla Castro', '11911119999', 'Esposa');
INSERT INTO public.contatos_emergencia VALUES (20, 20, 'Gustavo Teixeira', '11900001111', 'Irmão');


--
-- TOC entry 4942 (class 0 OID 17153)
-- Dependencies: 226
-- Data for Name: metricas_saude; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.metricas_saude VALUES (1, 1, 1, '2025-08-22 21:54:41.280182', 165, 96.5, 37.2, '120/80');
INSERT INTO public.metricas_saude VALUES (2, 2, 1, '2025-08-22 21:54:41.280182', 160, 95.0, 36.9, '115/75');
INSERT INTO public.metricas_saude VALUES (3, 3, 2, '2025-08-22 21:54:41.280182', 170, 94.5, 37.5, '130/85');
INSERT INTO public.metricas_saude VALUES (4, 4, 2, '2025-08-22 21:54:41.280182', 162, 96.0, 37.1, '118/78');
INSERT INTO public.metricas_saude VALUES (5, 5, 3, '2025-08-22 21:54:41.280182', 155, 97.0, 36.8, '112/70');
INSERT INTO public.metricas_saude VALUES (6, 6, 3, '2025-08-22 21:54:41.280182', 158, 95.5, 37.0, '125/80');
INSERT INTO public.metricas_saude VALUES (7, 7, 4, '2025-08-22 21:54:41.280182', 172, 95.5, 37.6, '135/88');
INSERT INTO public.metricas_saude VALUES (8, 8, 4, '2025-08-22 21:54:41.280182', 160, 96.2, 37.3, '120/78');
INSERT INTO public.metricas_saude VALUES (9, 9, 5, '2025-08-22 21:54:41.280182', 168, 94.0, 37.1, '125/82');
INSERT INTO public.metricas_saude VALUES (10, 10, 5, '2025-08-22 21:54:41.280182', 162, 95.8, 36.9, '118/77');
INSERT INTO public.metricas_saude VALUES (11, 11, 6, '2025-08-22 21:54:41.280182', 170, 96.0, 37.4, '122/80');
INSERT INTO public.metricas_saude VALUES (12, 12, 6, '2025-08-22 21:54:41.280182', 159, 96.6, 36.8, '117/76');
INSERT INTO public.metricas_saude VALUES (13, 13, 7, '2025-08-22 21:54:41.280182', 175, 95.7, 37.7, '132/86');
INSERT INTO public.metricas_saude VALUES (14, 14, 7, '2025-08-22 21:54:41.280182', 161, 96.4, 37.0, '119/78');
INSERT INTO public.metricas_saude VALUES (15, 15, 8, '2025-08-22 21:54:41.280182', 165, 97.0, 37.2, '115/74');
INSERT INTO public.metricas_saude VALUES (16, 16, 8, '2025-08-22 21:54:41.280182', 160, 96.2, 37.1, '120/78');
INSERT INTO public.metricas_saude VALUES (17, 17, 9, '2025-08-22 21:54:41.280182', 168, 96.0, 37.0, '122/80');
INSERT INTO public.metricas_saude VALUES (18, 18, 9, '2025-08-22 21:54:41.280182', 158, 95.5, 36.9, '115/75');
INSERT INTO public.metricas_saude VALUES (19, 19, 10, '2025-08-22 21:54:41.280182', 172, 95.7, 37.5, '130/85');
INSERT INTO public.metricas_saude VALUES (20, 20, 10, '2025-08-22 21:54:41.280182', 160, 96.1, 37.2, '118/78');


--
-- TOC entry 4950 (class 0 OID 0)
-- Dependencies: 227
-- Name: alertas_medicos_id_alerta_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.alertas_medicos_id_alerta_seq', 20, true);


--
-- TOC entry 4951 (class 0 OID 0)
-- Dependencies: 223
-- Name: atletas_eventos_id_atleta_evento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.atletas_eventos_id_atleta_evento_seq', 20, true);


--
-- TOC entry 4952 (class 0 OID 0)
-- Dependencies: 217
-- Name: atletas_id_atleta_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.atletas_id_atleta_seq', 20, true);


--
-- TOC entry 4953 (class 0 OID 0)
-- Dependencies: 219
-- Name: contatos_emergencia_id_contato_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contatos_emergencia_id_contato_seq', 20, true);


--
-- TOC entry 4954 (class 0 OID 0)
-- Dependencies: 221
-- Name: eventos_id_evento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.eventos_id_evento_seq', 20, true);


--
-- TOC entry 4955 (class 0 OID 0)
-- Dependencies: 225
-- Name: metricas_saude_id_metrica_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.metricas_saude_id_metrica_seq', 20, true);


-- Completed on 2025-08-23 00:56:59

--
-- PostgreSQL database dump complete
--

