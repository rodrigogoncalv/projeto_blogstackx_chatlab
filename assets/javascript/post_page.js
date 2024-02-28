const elements_html = {
    data_date_time: document.querySelector('[data_date_time]'),
    data_category: document.querySelector('[data_category]'),
    data_views: document.querySelector('[data_views]'),
    data_img: document.querySelector('[data_img]'),
    data_title: document.querySelector('[data_title]'),
    data_text: document.querySelector('[data_text]'),
};

const views_local_storage = {
    views_card_1: localStorage.getItem('views_card_1') || '0',
    views_card_2: localStorage.getItem('views_card_2') || '0',
    views_card_3: localStorage.getItem('views_card_3') || '0',
    views_card_4: localStorage.getItem('views_card_4') || '0',
};

const date_time_now = {
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
};

const indice_local_storage = {
    indice_post: localStorage.getItem('indice') || '0',
};

switch (indice_local_storage.indice_post) {
    case '1':
        elements_html.data_title.innerHTML = 'Inteligência artificial';
        elements_html.data_date_time.innerHTML = `${date_time_now.date} ${date_time_now.time}`;
        elements_html.data_category.innerHTML = 'Inteligência artificial';
        elements_html.data_views.innerHTML = views_local_storage.views_card_1;
        elements_html.data_img.setAttribute('src', '../image/ia.jpeg');
        elements_html.data_text.innerHTML = 'A inteligência artificial é uma tecnologia que permite a máquinas aprenderem com dados e experiências para realizar tarefas que antes exigiam a intervenção humana.<br> Ela já está presente em diversas áreas, como chatbots de atendimento ao cliente e carros autônomos, e tem um potencial enorme para reduzir custos e aumentar a eficiência em empresas e organizações.';
        break;

    case '2':
        elements_html.data_title.innerHTML = 'Internet das Coisas';
        elements_html.data_date_time.innerHTML = `${date_time_now.date} ${date_time_now.time}`;
        elements_html.data_category.innerHTML = 'Internet das Coisas';
        elements_html.data_views.innerHTML = views_local_storage.views_card_2;
        elements_html.data_img.setAttribute('src', '../image/iot.jpeg');
        elements_html.data_text.innerHTML = 'A Internet das Coisas (IoT) permite que objetos do        cotidiano se conectem à internet e compartilhem dados entre        si. <br>Isso inclui desde geladeiras que fazem compras sozinhas        até sensores em equipamentos industriais que informam        quando precisam de manutenção. Com a IoT, é possível        monitorar e controlar diversos aspectos da vida, do consumo        de energia à segurança pública.';
        break;

    case '3':
        elements_html.data_title.innerHTML = 'Blockchaim';
        elements_html.data_date_time.innerHTML = `${date_time_now.date} ${date_time_now.time}`;
        elements_html.data_category.innerHTML = 'Blockchaim';
        elements_html.data_views.innerHTML = views_local_storage.views_card_3;
        elements_html.data_img.setAttribute('src', '../image/blockchain.jpeg');
        elements_html.data_text.innerHTML = `O blockchain é uma tecnologia que permite o armazenamento
        de dados em blocos interligados e criptografados. Esses
        blocos formam uma cadeia, onde cada bloco é verificado e
        validado antes de ser adicionado à rede.<br>
        O blockchain tem
        um potencial enorme para a segurança de dados, permitindo a
        criação de sistemas descentralizados e transparentes, como
        o Bitcoin.`;
        break;

    case '4':
        elements_html.data_title.innerHTML = 'Realidade Virtual e Aumentada';
        elements_html.data_date_time.innerHTML = `${date_time_now.date} ${date_time_now.time}`;
        elements_html.data_category.innerHTML = 'Realidade Virtual e Aumentada';
        elements_html.data_views.innerHTML = views_local_storage.views_card_4;
        elements_html.data_img.setAttribute('src', '../image/rav.jpg');
        elements_html.data_text.innerHTML = `A Realidade Virtual (RV) e Aumentada (RA) permitem a
        criação de ambientes virtuais e a sobreposição de elementos
        virtuais em ambientes reais.<br> 
        <br>Isso tem implicações em
        diversas áreas, como o treinamento de profissionais em
        atividades de risco, o desenvolvimento de projetos de
        arquitetura e a criação de experiências imersivas em jogos
        e mídias. <br>
        <br>Estas são apenas algumas das tendências que estão
        transformando o mundo através da tecnologia. Com inovações
        cada vez mais velozes, pode-se esperar que a tecnologia
        continue a mudar nossas vidas num futuro próximo.`;
        break;

    default:
        break;
};
