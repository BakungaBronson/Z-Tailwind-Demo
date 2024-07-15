import { html } from 'z-js-framework';

export const Main = ({children}) => {
    return(
        <main class="w-full h-full bg-black text-white flex justify-center items-center">
            ${children}
        </main>
    );
}

