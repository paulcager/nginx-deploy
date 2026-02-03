# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal web hosting infrastructure using Docker Compose to serve multiple domains and services. The architecture uses **Caddy** as the primary reverse proxy (migrated from nginx) for automatic HTTPS certificate management and routing.

## Architecture

### Current Production Setup (docker-compose.yml)

**Services:**
- `caddy`: Main reverse proxy handling all HTTPS/SSL, routing to backend services
- `paraguide`: Go-based paragliding guide application (paulcager/paraguide image)
- `airspace-server`: GB airspace service (paulcager/gb-airspace image, port 9092)
- `osheight-server`: OS height data service (paulcager/gosdata image, port 9091)
- `osgrid-server`: OS grid reference service (paulcager/osgrid-server image, port 9090)

**Domains served:**
- `paraguide.uk`, `www.paraguide.uk`, `li.paraguide.uk` → reverse proxy to paraguide:80
- `cager.name`, `www.cager.name`, `li.cager.name` → static files from /var/www/www.cager.name
- HTTP (non-HTTPS) explicitly supported for `cager.name` (accessible from initrd without SSL)

**Key volumes:**
- `caddy_data`: Persistent storage for Caddy certificates and data
- `caddy_config`: Caddy configuration
- `club_cache`: Cache for paraguide service club details
- `/var/www`: Static website content mounted from host

### Legacy nginx Setup (docker-compose-local.yml)

**NOTE:** This is a legacy configuration using nginx-proxy and Let's Encrypt companion. Not currently in production use.

Services include:
- `proxy`: nginx-proxy with docker-gen for automatic virtual host configuration
- `letsencrypt-companion`: Automatic SSL certificate management
- `nextcloud-web`: Nextcloud nginx frontend (proxies to app:9000 PHP-FPM)
- `app`: Nextcloud PHP-FPM backend
- `db`: PostgreSQL database for Nextcloud
- `static-web`: Static file server for multiple domains

## Common Commands

### Starting services
```bash
# Start all services (production)
docker compose up -d

# View logs
docker compose logs -f

# Restart specific service
docker compose restart caddy
docker compose restart paraguide
```

### Stopping services
```bash
# Stop all services
docker compose down

# Stop without removing volumes
docker compose stop
```

### Viewing service status
```bash
# List running containers
docker compose ps

# Check Caddy logs for routing issues
docker compose logs caddy

# Check paraguide app logs
docker compose logs paraguide
```

### SSL certificate management
Caddy handles certificates automatically via ACME (Let's Encrypt). Certificates are stored in the `caddy_data` volume.

```bash
# Force certificate renewal (if needed)
docker compose restart caddy
```

## Configuration Files

### Caddyfile
Primary routing and SSL configuration. Key sections:
- Email for Let's Encrypt: `paul.cager@gmail.com`
- Domain routing with automatic HTTPS
- HTTP-only override for cager.name (for initrd access)
- Compression enabled (zstd, gzip)

### Secrets
The paraguide service expects a `./secrets` directory with credentials (not tracked in git). Create this directory with appropriate secrets before deploying.

The caddy service mounts `/var/www/www.cager.name/key.txt` from `./secrets/key.txt`.

## External Dependencies

### Static content
- `/var/www` directory on host contains static website content
- Must exist and contain subdirectories matching domain names (e.g., `/var/www/www.cager.name/`)

### Backend services
All backend service images are hosted on Docker Hub under `paulcager/*`:
- `paulcager/paraguide`
- `paulcager/gb-airspace`
- `paulcager/gosdata`
- `paulcager/osgrid-server`

## Migration Notes

The repository migrated from nginx-proxy to Caddy (commit 778c0ca). Key improvements:
- Automatic HTTPS certificate management (no separate letsencrypt-companion needed)
- Simpler configuration
- Built-in HTTP/2 support
- Better performance with compression (zstd, gzip)

The old nginx setup in `docker-compose-local.yml` and related files (`proxy/`, `nextcloud-web/`, `static-web/`) are retained for reference but not actively used.
