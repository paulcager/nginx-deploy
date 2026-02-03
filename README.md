# Web Hosting Infrastructure

Docker Compose-based web hosting setup serving multiple personal domains and services.

## Architecture

Uses **Caddy** as the primary reverse proxy with automatic HTTPS certificate management via Let's Encrypt.

### Services

- **paraguide** - Paragliding guide application (paraguide.uk)
- **airspace-server** - GB airspace data service
- **osheight-server** - OS height data service
- **osgrid-server** - OS grid reference service
- **caddy** - Reverse proxy with automatic HTTPS

### Domains

- `paraguide.uk`, `www.paraguide.uk`, `li.paraguide.uk`
- `cager.name`, `www.cager.name`, `li.cager.name`

## Quick Start

```bash
# Start all services
docker compose up -d

# View logs
docker compose logs -f

# Stop services
docker compose down
```

## Requirements

- Docker and Docker Compose
- `/var/www` directory with static content for domains
- `./secrets` directory with application credentials (not in git)

## Configuration

Main configuration in `Caddyfile`. Caddy automatically manages SSL certificates from Let's Encrypt using email `paul.cager@gmail.com`.

**Note:** `cager.name` supports both HTTP and HTTPS to allow access from initrd environments without SSL.

## Legacy Setup

The `docker-compose-local.yml` file contains the previous nginx-based setup with Nextcloud. This is no longer in active use but retained for reference.
