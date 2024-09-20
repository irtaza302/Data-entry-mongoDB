# Data Entry MongoDB Website

A simple data entry website using MongoDB, Express, and plain HTML/JavaScript.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a simple data entry website that allows users to submit their name and email. The data is stored in a MongoDB database and displayed on the webpage.

## Features

- Data entry form
- Display list of entries
- MongoDB integration

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/irtaza302/Data-entry-mongoDB.git
    cd repository
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add your MongoDB connection string:

    ```plaintext
    MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/dataentry?retryWrites=true&w=majority
    ```

4. Start the server:

    ```bash
    node server.js
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Open the data entry form in your browser.
2. Enter your name and email.
3. Click "Submit" to save the entry.
4. The list of entries will be displayed below the form.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
