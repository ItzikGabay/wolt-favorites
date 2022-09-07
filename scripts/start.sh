#!/bin/bash
set -euo pipefail

# Common variables
PROJECT_NAME="wolt-favorites"
PROJECT_PATH="Desktop/projects/wolt-favorites/wolt-favorites"
APP_PORT=3000

# CD into workspace files from root directory
cd_workspace() {
  if cd && cd $PROJECT_PATH; then
    echo "Changing current directory to $PROJECT_NAME"
  else
    echo "Error!"
    echo "Project $PROJECT_NAME not existing in $PROJECT_PATH"
    echo "Exiting.."
    exit 1
  fi
}

open_in_intelj() {
  if pstorm .; then
    echo "Opening project in IntelliJ"
  else
    echo "Error!"
    echo "IntelliJ not installed"
    echo "Exiting.."
    exit 1
  fi
}

# Killing port if already in use before starting app
kill_app_port() {
  echo "Killing main app port $APP_PORT:"
  if lsof -ti tcp:$APP_PORT | xargs kill -9; then
    echo "Port $APP_PORT killed successfully."
  else
    echo "No ports found to kill."
  fi
}

# Starting app
start_app() {
  echo "Starting $PROJECT_NAME on development.."
  yarn dev
}

# Main function
init() {
  cd_workspace
  open_in_intelj
  kill_app_port
  start_app
}

init
