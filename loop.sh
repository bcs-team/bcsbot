#!/bin/bash

# start again if it crashed
while true; do
    npm run start | tee -a log.txt
    echo "bot crashed. starting again..."
done
