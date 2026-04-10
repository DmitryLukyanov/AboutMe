# Solution Design

## Overview

This is a personal portfolio web application hosted at [dmitrylukyanov.github.io/AboutMe](https://dmitrylukyanov.github.io/AboutMe/).

## Architecture

| Layer | Technology |
|-------|-----------|
| Backend | ASP.NET Core (C#) |
| Frontend | React (JavaScript) |
| Hosting | GitHub Pages |

## Project Structure

- **Portfolio/** — ASP.NET Core project
  - **ClientApp/** — React frontend application
  - **Controllers/** — API controllers
  - **Pages/** — Razor pages

## Deployment

The app is built and deployed to GitHub Pages via a GitHub Actions workflow (`.github/workflows/node.js.yml`).

## Future Work

- Expand portfolio content
- Add project showcase section
- Improve UI/UX design
