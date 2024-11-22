#!/bin/bash

# Build the application
npm run build

# Compress the dist folder
tar -czf dist.tar.gz dist/

# Transfer to VPS (replace with your VPS details)
scp dist.tar.gz user@your-vps-ip:/var/www/hamzabelgacem.tn/

# SSH commands for VPS
ssh user@your-vps-ip << 'ENDSSH'
  # Navigate to the website directory
  cd /var/www/hamzabelgacem.tn

  # Backup existing files
  if [ -d "dist" ]; then
    mv dist dist_backup_$(date +%Y%m%d_%H%M%S)
  fi

  # Extract new files
  tar -xzf dist.tar.gz

  # Clean up
  rm dist.tar.gz

  # Restart Nginx if needed
  sudo systemctl restart nginx
ENDSSH