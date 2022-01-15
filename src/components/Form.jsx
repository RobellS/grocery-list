import { Component } from "react/cjs/react.development";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form id="form">
          <label htmlFor="item">Item:</label>
          <input
            type="text"
            id="item"
            onChange={(e) => this.setState({ item: e.target.value })}
          />
          &nbsp;
          <label htmlFor="units">Units:</label>
          <input
            type="text"
            id="units"
            onChange={(e) => this.setState({ unit: e.target.value })}
          />
          &nbsp;
          <label htmlFor="quantity">Quantity:</label>
          <select
            id="quantity"
            onChange={(e) => this.setState({ quantity: e.target.value })}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </select>
          &nbsp;
        
        <button
          onClick={() => {
            this.props.addItems(this.state);
          }}
        >
          Add
        </button>
        </form>
      </div>
    );
  }
}

export default Form;
