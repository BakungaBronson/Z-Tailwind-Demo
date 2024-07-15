import { html, useEffect, useState } from 'z-js-framework';
import { Button } from '../components/button';

// example of a simple z app page - non reactive, see pages/about
export default function Home() {
  const [count, setCount] = useState(0);

  // define ui
  const UI = html`
    <main class="w-full h-full bg-black text-white flex justify-center items-center">
      <div>
        <h1 class="text-center text-3xl">Z.Js Example</h1>
        <img src="https://avatars.githubusercontent.com/u/175498411?s=200&v=4" alt="z js logo" class="my-10"/>
      <div>  

      <div class="flex justify-around">
        <a href="/about">
        ${Button({
          text: 'About',
          onClick: () => (() => {}),
          buttonStyles: 'justify-center flex',
        })}
        </a>
        <a href="/listing">
          ${Button({
            text: 'Listing',
            onClick: () => (() => {}),
            buttonStyles: 'justify-center flex',
          })}
        </a>
      </div>
    </main>
  `;

  // runs everytime count updates
  useEffect(() => {
    const countElement = UI.querySelector('#count');
    countElement.innerHTML = count.current();
  }, [count]);

  return UI;
}
