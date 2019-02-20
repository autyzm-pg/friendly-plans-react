#!/usr/bin/env bash
# unofficial bash strict mode, engage!
# http://redsymbol.net/articles/unofficial-bash-strict-mode/
set -euo pipefail

APP_DIR=$(dirname $(dirname "$(readlink $0)"))
cd "${APP_DIR}"

ENVIRONMENT_NAME=${1:-''}

if [ -z "$ENVIRONMENT_NAME" ]
then
    echo
    echo "Please provide environment name as argument."
    echo "Name can be one of 'staging', 'production'."
    echo
    exit 1
fi

echo -e "Starting build process of the App for ${ENVIRONMENT_NAME} environment."

cd ../android && ENVFILE=.env.${ENVIRONMENT_NAME} ./gradlew assembleRelease

echo -e "\v🎉 🎉 🎉 The App for ${ENVIRONMENT_NAME} environment has been build successfully! 🎉 🎉 🎉\v"
