# MyToolbox Frontend

**MyToolbox Frontend** is a React-based single-page application built with Vite and Tailwind CSS, providing a user interface for the MyToolbox Django backend. It interacts with PDF processing APIs (`Merge PDF`, `Split PDF`, `Split PDF by Page`, `Encrypt PDF`, `OCR PDF`) via HTTP requests, using React Query for data fetching and state management.

This README guides developers on setting up and running the front-end using Docker or locally.

## Features

- **Merge PDF**: Upload multiple PDFs to merge into one.
- **Split PDF**: Split a PDF by specified page ranges.
- **Split PDF by Page**: Split a PDF into individual PDFs per page (ZIP).
- **Encrypt PDF**: Add password protection to a PDF.
- **OCR PDF**: Extract text from PDFs as JSON or `.txt`.

## Prerequisites

- **Docker**: For containerized setup.
  - *Linux*: `sudo apt-get install docker.io`
  - *Windows/macOS*: Install Docker Desktop.
  - Verify: `docker --version`.
- **Docker Compose**: For managing services.
  - *Linux*: `sudo apt-get install docker-compose`
  - *Windows/macOS*: Included with Docker Desktop.
  - Verify: `docker-compose --version`.
- **Node.js 18+** *(local setup)*: Verify: `node --version`.
- **Git**: For cloning the repository.
  - Verify: `git --version`.
- **Backend**: MyToolbox Django backend running at `http://localhost:8000`.

## Project Structure

```
mytoolbox-frontend/
├── public/                    # Static assets
├── src/                       # Source code
│   ├── api/                   # API services with React Query
│   ├── assets/                # Images, fonts
│   ├── components/            # Reusable UI components
│   ├── hooks/                 # Custom hooks
│   ├── pages/                 # Page components
│   ├── styles/                # Tailwind and global CSS
│   ├── utils/                 # Utilities
│   ├── App.jsx                # Routes
│   ├── main.jsx               # Entry with QueryClientProvider
│   └── env.js                 # Environment variables
├── .env                       # Environment variables
├── Dockerfile                 # Docker configuration
├── docker-compose.yml         # Docker Compose configuration
├── package.json               # Dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
└── README.md                  # This file
```

## Setup Instructions

### Option 1: Docker Setup

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd mytoolbox-frontend
   ```

   > Replace `<repository-url>` with your Git repository URL.

2. **Build and Run with Docker Compose**

   ```bash
   docker-compose up --build
   ```

   - Builds the front-end image.
   - Runs the Vite development server on port 5173.
   - Access at `http://localhost:5173`.

   For detached mode:

   ```bash
   docker-compose up --build -d
   ```

   Stop the containers:

   ```bash
   docker-compose down
   ```

### Option 2: Local Setup

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd mytoolbox-frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

   Access at `http://localhost:5173`.

## Testing the Application

- **Navigate**: Visit `http://localhost:5173` and use the UI to test features.
- **API Integration**: Ensure the backend is running (`http://localhost:8000`).
- **Example**: Go to `/merge-pdf`, upload PDFs, and download the merged file.
- **Swagger UI**: Reference backend APIs at `http://localhost:8000/api/docs/`.

## Troubleshooting

- **CORS Errors**:

  - Ensure `django-cors-headers` is installed and `CORS_ALLOWED_ORIGINS` includes `http://localhost:5173` in the backend.
  - Check browser console for errors.

- **Docker Build Fails**:

  - Verify `package.json` and `Dockerfile`.
  - Clear cache: `docker-compose build --no-cache`.

- **API Errors**:

  - Check `VITE_API_URL` in `.env`.
  - Test backend APIs with curl or Swagger UI.

- **Tailwind Not Applying**:

  - Verify `tailwind.config.js` content paths.
  - Restart Vite: `npm run dev`.

## Deployment Notes

For production deployment on a Linux server:

1. **Set up the Server**

   ```bash
   sudo apt-get update
   sudo apt-get install docker.io docker-compose nginx
   ```

2. **Clone and Configure**

   ```bash
   git clone <repository-url>
   cd mytoolbox-frontend
   echo "VITE_API_URL=https://your-backend-domain" > .env
   ```

3. **Run with Docker Compose**

   ```bash
   docker-compose -f docker-compose.yml up -d
   ```

4. **Set up Nginx**

   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       location / {
           proxy_pass http://127.0.0.1:5173;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

   - Enable: `sudo ln -s /etc/nginx/sites-available/mytoolbox-frontend /etc/nginx/sites-enabled/`
   - Restart: `sudo systemctl restart nginx`

5. **Secure with SSL**

   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx
   ```

## Contributing

- Fork the repository and create a feature/bugfix branch.
- Write tests with Jest/React Testing Library.
- Submit a pull request with a clear description.

## License

[MIT License] *(Update with your preferred license)*

---

For issues, open a GitHub issue or contact [your contact info].