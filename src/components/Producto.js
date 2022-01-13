import { Component } from "react";
import Button from "./Button";
const styles = {
  producto: {
    border: "1px solid #e1e1e1",
    boxShadow: "0 5px 5px rgb(0,0,0,0.1)",
    width: "30%",
    padding: "10px 15px",
    borderRadius: "10px",
  },
  img: {
    width: "100%",
  },
};

class Producto extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props;

    return (
      <div style={styles.producto}>
        <img style={styles.img} alt={producto.name} src={producto.img} />
        <h2>{producto.name}</h2>
        <p>{producto.price}</p>
        <Button onClick={() => agregarAlCarro(producto)}>
          Agregar al carro
        </Button>
      </div>
    );
  }
}

export default Producto;
