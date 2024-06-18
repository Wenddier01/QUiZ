function checkAnswer(answer) {
    const correctAnswer = getCorrectAnswer();
    if (answer === correctAnswer) {
        // Resposta correta
        const nextPageNumber = getCurrentPageNumber() + 1;
        const nextPageUrl = `Questao${nextPageNumber}.html`;
        if (nextPageNumber <= 6) {
            window.location.href = nextPageUrl;
        } else {
            window.location.href = "Ganhou.html";
        }
    } else {
        // Resposta incorreta
        window.location.href = "Menu.html";
    }
}

function getCorrectAnswer() {
    // Função de exemplo para retornar a resposta correta
    return "CERTO";
}

function getCurrentPageNumber() {
    // Obtém o número da página atual a partir do URL
    const currentPageUrl = window.location.href;
    const pageNumberMatch = currentPageUrl.match(/Questao(\d+)\.html/);
    if (pageNumberMatch) {
        return parseInt(pageNumberMatch[1]);
    }
    return 0;
}
