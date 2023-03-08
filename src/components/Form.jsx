import { Component } from 'react';
import { nanoid } from 'nanoid'
export default class Form extends Component {
  state = {
    id:0,
    name: '',
    price: '',
  };
  handleSabmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
    id: 0,
    name: '',
    price: '',
  })
  };

  handlestateInpyt = e => {
    this.setState({ [e.target.name]: e.target.value , id:nanoid()});
    
  };

  render() {
    return (
      <form
        onSubmit={this.handleSabmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      >
        <label>
          Name
          <input
            onChange={this.handlestateInpyt}
            type="text"
            placeholder="Name of Product..."
            value={this.state.name}
            name="name"
          />
        </label>

        <label>
          Price
          <input
            onChange={this.handlestateInpyt}
            type="text"
            placeholder="Price"
            value={this.state.price}
            name="price"
          />
        </label>
        <button type="submit" style={{ width: '60px' }}>
          Save
        </button>
      </form>
    );
  }
}