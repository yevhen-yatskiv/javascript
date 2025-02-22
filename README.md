# JavaScript Projects

This repository contains various JavaScript projects. Each project is located in its own directory and has its own README file with specific details.

## Projects

- [Piano](./piano/README.md): A virtual piano that plays notes when keys are pressed.
- [Zod](./zod/README.md): Examples of using Zod for schema validation.

## Starting the Server

To start the server and access the projects, follow these steps:

1. Install `http-server` if you haven't already:

    ```sh
    npm install -g http-server
    ```

2. Navigate to the root directory of the repository:

    ```sh
    cd js
    ```

3. Start the server on port `8080`:

    ```sh
    http-server -p 8080
    ```

4. Access the Piano project in your browser at:

    [http://localhost:8080/piano/](http://localhost:8080/piano/)

# How to Run Zod Examples

To run the Zod examples provided in the `zod/src/index.js` file, follow these steps:

1. **Install Dependencies**:
   Ensure you have Node.js installed. Then, navigate to the project directory and install the required dependencies.
   ```bash
   cd js
   npm install zod
   ```

2. **Run the Examples**:
   Execute the `zod/src/index.js` file using Node.js.
   ```bash
   node zod/src/index.js
   ```

You should see the output of various Zod schema validations in the console.