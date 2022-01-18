import { Component } from "react/cjs/react.development";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state={
          item: "",
          units: "",
          quantity: "",
          isPurchased: false,
          id:""
    }
  }

  render() {

    return (
      <div>
        <form id="form">
          <label htmlFor="item">Item:</label>
          <input
            type="text"
            id="item" value={this.state.item}
            onChange={(e) => this.setState({ item: e.target.value })}
          />
          &nbsp;
          <label htmlFor="units">Units:</label>
          <input
            type="text"
            id="units" value={this.state.units}
            onChange={(e) => this.setState({ units: e.target.value })}
          />
          &nbsp;
          <label htmlFor="quantity">Quantity:</label>
          <select
            id="quantity" value={this.state.quantity}
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
          onClick={(e) => {
            e.preventDefault()
            this.props.addItems(this.state);
            this.setState({
            item: "",
            units: "",
            quantity: "",
            isPurchased: false,})
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
