import { useState } from "react";

import './App.css';
import ProductForm from './components/ProductForm';

function App() {

  return (
    <>
      <h1>Gestionar productos</h1>
      <ProductForm
        onAddProduct=""
        onUpdateProduct=""
        onCancelEdit=""
        productoEditado=""
      />
    </>
  )
}

export default App
