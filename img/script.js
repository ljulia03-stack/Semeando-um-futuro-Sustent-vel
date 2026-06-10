<script>
    // 1. Rolagem suave para os links do menu de navegação
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o salto brusco padrão
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Animação simples de surgimento (Fade-in) ao rolar a página
    // Configura os elementos que vão aparecer
    const secoes = document.querySelectorAll('section, .card');

    const animarAoRolar = () => {
        const alturaGatilho = window.innerHeight * 0.85; // Dispara a animação quando o item atinge 85% da tela

        secoes.forEach(secao => {
            const topoSecao = secao.getBoundingClientRect().top;

            if (topoSecao < alturaGatilho) {
                secao.style.opacity = '1';
                secao.style.transform = 'translateY(0)';
                secao.style.transition = 'all 0.6s ease-out';
            }
        });
    };

    // Aplica o estado inicial (escondido) nos elementos antes de rolar
    secoes.forEach(secao => {
        secao.style.opacity = '0';
        secao.style.transform = 'translateY(20px)';
    });

    // Executa uma vez no início e depois monitora o scroll da página
    window.addEventListener('load', animarAoRolar);
    window.addEventListener('scroll', animarAoRolar);
</script>
