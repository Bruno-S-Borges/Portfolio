const skills = document.querySelectorAll('.card-skills');
const descricao = document.querySelector('.texto-desc');
const sobreSkill = [
                    '<p class="titulo-desc">HTML</p> <br> <p class="texto-desc">HTML5 é uma linguagem de marcação utilizada para criar e estruturar conteúdo na web. Ele suporta mídia como vídeo e áudio nativamente e oferece novos elementos semânticos para melhorar a acessibilidade e organização do conteúdo. HTML5 é a quinta versão da linguagem HTML e é amplamente utilizada para desenvolvimento de sites e aplicativos da web.</p> <br>',
                    '<p class="titulo-desc">CSS</p> <br> <p class="texto-desc">CSS3 é uma linguagem de estilo utilizada para descrever a apresentação de documentos HTML na web. Ele permite controlar a cor, fonte, layout, animações, entre outros aspectos visuais de uma página web. CSS3 é a terceira versão do CSS e adiciona novos recursos, como media queries e transformações, para melhorar a flexibilidade e responsividade do design da web.</p> <br>',
                    '<p class="titulo-desc">JavaScript</p> <br> <p class="texto-desc">JavaScript é uma linguagem de programação interpretada e dinâmica, amplamente utilizada na web para a criação de interatividade e efeitos em páginas da web. É suportado por todos os principais navegadores e pode ser usado tanto no lado do cliente quanto no lado do servidor. Além disso, é uma das linguagens mais populares e versáteis na web.</p> <br>',
                    '<p class="titulo-desc">Bootstrap - Em Estudo</p> <br> <p class="texto-desc">Bootstrap é um framework front-end open-source que fornece uma série de componentes pré-fabricados e modelos de design para ajudar os desenvolvedores a criar sites responsivos e aplicativos web. É baseado em HTML, CSS e JavaScript e é projetado para fornecer uma aparência consistente e estilizada para seus projetos. Bootstrap é uma das opções mais populares para o desenvolvimento de sites e aplicativos web, devido a sua facilidade de uso e ampla gama de recursos.</p> <br>',
                    '<p class="titulo-desc">Jquery - Em Estudo</p> <br> <p class="texto-desc">jQuery é uma biblioteca de JavaScript que facilita o trabalho com HTML, CSS e JavaScript. Ele permite aos desenvolvedores realizar tarefas complexas de maneira mais fácil e rápida, como animações, manipulação de eventos e requisições AJAX. É amplamente utilizado em todo o mundo devido a sua facilidade de uso e grande comunidade de desenvolvedores.</p> <br>',
                    '<p class="titulo-desc">React - Em Estudo</p> <br> <p class="texto-desc">React é uma biblioteca JavaScript de código aberto desenvolvida pelo Facebook para criação de interfaces de usuário. Ele permite aos desenvolvedores construir aplicativos web de alta performance, reutilizando componentes de interface. React é uma das tecnologias de front-end mais populares, com uma grande comunidade de desenvolvedores e uma ampla gama de recursos e ferramentas disponíveis.</p> <br>',
                    '<p class="titulo-desc">Node Js - Em Estudo</p> <br> <p class="texto-desc">Node.js é uma plataforma de desenvolvimento de aplicações em tempo real baseada em JavaScript. É executado no lado do servidor e utiliza a engine JavaScript V8 do Google Chrome para executar seu código rapidamente. É amplamente utilizado para criar aplicativos web escaláveis e de alta performance, como APIs REST e real-time.</p> <br>',
                    '<p class="titulo-desc">Git</p> <br> <p class="texto-desc">Git é um sistema de controle de versão de código. Permite que equipes colaborem e mantenham registro de alterações em projetos de software. Ele é amplamente utilizado por desenvolvedores e é gratuito e de código aberto. </p> <br>',
                    '<p class="titulo-desc">Github</p> <br> <p class="texto-desc">GitHub é uma plataforma de hospedagem de projetos de software que utiliza o Git como sistema de controle de versão. Permite que desenvolvedores armazenem, compartilhem e colaborem em projetos com outros desenvolvedores em todo o mundo. É amplamente utilizado como uma plataforma de colaboração para desenvolvedores, com recursos adicionais, como gerenciamento de problemas e construção de projetos.</p> <br>'
]

skills.forEach((elemento, index) => {
    elemento.addEventListener('click', () => {
        let botao = document.querySelectorAll('.central .activo');
        botao.length != 0 ? botao[0].classList.remove("activo") : botao.length;

        descricao.innerHTML = `<p>${sobreSkill[index]} </p>`;
        elemento.classList.add("activo");
    } )
} );
