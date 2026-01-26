// ============ SISTEMA DE MENU ============
const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");

if (menuIcon && menu) {
    menuIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
            menu.classList.remove("active");
            menuIcon.classList.remove("active");
        }
    });
}

// ============ MOTOR DE ALQUIMIA DO TEMPO ============
const Engine = {
    data: {
        0: { verso: "No princípio era o vazio, e o vazio era potencial.", autor: "Anónimo", psic: "Inconsciente Coletivo: O útero de todas as ideias.", ciencia: "Singularidade: O ponto anterior ao Big Bang.", pedag: "Ensina a importância da pausa e do silêncio." },
        1: { verso: "Sou o capitão da minha alma.", autor: "William Henley", psic: "Arquétipo do Herói: O início da individuação.", ciencia: "O Átomo: A unidade fundamental da matéria.", pedag: "Ensina a autonomia e o valor do ponto de origem." },
        2: { verso: "A vida é a arte do encontro.", autor: "Vinícius de Moraes", psic: "Anima/Animus: A busca pelo equilíbrio dos opostos.", ciencia: "Binário: A base de toda a lógica computacional.", pedag: "Ensina a diplomacia e a cooperação." },
        3: { verso: "Tudo vale a pena se a alma não é pequena.", autor: "Fernando Pessoa", psic: "A Trindade: O nascimento da criatividade.", ciencia: "Geometria: O triângulo como a primeira forma estável.", pedag: "Ensina a expressão e a expansão da comunicação." },
        4: { verso: "A ordem é o prazer da razão.", autor: "Paul Claudel", psic: "A Sombra: A necessidade de estrutura para conter o caos.", ciencia: "Quaternário: Os 4 estados da matéria.", pedag: "Ensina a disciplina, o trabalho e as raízes sólidas." },
        5: { verso: "Navegar é preciso; viver não é preciso.", autor: "Pessoa", psic: "Puer Aeternus: O espírito livre que busca a mudança.", ciencia: "Entropia: A tendência natural para a desordem.", pedag: "Ensina a adaptação e a liberdade pela experiência." },
        6: { verso: "A beleza salvará o mundo.", autor: "Dostoievski", psic: "O Amante: A harmonia do lar e a estética.", ciencia: "Carbono: A base da vida orgânica (6 ligações).", pedag: "Ensina o serviço comunitário e o amor." },
        7: { verso: "Penso, logo existo.", autor: "Descartes", psic: "O Sábio: A introspeção e o mistério do inconsciente.", ciencia: "Espectro: As 7 cores da luz e oitavas musicais.", pedag: "Ensina o estudo profundo e a análise científica." },
        8: { verso: "O homem é a medida de todas as coisas.", autor: "Protágoras", psic: "O Governante: O poder material em equilíbrio.", ciencia: "Infinito: O 8 deitado, o ciclo eterno de energia.", pedag: "Ensina a justiça, a colheita e a autoridade ética." },
        9: { verso: "O fim de uma viagem é apenas o começo de outra.", autor: "Saramago", psic: "O Velho Sábio: A conclusão de ciclos.", ciencia: "Gestação: O ciclo de 9 meses da criação humana.", pedag: "Ensina o desapego e a fraternidade universal." },
        11: { verso: "A intuição é a inteligência que não precisa de palavras.", autor: "Bergson", psic: "Mestre Intuitivo: Ponte entre o visível e invisível.", ciencia: "Dualidade Onda-Partícula: O comportamento quântico.", pedag: "Número Mestre: Ensina a iluminação e o idealismo." },
        22: { verso: "Nada é impossível para uma mente determinada.", autor: "Arquimedes", psic: "O Arquiteto Mundial: Materializar sonhos utópicos.", ciencia: "A Teoria de Tudo: A unificação das leis físicas.", pedag: "Número Mestre: Ensina a construção de legados." }
    },

    gramatica: {
        sujeitos: ["A luz", "O destino", "A partícula", "O silêncio", "A sintaxe"],
        verbos: ["sincroniza", "transforma", "desperta", "projeta", "ilumina"],
        complementos: ["o agora.", "a realidade.", "o inconsciente.", "o infinito."]
    },

    reduzir(n) {
        if (n === 11 || n === 22) return n;
        if (n === 0) return 0;
        let s = n.toString().split('').reduce((a, b) => +a + +b, 0);
        return s > 9 ? this.reduzir(s) : s;
    },

    update() {
        const agora = new Date();
        const h = agora.getHours();
        const m = agora.getMinutes();
        const s = agora.getSeconds();

        // Cálculo da Frequência
        const vibra = this.reduzir(h + m);
        const content = this.data[vibra] || this.data[this.reduzir(vibra)];

        // Digital Clock
        const digital = document.getElementById('digital-clock');
        if (digital) digital.textContent = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        
        // Atualização de Conteúdo (Check de segurança para evitar Uncaught Error)
        const vTag = document.getElementById('vibration-tag');
        const vVerse = document.getElementById('poetic-verse');
        const vAuthor = document.getElementById('author');
        const vScience = document.getElementById('science-text');
        const vGrammar = document.getElementById('grammar-text');
        const vPedag = document.getElementById('pedagogy-text');

        if(vTag) vTag.textContent = `Frequência Ativa: ${vibra}`;
        if(vVerse) vVerse.textContent = `"${content.verso}"`;
        if(vAuthor) vAuthor.textContent = `— ${content.autor}`;
        if(vScience) vScience.textContent = `${content.psic} | ${content.ciencia}`;
        if(vPedag) vPedag.textContent = content.pedag;

        // Gramática
        if(vGrammar) {
            const frase = `${this.gramatica.sujeitos[h % 5]} ${this.gramatica.verbos[m % 5]} ${this.gramatica.complementos[s % 4]}`;
            vGrammar.textContent = frase;
        }

        // --- ROTAÇÃO DOS RELÓGIOS (Ajuste para IDs Corretos) ---
        const hDeg = (h % 12 * 30) + (m * 0.5);
        const mDeg = (m * 6);
        const sDeg = (s * 6);

        const hands = {
            'h-left': hDeg, 'h-right': hDeg,
            'm-left': mDeg, 'm-right': mDeg
        };

        for (let id in hands) {
            const el = document.getElementById(id);
            if (el) el.style.transform = `rotate(${hands[id]}deg)`;
        }

        // Chamar o próximo frame mantendo o contexto do Engine
        requestAnimationFrame(() => this.update());
    }
};

// Iniciar
Engine.update();