#!/bin/bash

# check for existence of command line arg
if [ $# -eq 0 ]
  then
    echo "No arguments supplied, must supply a value of at least 1"
    exit 0
fi

# First SD flashed is always master
./flash \
    --hostname master
    https://github.com/hypriot/image-builder-rpi/releases/download/v1.9.0/hypriotos-rpi-v1.9.0.img.zip

# Flashing pods
for i in `seq 1 $1`; do
    ./flash \
        --hostname pod-$i \
        https://github.com/hypriot/image-builder-rpi/releases/download/v1.9.0/hypriotos-rpi-v1.9.0.img.zip
done

