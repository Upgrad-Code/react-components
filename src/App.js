import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Folder from '../components/Folder/Folder';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <NavBar />
      <Folder />
    </div>
  );
}
