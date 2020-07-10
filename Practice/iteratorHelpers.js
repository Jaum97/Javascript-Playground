//https://github.com/tc39/proposal-iterator-helpers

class ObligatoryCryptocurrencyReference extends Component {
  componentWillMount() {
    const items = ticker() // returns async iterator
      .map((c) => createElement('h2', null, `${c.name}: ${c.price}`))
      .take(5) // only consume 5 items of a potentially infinite iterator
      .toArray() // greedily transform async iterator into array
      .then((data) => this.setState({ data }));
  }

  render() {
    return createElement('div', null, this.state.data);
  }
}
