import { getRef, html, List, useEffect, useState } from 'z-js-framework';
import { Button } from '../components/button';

const legendsList = [
  {
    id: 1,
    name: 'Linus Torvalds',
  },
  {
    id: 2,
    name: 'Brendan Eich',
  },
  {
    id: 3,
    name: 'Z Js',
  },
];

export default function Listing() {
  const [legends, setLegends] = useState(legendsList);

  const UI = html`
    <main class="w-full h-full bg-black text-white flex flex-col justify-center items-center">
      <div class="flex flex-col justify-content">
        <h1 class="text-4xl mb-5">Z Listing</h1>
        ${Button({
          text: '♻️ reload',
          onClick: () => updateList(legendsList),
        })}
      </div>
      <h2 class="my-10">Spot The Infamous Legend:</h2>
      <div class="flex flex-row my-10 gap-4" ref="listRef">
        ${List({
          ref: 'listRef',
          items: legends,
          render: ({ item }) =>
            LegendComponent({
              id: item.id,
              name: item.name,
              remove: (id) =>
                setLegends(legends.current().filter((l) => l.id !== id)),
            }),
        })}
      </div>
      <div class="flex flex-row gap-4">
      <a href="/">
          ${Button({
            text: 'Home',
            onClick: () => (() => {}),
            buttonStyles: 'justify-center flex',
          })}
        </a>
        <a href="/about">
          ${Button({
            text: 'About',
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
    </main>
  `;
  useEffect(() => {
    updateList();
  }, [legends]);

  function updateList(newList = null) {
    const listRef = getRef('listRef');
    listRef.innerHTML = '';
    // imperatively update the list
    let list = newList || legends.current();
    list.forEach((legend) => {
      listRef.appendChild(
        LegendComponent({
          id: legend.id,
          name: legend.name,
          remove: (id) =>
            setLegends(legends.current().filter((l) => l.id !== id)),
        })
      );
    });
    if (!newList && legends.current().length === 0) {
      listRef.innerHTML = 'No legends yet, reload!';
    }
  }

  return UI;
}

function LegendComponent(props) {
  return html`
    <div class="">
      <p>🎖️ ${props.name}</p>
      <div class="flex justify-center items-center">
        ${Button({
          text: '❌',
          onClick: () => props.remove(props.id),
        })}
      </div>
    </div>
  `;
}
