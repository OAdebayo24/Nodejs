# Render HTML File with Node.js

This repository demonstrates how to use Node.js to render an HTML file as a response to client requests. It provides a basic server setup and serves an HTML file stored in the project directory.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)

## Introduction

This project is a simple example of how to set up an HTTP server in Node.js to serve HTML files. It is an excellent starting point for beginners who want to understand the basics of server-side rendering with Node.js.

## Features

- Lightweight and easy to set up.
- Uses Node.js's built-in `http` and `fs` modules.
- Serves static HTML files.
- Customizable to handle additional routes or serve multiple files.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v12.0.0 or later)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/render-html-nodejs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd render-html-nodejs
   ```

3. Install dependencies (if any):

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node server.js
   ```

2. Open your web browser and navigate to:

   ```
   http://localhost:5000
   ```

3. You should see the HTML file rendered in your browser.

## Project Structure

```
render-html-nodejs/
├── app.js        # Main server file
├── index.html       # HTML file to be served
├── 404.html         # HTML file to be served 
└── README.md        # Documentation
```

### server.js

This file contains the Node.js server code. It uses the built-in `http` and `fs` modules to serve the HTML file.

### index.html

This is the HTML file that will be rendered when the server is accessed. You can replace this file with your own HTML content.

## Customization

- To serve a different HTML file, update the `filePath` variable in `app.js` to point to your new file.
- You can extend the server to handle additional routes or serve other file types (e.g., CSS, JS, images).
- Add middleware like `express` for more advanced features if needed.


