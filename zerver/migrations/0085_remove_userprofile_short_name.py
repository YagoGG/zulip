# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-16 15:09
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('zerver', '0084_realmemoji_deactivated'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='short_name',
        ),
    ]
