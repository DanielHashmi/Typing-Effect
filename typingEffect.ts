const home = document.querySelector('.home') as HTMLDivElement;
const about = document.querySelector('.about') as HTMLDivElement;
const blog = document.querySelector('.blog') as HTMLDivElement;
const contact = document.querySelector('.contact') as HTMLDivElement;

animate(home)
animate(about)
animate(blog)
animate(contact)

function animate(element: HTMLElement) {
    const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    const copy1: string[] = element.innerHTML.split(''), copy2 = element.innerHTML.split('');

    element.addEventListener('click', async (e) => {
        for (let i = 0; i < element.innerHTML.length; i++) {
            for (let j = 0; j < letters.length; j++) {

                await new Promise((res, rej) => {
                    setTimeout(() => {
                        res('resolved')
                    }, 10);
                })

                if (copy2[i] === letters[j]) {
                    copy1[i] = letters[j]
                    element.innerHTML = copy1.join('');
                    break;
                } else if (copy2[i] === letters[j].toLowerCase()) {
                    copy1[i] = letters[j].toLowerCase()
                    element.innerHTML = copy1.join('');
                    break;
                } else {
                    copy1[i] = letters[j]
                    element.innerHTML = copy1.join('');
                }
            }
        }
        element.innerHTML = copy2.join('')
    })
}