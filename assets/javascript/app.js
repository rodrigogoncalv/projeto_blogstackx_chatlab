/*
    seleção de elementos html
*/
const elements_html = {
    data_all_category: document.querySelector('[data_all_category]'),
    data_ia_category: document.querySelector('[data_ia_category]'),
    data_iot_category: document.querySelector('[data_iot_category]'),
    data_blockchaim_category: document.querySelector('[data_blockchaim_category]'),
    data_rva_category: document.querySelector('[data_rva_category]'),

    data_cards: document.querySelectorAll('[data_cards]'),

    data_ia_card: document.querySelector('[data_ia_card]'),
    data_iot_card: document.querySelector('[data_iot_card]'),
    data_blockchaim_card: document.querySelector('[data_blockchaim_card]'),
    data_rva_card: document.querySelector('[data_rva_card]'),

    data_date_time: document.querySelectorAll('[data_date_time]'),

    data_views_card_1: document.querySelector('[data_views_card_1]'),
    data_views_card_2: document.querySelector('[data_views_card_2]'),
    data_views_card_3: document.querySelector('[data_views_card_3]'),
    data_views_card_4: document.querySelector('[data_views_card_4]'),
};

const date_time_now = {
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
};

elements_html.data_views_card_1.innerHTML = localStorage.getItem('views_card_1') || '0';
elements_html.data_views_card_2.innerHTML = localStorage.getItem('views_card_2') || '0';
elements_html.data_views_card_3.innerHTML = localStorage.getItem('views_card_3') || '0';
elements_html.data_views_card_4.innerHTML = localStorage.getItem('views_card_4') || '0';

/*
    funções
*/
elements_html.data_date_time.forEach((card) => {
    card.innerHTML = `${date_time_now.date} ${date_time_now.time}`
});

/*
    eventos
*/
elements_html.data_all_category.addEventListener('click', () => {
    elements_html.data_cards.forEach((card) => {
        card.style.display = 'block';
    });
});

elements_html.data_ia_category.addEventListener('click', () => {
    elements_html.data_cards.forEach((card) => {
        if (card.getAttribute('data_card') === 'ia') {
            card.style.display = 'block';
        }
        else {
            card.style.display = 'none';
        };
    });
});

elements_html.data_iot_category.addEventListener('click', () => {
    elements_html.data_cards.forEach((card) => {
        if (card.getAttribute('data_card') === 'iot') {
            card.style.display = 'block';
        }
        else {
            card.style.display = 'none';
        };
    });
});

elements_html.data_blockchaim_category.addEventListener('click', () => {
    elements_html.data_cards.forEach((card) => {
        if (card.getAttribute('data_card') === 'blockchaim') {
            card.style.display = 'block';
        }
        else {
            card.style.display = 'none';
        };
    });
});

elements_html.data_rva_category.addEventListener('click', () => {
    elements_html.data_cards.forEach((card) => {
        if (card.getAttribute('data_card') === 'rva') {
            card.style.display = 'block';
        }
        else {
            card.style.display = 'none';
        }
    });
});

elements_html.data_cards.forEach((card, indice) => {
    card.addEventListener('click', () => {

        localStorage.setItem('indice', indice + 1);

        switch (indice + 1) {
            case 1:
                elements_html.data_views_card_1.innerHTML = parseInt(elements_html.data_views_card_1.innerHTML) + 1;
                localStorage.setItem('views_card_1', elements_html.data_views_card_1.innerText);
                window.location.assign('./assets/descripition/post_page.html');
                break;
            case 2:
                elements_html.data_views_card_2.innerHTML = parseInt(elements_html.data_views_card_2.innerHTML) + 1;
                localStorage.setItem('views_card_2', elements_html.data_views_card_2.innerText);
                window.location.assign('./assets/descripition/post_page.html');
                break;

            case 3:
                elements_html.data_views_card_3.innerHTML = parseInt(elements_html.data_views_card_3.innerHTML) + 1;
                localStorage.setItem('views_card_3', elements_html.data_views_card_3.innerText);
                window.location.assign('./assets/descripition/post_page.html');
                break;

            case 4:
                elements_html.data_views_card_4.innerHTML = parseInt(elements_html.data_views_card_4.innerHTML) + 1;
                localStorage.setItem('views_card_4', elements_html.data_views_card_4.innerText);
                window.location.assign('./assets/descripition/post_page.html');
                break;

            default:
                break;
        };
    });
})

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
});