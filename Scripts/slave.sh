#!/bin/bash

NGINX_WEB_APP="chocolita-store"
NGINX_WEB_APP_DEST_DIR="/var/www/$NGINX_WEB_APP.com"
NGINX_CONF_PATH=/etc/nginx/conf.d/slave.conf
NGINX_CONF="$(cat <<EOF
server {
    listen 80;
    server_name $NGINX_WEB_APP.com;
    root $NGINX_WEB_APP_DEST_DIR;
    index index.html;
}
EOF
)"

deps_nginx=(
    nginx
)

deps_dev=(
    node
)


all_deps=("${deps_nginx[@]}" "${deps_dev[@]}")


if [ "$(id -u)" = 0 ]; then
    echo "This script SHOULD NOT BE RUN AS ROOT"
    exit 1
fi

echo "Installing dependencies..."

for pkg in "${all_deps[@]}"; do
    
    sudo dnf install -y "$pkg"
    
    if [ $? -ne 0 ]; then
        echo "Error installing $pkg"
        exit 1
    fi
done

# Creating nginx conf file...
echo "Creating nginx config file ..."
echo "$NGINX_CONF" | sudo tee "$NGINX_CONF_PATH" > /dev/null

# Add web app in $NGINX_WEB_APP_PATH

echo "Installing frontend dependencies ..."
cd ../Client
npm i

echo "Building the frontend ..."
npm run build

echo "Creating frontend destiny directory ... $NGINX_WEB_APP_DEST_DIR"
sudo mkdir -p "$NGINX_WEB_APP_DEST_DIR" 

echo "Copying the dist folder in $NGINX_WEB_APP_DEST_DIR"
sudo cp -r dist/* "$NGINX_WEB_APP_DEST_DIR"

echo "Starting nginx.service"
sudo systemctl start nginx.service

# Opening firewall ports
# sudo firewall-cmd --permanent --add-service=http
# sudo firewall-cmd --permanent --add-port=80/http
# sudo systemctl reload nginx.service

