import { css, html, reactive, useState } from 'z-js-framework';
import { Main } from '../components/Main';
import { Button } from '../components/button';

const inputStyles = css`
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border-radius: 4px;
  background-color: #eee;
  border: 2px solid #000;
  color: #333;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #ddd;
  }
`;

export default function About() {
  const [name, setName] = useState('type your name here, delete this!');

  const UI = () => html`
    <Main class="w-full h-full bg-black text-white flex flex-col justify-center items-center">
      <h1 class="text-4xl">Z About</h1>
      <p class="my-10">Name: ${name}</p>
      <input
        type="text"
        onChange="${(e) => setName(e.target.value)}"
        class="${inputStyles}"
        value="${name}" />
      <div class="flex gap-4 mt-10">
      <a href="/">
          ${Button({
            text: 'Home',
            onClick: () => (() => {}),
            buttonStyles: 'justify-center flex',
          })}
        </a>
        <a href="/listing">
          ${Button({
            text: 'Legends',
            onClick: () => (() => {}),
            buttonStyles: 'justify-center flex',
          })}
        </a>
        <a href="https://google.com">
          ${Button({
            text: 'Just Google',
            onClick: () => (() => {}),
            buttonStyles: 'justify-center flex',
          })}
        </a>
      </div>
    </Main>
    `;

  // you wrap UI function in a reactive, it automatically updates UI when state changes
  return reactive(UI);
}
