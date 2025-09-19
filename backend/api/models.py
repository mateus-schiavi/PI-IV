from django.db import models

# Create your models here.
class Corredor(models.Model):
    FAIXAS_IDADE = [
    ('18 a 24', '18 a 24'),
    ('25 a 34', '25 a 34'),
    ('35 a 44', '35 a 44'),
    ('45 a 54', '45 a 54'),
    ('55 a 64', '55 a 64'),
    ('65+', '65 ou mais'),
    ]
    idade = models.CharField(max_length=100, choices=FAIXAS_IDADE, default='', blank=True)
    
    GENERO_CHOICES = [
        ('Masculino', 'Masculino'),
        ('Feminino', 'Feminino'),
        ('Outro', 'Outro'),
    ]
    genero = models.CharField(max_length=100, choices=GENERO_CHOICES, default='', blank=True)
    
    ESTADO_CIVIL_CHOICES = [
        ('Solteiro(a)', 'Solteiro(a)'),
        ('Casado(a) / União Estável', 'Casado(a) / União Estável'),
        ('Divorciado(a)','Divorciado(a)'),
        ('Viúvo(a)', 'Viúvo(a)'),
    ]
    estado_civil = models.CharField(max_length=100, choices=ESTADO_CIVIL_CHOICES, default='', blank=True)
    
    ESCOLARIDADE_CHOICES = [
        ('Ensino fundamental incompleto', 'Ensino fundamental incompleto'),
        ('Ensino fundamental completo', 'Ensino fundamental completo'),
        ('Ensino médio incompleto','Ensino médio incompleto'),
        ('Ensino médio completo', 'Ensino médio completo'),
        ('Ensino superior incompleto', 'Ensino superior incompleto'),
        ('Ensino superior completo', 'Ensino superior completo'),
        ('Pós-graduação(especialização, mestrado, doutorado)', 'Pós-graduação(especialização, mestrado, doutorado)'),
    ]
    escolaridade = models.CharField(max_length=100, choices = ESCOLARIDADE_CHOICES, default='', blank=True)
    
    profissao = models.CharField(max_length=100)
    
    RENDA_CHOICES = [
        ('Até 1 salário mínimo', 'Até 1 salário mínimo'),
        ('De 1 a 2 salários mínimos', 'De 1 a 2 salários mínimos'),
        ('De 2 a 3 salários mínimos','De 2 a 3 salários mínimos'),
        ('De 3 a 5 salários mínimos', 'De 3 a 5 salários mínimos'),
        ('De 5 a 10 salários mínimos', 'De 5 a 10 salários mínimos'),
        ('Acima de 10 salários mínimos', 'Acima de 10 salários mínimos'),
        ('Prefiro não informar', 'Prefiro não informar'),
    ]
    renda_familiar_mensal = models.CharField(max_length=100, choices=RENDA_CHOICES, default='', blank=True)
    
    TEMPO_PRATICA_CHOICES = [
        ('Menos de 6 meses', 'Menos de 6 meses'),
        ('De 6 meses a 1 ano', 'De 6 meses a 1 ano'),
        ('De 1 a 2 anos','De 1 a 2 anos'),
        ('Mais de 2 anos', 'Mais de 2 anos'),
    ]
    tempo_pratica = models.CharField(max_length=100, choices=TEMPO_PRATICA_CHOICES, default='', blank=True)
    
    
    FREQUENCIA_CHOICES = [
        ('1 vez por semana', '1 vez por semana'),
        ('2 a 3 vezes por semana', '2 a 3 vezes por semana'),
        ('4 a 5 vezes por semana', '4 a 5 vezes por semana'),
        ('Todos os dias', 'Todos os dias'),
    ]
    frequencia=models.CharField(max_length=100, choices=FREQUENCIA_CHOICES, default='', blank=True)
    
    PARTICIPACAO_CHOICES = [
        ('Sim, regularmente', 'Sim, regularmente'),
        ('Sim, ocasionalmente', 'Sim, ocasionalmente'),
        ('Não', 'Não'),
    ]
    participacao = models.CharField(max_length=100, choices=PARTICIPACAO_CHOICES, default='', blank=True)
    
    MOTIVACAO_CHOICES = [
        ('Saúde / Bem-estar','Saúde / Bem-estar'),
        ('Estética / Emagrecimento', 'Estética / Emagrecimento'),
        ('Desempenho / Superação pessoal', 'Desempenho / Superação pessoal'),
        ('Socialização', 'Socialização'),
        ('Redução do estresse', 'Redução do estresse'),
    ]
    motivacao = models.CharField(max_length=100, choices=MOTIVACAO_CHOICES, default='', blank=True)
    
    GRUPO_CHOICES = [
        ('Sim', 'Sim'),
        ('Não', 'Não'),
    ]
    grupo_corrida = models.CharField(max_length=5, choices=GRUPO_CHOICES, default='', blank=True)
    
    LOCAL_CHOICES = [
        ('Parque Municipal', 'Parque Municipal'),
        ('Rua', 'Rua'),
        ('Academia (esteira)', 'Academia (esteira)'),
    ]
    local_corrida = models.CharField(max_length=50, choices=LOCAL_CHOICES, default='', blank=True)
    
    def __str__(self):
        return f"{self.genero}, {self.idade}, {self.genero}"