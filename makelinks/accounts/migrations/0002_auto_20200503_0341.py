# Generated by Django 3.0.5 on 2020-05-03 03:41

from django.db import migrations


def populate_occupation_area(apps, schema_editor):
    OccupationArea = apps.get_model('accounts', 'OccupationArea')
    occupations = ('Agronegócios', 'Comércio e Serviços', 'Artesanato',
                   'Educação - Cursos e Palestras', 'Economia Criativa', 'Inovação e Tecnologia',
                   'Acesso a Mercados', 'Indústria', 'Turismo')

    for occupation in occupations:
        OccupationArea.objects.create(name=occupation)


def populate_interests(apps, schema_editor):
    Interest = apps.get_model('accounts', 'Interest')
    interests = ('inovação', 'marketing', 'atendimento',
                 'tecnologia', 'economia digital', 'vendas')

    for interest in interests:
        Interest.objects.create(name=interest)


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(populate_occupation_area),
        migrations.RunPython(populate_interests)
    ]