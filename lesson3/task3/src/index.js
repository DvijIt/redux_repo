import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';

store.subscribe(() => console.log(store.getState()));

  store.dispatch(setLanguage('en'))

  store.dispatch(addProduct({id: 76, name: 'Milk'}))
  store.dispatch(removeProduct(76))

  store.dispatch(setUser({id: 1, name: 'Sarah'}))
  store.dispatch(removeUser())
