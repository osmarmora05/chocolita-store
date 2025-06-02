#!/bin/bash

NGINX_CONF_PATH=/etc/nginx/conf.d/load-balancer.conf
NGINX_CONF="$(cat <<EOF
upstream backend {
    # server 192.168.100.21; slave
}

server {
    listen 80;

    location / {
        proxy_pass http://backend;
    }
}
EOF
)"
IP=$(hostname -I | awk '{print $1}')
DOMAIN="chocolita-store.com"

deps_nginx=(
    nginx
)

YELLOW='\033[1;33m'
NC='\033[0m' # No Color

if [ "$(id -u)" = 0 ]; then
    echo "This script SHOULD NOT BE RUN AS ROOT"
    exit 1
fi

echo "Installing dependencies..."

for pkg in "${deps_nginx[@]}"; do
    
    sudo dnf install -y "$pkg"
    
    if [ $? -ne 0 ]; then
        echo "Error installing $pkg"
        exit 1
    fi
done


# Creating nginx conf file...
echo "Creating nginx config file ..."
echo "$NGINX_CONF" | sudo tee "$NGINX_CONF_PATH" > /dev/null

echo -e "${YELLOW}TODOS:${NC}..."
echo -e "${YELLOW}- Remember to add the IP of the slaves${NC}"

# Add domain to the host
if grep -q "$DOMAIN" /etc/hosts; then
    echo "$DOMAIN It's already in /etc/hosts"
else
    echo "Adding $DOMAIN with IP $IP to /etc/hosts..."
    echo "$IP $DOMAIN" | sudo tee -a /etc/hosts > /dev/null
fi

echo "Starting nginx.service"
sudo systemctl start nginx.service

# Opening firewall ports
# sudo firewall-cmd --permanent --add-service=http
# sudo firewall-cmd --permanent --add-port=80/http
# sudo systemctl reload nginx.service

