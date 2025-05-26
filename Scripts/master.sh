#!/bin/bash

NGINX_CONF_PATH=/etc/nginx/conf.d/master.conf
BACKEND_URL="http://localhost:3000"
NGINX_CONF="$(cat <<EOF
server {
    # https://stackoverflow.com/questions/61647480/how-to-run-a-express-server-using-nginx-in-localhost
    listen 80 default_server;
    server_name _;

    location / {
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_pass $BACKEND_URL; # port where you are serving your express app.
    }
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

# Start nginx
echo "Starting nginx.service"
sudo systemctl start nginx.service
echo "Succes"

# Setup for backend
echo "Installing backend dependencies ..."
cd ../Server
npm i

echo "Run backend"
npm run dev



# Opening firewall ports
# sudo firewall-cmd --permanent --add-service=http
# sudo firewall-cmd --permanent --add-port=80/http
# sudo systemctl reload nginx.service

# TODO: Configure mysql?

