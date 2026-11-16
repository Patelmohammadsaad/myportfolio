# Portfolio website — Django + Gunicorn, ready for Docker.
FROM python:3.12-slim

# Keep Python output unbuffered and avoid .pyc files in the image.
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Collect static files (CSS/JS/resume) into /app/staticfiles for WhiteNoise.
RUN python manage.py collectstatic --noinput

# Apply database migrations at container start, then serve with Gunicorn.
EXPOSE 8000
CMD ["sh", "-c", "python manage.py migrate --noinput && gunicorn config.wsgi:application --bind 0.0.0.0:8000 --workers 2"]
