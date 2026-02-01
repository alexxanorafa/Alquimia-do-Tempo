// ============ PALETA DE CORES DINÂMICA (AURA) ============
const colorPalettes = {
    0: "#cfd9df", // Cinza Névoa (Vazio)
    1: "#ffdde1", // Vermelho Suave (Início/Fogo)
    2: "#e0c3fc", // Roxo Claro (Dualidade/Intuição)
    3: "#f6f36e", // Amarelo Pálido (Criatividade/Luz)
    4: "#d4fc79", // Verde Estrutura (Terra/Ordem)
    5: "#84fab0", // Turquesa (Mudança/Vento)
    6: "#fccb90", // Laranja Suave (Amor/Cuidado)
    7: "#a1c4fd", // Azul Intelectual (Mente/Céu)
    8: "#e2ebf0", // Prata (Poder/Infinito)
    9: "#fbc2eb", // Rosa Universal (Fim de Ciclo)
    11: "#ffffff", // Luz Branca
    22: "#fff1eb", // Ouro Pálido
    33: "#a8edea"  // Cristalino
};

// ============ MOTOR DE ALQUIMIA DO TEMPO (VERSÃO DEEP MIND) ============
const Engine = {
    // Banco de dados expandido com rotação de conteúdo para maior diversidade
    data: {
        0: [
            { verso: "O zero é o útero de onde nascem os números.", autor: "Pitágoras", psic: "Inconsciente Puro: O estado de latência absoluta.", ciencia: "Vácuo Quântico: Onde partículas surgem e desaparecem.", pedag: "Aprecia o silêncio; é nele que a resposta aguarda." },
            { verso: "Antes do ser, havia o possível.", autor: "Heidegger", psic: "Potencialidade: Tudo o que podes vir a ser.", ciencia: "Buraco Negro: A singularidade onde o tempo para.", pedag: "Esvazia a mente para permitir o novo." },
            { verso: "O círculo perfeito que contém o tudo e o nada.", autor: "Taoismo", psic: "O Self: A totalidade psíquica antes da divisão.", ciencia: "Energia do Ponto Zero: A vibração de fundo do universo.", pedag: "O valor do recomeço e da página em branco." }
        ],
        1: [
            { verso: "Eu sou o mestre do meu destino.", autor: "Invictus", psic: "O Ego: A consciência do 'Eu' separado do mundo.", ciencia: "Big Bang: O instante t=0 da expansão cósmica.", pedag: "Foca na tua identidade e na iniciativa pessoal." },
            { verso: "A jornada de mil milhas começa com um passo.", autor: "Lao Tsé", psic: "Individuação: O processo de se tornar único.", ciencia: "O Átomo de Hidrogénio: O elemento primordial.", pedag: "Liderança não é comandar, é dar o primeiro passo." },
            { verso: "A solidão é o preço da originalidade.", autor: "Tesla", psic: "O Pioneiro: A coragem de caminhar sozinho.", ciencia: "Vetor: Uma força com direção e sentido únicos.", pedag: "Confia na tua visão, mesmo que ninguém a veja." }
        ],
        2: [
            { verso: "Nenhum homem é uma ilha.", autor: "John Donne", psic: "A Sombra: Reconhecer o outro é reconhecer-se.", ciencia: "Emaranhamento Quântico: Partículas ligadas à distância.", pedag: "Aprende a arte da diplomacia e da escuta ativa." },
            { verso: "A vida é a arte do encontro.", autor: "Vinícius", psic: "Anima/Animus: O equilíbrio das polaridades internas.", ciencia: "Dualidade Onda-Partícula: A luz é matéria e energia.", pedag: "Cooperação supera a competição nesta frequência." },
            { verso: "Onde há dois, há o reflexo da verdade.", autor: "Borges", psic: "Empatia: Sentir o que não é seu.", ciencia: "Binário: 0 e 1, a base de toda a informação digital.", pedag: "Paciência; o ritmo agora é de gestação e parceria." }
        ],
        3: [
            { verso: "A imaginação é mais importante que o conhecimento.", autor: "Einstein", psic: "A Criança Interior: O desejo lúdico de criar.", ciencia: "Geometria: O triângulo, a primeira forma estável.", pedag: "Expressa a tua verdade através da voz ou da arte." },
            { verso: "Cria o teu próprio caminho.", autor: "Emerson", psic: "Extroversão: A energia psíquica flui para fora.", ciencia: "Espectro Visível: A trindade de cores primárias (RGB).", pedag: "Comunicação é a chave; não guardes as ideias." },
            { verso: "A alegria é a prova dos nove.", autor: "Oswald de Andrade", psic: "Otimismo: A cura através do riso e da leveza.", ciencia: "Síntese Química: Dois reagentes criam um novo produto.", pedag: "Socializa e expande a tua rede de contatos." }
        ],
        4: [
            { verso: "A ordem é o prazer da razão.", autor: "Paul Claudel", psic: "O Construtor: A necessidade de segurança e limites.", ciencia: "As 4 Forças: Gravidade, Eletromagnetismo, Forte, Fraca.", pedag: "Disciplina e trabalho duro constroem legados." },
            { verso: "A natureza não dá saltos.", autor: "Leibniz", psic: "O Realista: Pés no chão para sustentar o sonho.", ciencia: "Cristalografia: A estrutura atómica rígida e organizada.", pedag: "Organiza o teu espaço físico para organizar a mente." },
            { verso: "A persistência é o caminho do êxito.", autor: "Chaplin", psic: "Resiliência: A capacidade de suportar pressão.", ciencia: "Matéria: Os 4 estados (Sólido, Líquido, Gasoso, Plasma).", pedag: "Honra os teus compromissos e as tuas raízes." }
        ],
        5: [
            { verso: "Mudar é a única constante.", autor: "Heráclito", psic: "O Explorador: A busca por liberdade e novidade.", ciencia: "Entropia: A tendência do universo para a desordem/movimento.", pedag: "Adapta-te. A rigidez quebra, a flexibilidade enverga." },
            { verso: "Navegar é preciso, viver não é preciso.", autor: "Pessoa", psic: "O Rebelde: Quebrar padrões para evoluir.", ciencia: "Os 5 Sentidos: A interface biológica com a realidade.", pedag: "Experimenta algo novo hoje; sai da rotina." },
            { verso: "A liberdade é a oxigenação da alma.", autor: "Sartre", psic: "Curiosidade: O motor da aprendizagem.", ciencia: "Cinética: A energia do movimento e da velocidade.", pedag: "Aceita o caos temporário como parte da mudança." }
        ],
        6: [
            { verso: "A beleza salvará o mundo.", autor: "Dostoievski", psic: "O Cuidador: A responsabilidade pelo bem-estar alheio.", ciencia: "Carbono-12: A base da vida orgânica (6 protões/neutrões).", pedag: "Foca na família, no lar e na harmonia estética." },
            { verso: "O amor é a força mais subtil.", autor: "Gandhi", psic: "Harmonia: A busca pelo equilíbrio ideal.", ciencia: "Simetria Hexagonal: A eficiência perfeita do favo de mel.", pedag: "Serve a tua comunidade; o amor é ação." },
            { verso: "Ame o teu vizinho como a ti mesmo.", autor: "Texto Sagrado", psic: "O Mártir: O sacrifício pelo coletivo.", ciencia: "Homeostase: O equilíbrio dinâmico dos sistemas vivos.", pedag: "Cura através do afeto e da responsabilidade." }
        ],
        7: [
            { verso: "Conhece-te a ti mesmo.", autor: "Sócrates", psic: "O Sábio: A introspeção e a análise profunda.", ciencia: "O Espectro da Luz: As 7 cores da refração.", pedag: "Estuda, investiga e questiona a superfície das coisas." },
            { verso: "O essencial é invisível aos olhos.", autor: "Saint-Exupéry", psic: "O Eremita: O isolamento necessário para a clareza.", ciencia: "Neurociência: O processamento abstrato do cérebro.", pedag: "Procura o silêncio para ouvir a tua intuição." },
            { verso: "A dúvida é o princípio da sabedoria.", autor: "Descartes", psic: "O Analítico: A mente que disseca para entender.", ciencia: "Música das Esferas: As 7 notas da escala diatónica.", pedag: "Especializa-te. Aprofunda um conhecimento técnico." }
        ],
        8: [
            { verso: "O homem é a medida de todas as coisas.", autor: "Protágoras", psic: "O Governante: Ambição, poder e realização material.", ciencia: "Infinito (∞): O ciclo eterno de conservação de energia.", pedag: "Gere os teus recursos com justiça e ética." },
            { verso: "A cada ação corresponde uma reação.", autor: "Newton", psic: "O Juiz: A lei de causa e efeito na psique.", ciencia: "Termodinâmica: A gestão de energia em sistemas fechados.", pedag: "Colhes o que plantas; assume a responsabilidade total." },
            { verso: "O poder sem justiça é tirania.", autor: "Sêneca", psic: "Autorrealização: O sucesso externo como espelho do interno.", ciencia: "Fractais: Padrões complexos que se repetem infinitamente.", pedag: "Materializa os teus sonhos; sê prático e eficiente." }
        ],
        9: [
            { verso: "Nada se perde, tudo se transforma.", autor: "Lavoisier", psic: "O Filantropo: O amor universal e o desapego.", ciencia: "Horizonte de Eventos: O limite onde o tempo se dobra.", pedag: "Termina o que começaste; prepara-te para o novo ciclo." },
            { verso: "Somos poeira de estrelas.", autor: "Sagan", psic: "O Velho Sábio: A compilação de toda a experiência.", ciencia: "Gestação Universal: O 9 é o número que retorna a si mesmo.", pedag: "Perdoa e liberta. O passado já não existe." },
            { verso: "O fim é apenas um novo começo.", autor: "Saramago", psic: "Transcendência: Ir além do ego.", ciencia: "Supernova: A explosão final que semeia o universo.", pedag: "Ensina os outros com a tua sabedoria adquirida." }
        ],
        11: [
            { verso: "A intuição é uma faculdade sagrada.", autor: "Einstein", psic: "O Visionário: Acesso direto ao inconsciente coletivo.", ciencia: "Taquaterion: Partículas teóricas mais rápidas que a luz.", pedag: "Sê um canal de inspiração; eleva a frequência do ambiente." }
        ],
        22: [
            { verso: "Sonhar grande e sonhar pequeno dá o mesmo trabalho.", autor: "Lemann", psic: "O Arquiteto Mestre: Construir estruturas para o futuro.", ciencia: "Teoria de Tudo: A unificação da física quântica e relatividade.", pedag: "Tens o poder de materializar o impossível em grande escala." }
        ],
        33: [
            { verso: "O amor é a única resposta sã.", autor: "Pearl S. Buck", psic: "O Avatar: Amor incondicional e consciência crística.", ciencia: "Ressonância Schumann: O batimento cardíaco da Terra.", pedag: "Guia pelo exemplo; sê o porto seguro para os outros." }
        ]
    },

    // Algoritmo Gramatical 4D: Sujeito + Ação + Modificador + Objeto
    gramatica: {
        sujeitos: [
            "A consciência", "O algoritmo", "A partícula", "O silêncio", "A sintaxe", 
            "O tempo", "A frequência", "O cosmos", "A memória", "O éter",
            "A gravidade", "O paradoxo", "A intuição", "O observador"
        ],
        verbos: [
            "sincroniza", "transforma", "desperta", "projeta", "ilumina", 
            "transcende", "codifica", "ecoa", "dissolve", "tece",
            "revela", "magnetiza", "fractaliza", "ancora", "orbita"
        ],
        modificadores: [
            "silenciosamente", "no caos", "pela eternidade", "subitamente", 
            "em harmonia", "matematicamente", "profundamente", "sem esforço",
            "no vácuo", "através da luz", "ciclicamente", "quanticamente"
        ],
        objetos: [
            "o agora.", "a realidade.", "o inconsciente.", "o infinito.", 
            "a alma.", "o padrão.", "a essência.", "o destino.", 
            "a matriz.", "o horizonte.", "a verdade.", "a estrutura."
        ]
    },

    reduzir(n) {
        if (n === 11 || n === 22 || n === 33) return n;
        if (n === 0) return 0;
        let s = n.toString().split('').reduce((a, b) => +a + +b, 0);
        return s > 9 && s !== 11 && s !== 22 && s !== 33 ? this.reduzir(s) : s;
    },

    // Garante que o objeto data existe, senão usa fallback
    getContent(vibra, h, m) {
        // Fallback simples se os dados não estiverem completos no copy-paste
        if (!this.data[vibra]) return { verso: "O universo observa.", autor: "Desconhecido", psic: "Mistério", ciencia: "Dados ocultos", pedag: "Observe." };
        
        const opcoes = this.data[vibra] || this.data[this.reduzir(vibra)];
        if (Array.isArray(opcoes)) {
            return opcoes[(h + m) % opcoes.length];
        }
        return opcoes;
    },

    // Atualiza a cor de fundo baseado na vibração
    updateAtmosphere(vibra) {
        const color = colorPalettes[vibra] || colorPalettes[this.reduzir(vibra)] || "#f8f1f8";
        document.documentElement.style.setProperty('--dynamic-bg', color);
    },

    update() {
        let h, m, s;

        if (this.manualMode) {
            h = this.manualTime.h;
            m = this.manualTime.m;
            s = 0; // No modo manual, segundos travados em 0 ou aleatórios
        } else {
            const agora = new Date();
            h = agora.getHours();
            m = agora.getMinutes();
            s = agora.getSeconds();
        }

        // --- LÓGICA ---
        let vibra = this.reduzir(h + m);
        
        // Verifica Sincronicidade
        const isMirror = (h === m); 
        let tagText = `Frequência Ativa: ${vibra}`;
        if (isMirror) tagText = `✨ Portal Aberto: ${h}:${m} ✨`;

        let content = this.getContent(vibra, h, m);
        this.updateAtmosphere(vibra);

        // --- DOM ---
        const digital = document.getElementById('digital-clock');
        // Formatação visual hh:mm:ss
        if (digital) digital.textContent = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}${this.manualMode ? '' : ':' + s.toString().padStart(2, '0')}`;
        
        // Se estiver em modo manual, muda a cor do texto do relógio para indicar "Simulação"
        if(digital) digital.style.color = this.manualMode ? "var(--secondary)" : "var(--primary)";

        const vTag = document.getElementById('vibration-tag');
        const vVerse = document.getElementById('poetic-verse');
        const vAuthor = document.getElementById('author');
        const vScience = document.getElementById('science-text');
        const vGrammar = document.getElementById('grammar-text');
        const vPedag = document.getElementById('pedagogy-text');

        if(vTag) {
            vTag.textContent = tagText;
            vTag.style.background = isMirror ? "linear-gradient(45deg, var(--primary), var(--secondary))" : "var(--primary)";
        } 

        if (content) {
            if(vVerse) vVerse.textContent = `"${content.verso}"`;
            if(vAuthor) vAuthor.textContent = `— ${content.autor}`;
            if(vScience) vScience.innerHTML = `<strong>Ψ:</strong> ${content.psic}<br><strong>⚛:</strong> ${content.ciencia}`;
            if(vPedag) vPedag.textContent = content.pedag;
        }

        // Gramática (só roda se NÃO for modo manual ou a cada 6s no modo auto)
        if(vGrammar && (this.manualMode || s % 6 === 0)) {
            // Em modo manual, usamos h+m como seed estático. Em auto, usamos s para variar.
            const seed = this.manualMode ? 1 : s; 
            const i1 = (h + seed) % this.gramatica.sujeitos.length;
            const i2 = (m + seed) % this.gramatica.verbos.length;
            const i3 = (h + m + seed) % this.gramatica.modificadores.length;
            const i4 = (h + m) % this.gramatica.objetos.length;

            const frase = `${this.gramatica.sujeitos[i1]} ${this.gramatica.verbos[i2]} ${this.gramatica.modificadores[i3]} ${this.gramatica.objetos[i4]}`;
            vGrammar.textContent = frase;
        }

        // Relógios Analógicos
        const hDeg = (h % 12 * 30) + (m * 0.5);
        const mDeg = (m * 6);
        const hands = { 'h-left': hDeg, 'h-right': hDeg, 'm-left': mDeg, 'm-right': mDeg };

        for (let id in hands) {
            const el = document.getElementById(id);
            if (el) el.style.transform = `rotate(${hands[id]}deg)`;
        }

        requestAnimationFrame(() => this.update());
    }
};

// Event Listeners para Viagem no Tempo
const timeInput = document.getElementById("time-travel");
const resetClock = document.getElementById("reset-clock");

if(timeInput) {
    timeInput.addEventListener("input", (e) => {
        const [h, m] = e.target.value.split(':');
        Engine.manualMode = true;
        Engine.manualTime = { h: parseInt(h), m: parseInt(m) };
    });
}

if(resetClock) {
    resetClock.addEventListener("click", (e) => {
        e.preventDefault();
        Engine.manualMode = false;
        if(timeInput) timeInput.value = "";
    });
}

// Inicializa
Engine.update();