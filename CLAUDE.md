# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-file browser-based Tic Tac Toe game. All game logic, styling, and markup live in `tictactoe.html`.

## Architecture

`tictactoe.html` is self-contained with three sections:
- **HTML** — 9 `.cell` divs with `data-i` attributes (0–8) forming the board
- **CSS** — dark/pink themed layout using CSS Grid for the board
- **JavaScript** — vanilla JS managing board state (`board[]`), turn tracking (`current`), win detection (`WINS` constant with all 8 winning combinations), and a persistent `scores` object across games

Win detection iterates `WINS` after each move; a draw is detected when `board.every(Boolean)` with no winner. Resetting calls `init()` which wipes state and restores cell classes without reloading the page.

## Development

Open `tictactoe.html` directly in a browser — no build step, server, or dependencies required.
