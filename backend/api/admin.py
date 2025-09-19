from django.contrib import admin
from .models import Corredor

@admin.register(Corredor)
class CorredorAdmin(admin.ModelAdmin):
    list_display = ('id', 'idade', 'genero', 'estado_civil', 'escolaridade', 'profissao', 'renda_familiar_mensal')
    list_filter = ('genero', 'estado_civil', 'escolaridade')
    search_fields = ('profissao', 'motivacao_principal')
