import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

import Board from "./Board";


export default function Game() {
  return (
    <Canvas style={{"height":"35rem", "width": "15rem", "margin": "auto"}}>
        <PerspectiveCamera position={[200, 0, -1000]}/>
        <ambientLight intensity={0.5}/>
        <spotLight position={[10, 15, 10]} angle={0.3}/>
        <Board/>
    </Canvas>
  );
}