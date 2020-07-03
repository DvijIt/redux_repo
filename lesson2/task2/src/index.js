import './index.scss'
import store, { increment, decrement, reset } from './store';

const resultElem = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIncrement = () => {
    store.dispatch(increment())
}
const onDecrement = () => {
    store.dispatch(decrement())
}
const onReset = () => {
    store.dispatch(reset())
}

incrementBtn.addEventListener('click', onIncrement);
decrementBtn.addEventListener('click', onDecrement);
resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
    const { history } = store.getState();
    const currentValue = history.reduce((acc, value) => acc + value, 0);
    const historyString = history.map(num => num < 0 ? num : `+${num}`).join('') + '=' + currentValue
    resultElem.textContent = history.length === 0  ? '' : historyString
})
