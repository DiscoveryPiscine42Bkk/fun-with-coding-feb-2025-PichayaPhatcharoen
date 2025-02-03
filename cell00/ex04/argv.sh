#!/bin/bash

if [ $# -eq 0 ]; then
    echo "No arguments passed."
else
        echo "$1"
    if [ $# -gt 1 ]; then
        echo "$2"
    fi
    if [ $# -gt 2 ]; then
        echo "$3"
    fi
fi
