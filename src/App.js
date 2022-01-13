import { Component } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
class App extends Component {
  state = {
    productos: [
      { name: "Netflix", price: 10000, img: "/productos/1.png" },
      { name: "Disney", price: 6000, img: "/productos/2.png" },
      { name: "Spotify", price: 6000, img: "/productos/3.png" },
      /* {name: 'HBO', price: 6000, img: '/productos/4.png'},
      {name: 'Youtube', price: 6000, img: '/productos/5.png'},
      {name: 'Amazon', price: 6000, img: '/productos/6.png'},
      {name: 'Deezer', price: 10000, img: '/productos/7.png'},
      {name: 'Crunchyroll', price: 6000, img: '/productos/8.png'}, */
    ],
    carro: [],
    esCarroVisible: false,
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1,
            }
          : x
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };

  render() {
    const { esCarroVisible } = this.state;

    return (
      <div>
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
