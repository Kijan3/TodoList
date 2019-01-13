import React, { Component } from 'react';
import Header from "./components/Header";
import DodajRzecz from "./components/DodajRzecz";
import Rzeczy from "./components/Rzeczy";
import Footer from "./components/Footer";
import uuid from "uuid";

import './App.css';

class App extends Component {
  //tablica rzeczy do zrobienia
  state = {
    rzeczyDoZrobienia: [
      {
        id: 1,
        title: "Wyprowadź psa",
        skonczone: false
      },
      {
        id: 2,
        title: "Wynieś śmieci",
        skonczone: false
      },
      {
        id: 3,
        title: "Nakarm kota",
        skonczone: false
      }
    ]
  }
// zaznaczanie zrobionych rzeczy
  zaznacz = (id) => {
    this.setState( { rzeczyDoZrobienia: this.state.rzeczyDoZrobienia.map(rzecz => {
      if (rzecz.id === id) {
        rzecz.skonczone = !rzecz.skonczone
      }
      return rzecz;
    }) });
  }
// usuwanie rzeczy
  delTodo = (id) => {
    this.setState({ rzeczyDoZrobienia: [...this.state.rzeczyDoZrobienia.filter(rzecz => rzecz.id !== id)]});
  }
// Dodawanie do listy
  dodajRzecz = (title) => {
    const nowaRzecz = {
      id: uuid.v4(),
      title,
      skonczone: false
    }
    this.setState({ rzeczyDoZrobienia: [...this.state.rzeczyDoZrobienia, nowaRzecz] })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <DodajRzecz dodajRzecz={this.dodajRzecz} />
          <Rzeczy rzeczyDoZrobienia={ this.state.rzeczyDoZrobienia } zaznacz={ this.zaznacz } delTodo = { this.delTodo } />
        </div>
       <Footer />
      </div>
    );
  }
}

export default App;
