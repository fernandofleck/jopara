import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }

  handleAddRow = () => {
    this.setState((prevState, props) => {
      const row = {content: "hello this is a new row!" };
      return { rows: [...prevState.rows, row] };
    });
  };

  handleRemoveRow = () => {
    this.setState((prevState, props) => {
      return { rows: prevState.rows.slice(1) };
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Cómo añadir y eliminar filas de la tabla dinámica en React.js</h3>
        <table>
          <tbody>
            {this.state.rows.map(row => (
              <tr>
                <td>{row.content}</td>
              </tr>
            ))}
            <tr>
              <td className="" onClick={this.handleAddRow}>
                (+)
              </td>
              {Boolean(this.state.rows.length) && (
                <td onClick={this.handleRemoveRow}>(-)</td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

//Fuente: https://es.coredump.biz/questions/49171107/how-to-add-and-remove-table-rows-dynamically-in-reactjs#49171792

export default App;
