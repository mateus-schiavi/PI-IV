from django.db import models

# Create your models here.

FAIXAS_IDADE = [
    ('18-24', '18 a 24'),
    ('25-34', '25 a 34'),
    ('35-44', '35 a 44'),
    ('45-54', '45 a 54'),
    ('55-64', '55 a 64'),
    ('65+', '65 ou mais'),
]

class Corredor(models.Model):
    idade = models.CharField(max_length=5, choices=FAIXAS_IDADE)
    
    GENERO_CHOICES = [
        ('Masculino', 'Masculino'),
        ('Feminino', 'Feminino'),
        ('Outro', 'Outro'),
    ]
    genero = models.CharField(max_length=20, choices=GENERO_CHOICES)
    
    ESTADO_CIVIL_CHOICES = [
        ('Solteiro(a)', 'Solteiro(a)'),
        ('Casado(a)', 'Casado(a)'),
        ('Divorciado(a)','Divorciado(a)'),
        ('Viúvo(a)', 'Viúvo(a)'),
    ]
    estado_civil = models.CharField(max_length=20, choices=ESTADO_CIVIL_CHOICES)
    
    escolaridade = models.CharField(max_length=50)
    profissao = models.CharField(max_length=100)
    renda_familiar_mensal = models.CharField()
    
    tempo_pratica_corrida = models.CharField(max_length=50)
    frequencia_corrida = models.CharField(max_length=50)
    
    participacao_corridas = models.BooleanField(default=False)
    motivacao_principal = models.CharField(max_length=200)
    faz_parte_grupo_corrida = models.BooleanField(default=False)
    onde_costuma_correr = models.CharField(max_length=200)
    
    
    def __str__(self):
        return f"Corredor {self.idade} anos - {self.genero}"