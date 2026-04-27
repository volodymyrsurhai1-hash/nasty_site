# Используем официальный образ Python на базе легковесного Alpine Linux (или slim-buster)
FROM python:3.12-slim

# Устанавливаем переменные окружения
# PYTHONDONTWRITEBYTECODE предотвращает создание файлов .pyc
# PYTHONUNBUFFERED гарантирует, что вывод логов не буферизуется (сразу идет в консоль)
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Устанавливаем системные зависимости (нужны для PostgreSQL и сборки пакетов)
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Создаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файл зависимостей
COPY requirements.txt /app/

# Устанавливаем зависимости Python
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# Копируем весь код проекта в контейнер
COPY . /app/

# Собираем статические файлы
# RUN python manage.py collectstatic --noinput # Это лучше делать скриптом запуска или в docker-compose

# Команда по умолчанию для запуска приложения через Gunicorn (для продакшена)
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3", "nastya_site.wsgi:application"]
