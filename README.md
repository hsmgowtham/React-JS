# React-JS 
## Overview

This repository contains code and examples for practicing React JS.

## Installation Guide

### 1. Update Your System

Before installing React, ensure your system is updated:

```sh
sudo apt update 
sudo apt upgrade
```

### 2. Install Node.js

Install Node.js, which is required to run React applications:

```sh
sudo apt install nodejs
```

Check that the installation was successful by querying Node.js for its version number:

```sh
node -v
```

### 3. Install npm

In most cases, you’ll also want to install npm, the Node.js package manager:

```sh
sudo apt install npm
```

You can verify the installation by checking npm's version:

```sh
npm -v
```

For more detailed instructions, refer to this [DigitalOcean tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04).

### 4. Create a React App

Once Node.js and npm are installed, you can create a new React application using `create-react-app`:

```sh
npx create-react-app my-react-app
```

### 5. Start the React App

Navigate to your new React application's directory and start the development server:

```sh
cd my-react-app
npm start
```

This will start the app and you can view it in your browser at `http://localhost:3000`.
