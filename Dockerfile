version: '3.8'

services:
  frontend:
    build:
      context: ../mytoolbox-frontend
      dockerfile: Dockerfile
    volumes:
      - ../mytoolbox-frontend:/app
      - /app/node_modules
    ports:
      - "5173:5173"
    environment:
      - VITE_API_URL=http://backend:8000
    depends_on:
      - backend
    networks:
      - mytoolbox

networks:
  mytoolbox:
    driver: bridge

volumes:
  static_volume: