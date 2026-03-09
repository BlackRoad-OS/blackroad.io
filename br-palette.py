#!/usr/bin/env python3
import sys

palette = {
    "ORANGE": 208,
    "PINK": 198,
    "ROSE": 197,
    "PURPLE": 163,
    "DEEP_PURPLE": 93,
    "BLUE": 33,
    "DEEP_BLUE": 27,
    "WHITE": 231,
    "GRAY": 245,
}

for name, i in palette.items():
    sys.stdout.write(f"\033[48;5;{i}m {name:^14} {i:^3} \033[0m\n")

sys.stdout.write("\n")
