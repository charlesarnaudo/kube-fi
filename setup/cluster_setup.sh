#!/bin/bash

./flash \
    --hostname master
    https://github.com/hypriot/image-builder-rpi/releases/download/v1.9.0/hypriotos-rpi-v1.9.0.img.zip

for i in `seq 1 $1`; do
    ./flash \
        --hostname pod-$i \
        https://github.com/hypriot/image-builder-rpi/releases/download/v1.9.0/hypriotos-rpi-v1.9.0.img.zip
done

