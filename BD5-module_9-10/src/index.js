import { refs } from './js/refs';
import { createLi, addLiToList } from './js/generateMarkdown';
import { storage } from './js/helpers/storage';

const handleMount = () => {
  const list = storage.readItem('list', []);
  const markdown = list.reduce((acc, text) => acc + createLi(text), '');
  addLiToList(markdown);
};

const handleSubmit = e => {
  e.preventDefault();
  const value = refs.input.value;
  const liItem = createLi(value);
  addLiToList(liItem);
  const result = storage.readItem('list', []);
  result.push(value);
  storage.addItem('list', result);
  refs.input.value = '';
};

refs.form.addEventListener('submit', handleSubmit);
addEventListener('DOMContentLoaded', handleMount);
