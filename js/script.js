const projetos = {
    1: {
        titulo: "Ciência, Clima e Ambiente: compartilhando saberes e boas práticas",
        coordenador: "ELIANE BARBOSA SANTOS",
        centro: "CCT - Centro de Ciência e Tecnologia",
        area: "Meio Ambiente",
        descricao: `<p>A presente proposta tem como justificativa evidenciar um resultado, que foi percebida desde anteriores projetos com a coleta seletiva executada no Campus da UENF.</p>
        
        <p>O projeto visa promover a conscientização sobre as mudanças climáticas e práticas sustentáveis através de atividades educativas e workshops para a comunidade. Serão realizadas parcerias com escolas locais para implementar programas de reciclagem e compostagem, além de eventos abertos ao público para discussão de temas ambientais.</p>
        
        <p>O projeto também inclui a produção de material educativo digital e físico para amplo alcance, com foco na sensibilização para a importância da preservação ambiental e adoção de práticas sustentáveis no dia a dia.</p>
        
        <p>Entre as atividades planejadas estão: palestras com especialistas, oficinas de reciclagem, mutirões de limpeza, e a criação de uma horta comunitária como espaço educativo.</p>`
    },
    2: {
        titulo: "Rede de Economia Solidária do Norte Fluminense",
        coordenador: "Gustavo de Castro Xavier",
        centro: "CCT - Centro de Ciência e Tecnologia",
        area: "Economia Solidária",
        descricao: `<p>O projeto está ligado ao Programa de Extensão Incubadora Tecnológica de Empreendimentos Populares ITEP/UENF, conforme Resolução CONSUNI 001/2009.</p>
        
        <p>Tem como objetivo fomentar a economia solidária na região norte fluminense através do apoio a empreendimentos coletivos e cooperativas. As atividades incluem capacitação em gestão, assessoria técnica para produção e comercialização, além de feiras regulares para exposição dos produtos.</p>
        
        <p>O projeto busca fortalecer as redes de cooperação entre os empreendimentos e criar canais de comercialização justos e sustentáveis, promovendo o desenvolvimento local e a geração de renda para comunidades em situação de vulnerabilidade social.</p>
        
        <p>Entre os resultados esperados estão: a formalização de pelo menos 10 empreendimentos econômicos solidários, a realização de 4 feiras regionais anuais, e a criação de um marketplace digital para comercialização dos produtos.</p>`
    }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const conteudo = document.getElementById("conteudo");

if (projetos[id]) {
    const projeto = projetos[id];
    conteudo.innerHTML = `
        <h1 class="projeto-titulo">${projeto.titulo}</h1>
        
        <div class="projeto-info">
            <div class="info-item">
                <span class="info-label">Coordenador:</span>
                <span class="info-value">${projeto.coordenador}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Centro:</span>
                <span class="info-value">${projeto.centro}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Área Temática:</span>
                <span class="info-value">${projeto.area}</span>
            </div>
        </div>
        
        <div class="projeto-descricao">
            ${projeto.descricao}
        </div>
        
        <a href="index.html" class="btn-voltar">← Voltar para a Vitrine de Extensão</a>
    `;
} else {
    conteudo.innerHTML = `
        <h1 class="projeto-titulo">Projeto não encontrado</h1>
        <p>O projeto solicitado não foi encontrado em nossa base de dados.</p>
        <a href="index.html" class="btn-voltar">← Voltar para a Vitrine de Extensão</a>
    `;
}
