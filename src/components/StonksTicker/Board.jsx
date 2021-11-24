function Board() {
    return (
      <mesh>
        <planeBufferGeometry attach="geometry" args={[15, 105]} />
        <meshLambertMaterial attach="material" color="white" />
      </mesh>
    );
  }

export default Board;