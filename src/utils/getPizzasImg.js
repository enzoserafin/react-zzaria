import pizzaCalabresa from '../assets/images/pizza-calabresa.png'
import pizzaFrangoCatupiry from '../assets/images/pizza-frango-catupiry.png'
import pizzaPrestigio from '../assets/images/pizza-prestigio.png'

function getPizzas(pizza) {
  switch (pizza) {
    case 'calabresa':
      return pizzaCalabresa
    case 'frangoCatupiry':
      return pizzaFrangoCatupiry
    case 'prestigio':
      return pizzaPrestigio
    default:
      return pizzaCalabresa
  }
}

export default getPizzas
