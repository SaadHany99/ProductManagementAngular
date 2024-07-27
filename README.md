# ProductManagement

This Angular application is a client-side interface for managing products, interacting with an ASP.NET Core Web API backend.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

## Prerequisites

- [Node.js and npm](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

## Setup

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>/AngularApp
2. **Install Dependencies:**
    ```bash
    npm install
3. **Configure the API Endpoint:**
Ensure that the API URL in the "product.service.ts" file points to the correct backend URL. By default, it is set to:
    ```bash
    private apiUrl = 'https://localhost:{port}/api/products';
## Application Structure
- Components:

   - src/app/product-list: Displays a list of products.
   - src/app/product-form: Handles adding and editing products.
- Service:
   - src/app/product.service.ts: Manages HTTP requests to the ASP.NET Core Web API.

## Usage
- Viewing Products
   - Navigate to http://localhost:4200/products to view the list of products.
- Adding a Product
   1. Click on the Add Product button.
   2. Fill out the form with the product details.
   3. Click Add to add the product.
- Editing a Product
   1. Click on the Edit button next to the product you want to edit.
   2. Update the product details in the form.
   3. Click Update to save the changes.
- Deleting a Product
   1. Click on the Delete button next to the product you want to remove.
   2. Confirm the deletion.

## Running the Application
  **Start the Angular Development Server:**
  ```bash
  ng serve -o (or) npm start



