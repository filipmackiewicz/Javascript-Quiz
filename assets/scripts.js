const quizData = [
    {
        question: 'Rozwinięcie skrótu HTML',
        a: 'Hype Mark Language',
        b: 'Hyper Markup Language',
        c: 'HyperTEXT Markup Language',
        d: 'HTTP Markyp Language',
        correct: 'c'
    }, {
        question: 'O czym mówi zasada DRY?',
        a: 'Nie powtarzaj się',
        b: 'Pisz kod bardzo prosto',
        c: 'Projektuj mały i zwarty interface',
        d: 'Ucz się nowych rozwiązań',
        correct: 'a'
    }, {
        question: 'Co oznacza rozwinięcie skrótu KISS',
        a: 'Keep it simple satisfying',
        b: 'Kepp it simple short',
        c: 'Keep it simple solid',
        d: 'Keep it simple stupid',
        correct: 'd'
    }, {
        question: 'Która definicja Var jest poprawna',
        a: 'Deklaruje zmienną w zasięgu bloku, wraz z opcjonalnym zainicjalizowniem wartości',
        b: 'Deklaruje zmienną o aktualnym konkteście wykonania wraz z opcjonalnym zainicjalizowaniem wartości',
        c: 'Deklaruje stałe w zasięgu bloku, ale nie można zmienić wartości tej stałej',
        d: 'Deklaruje stałe',
        correct: 'b'
    }, {
        question: 'Jaka jest różnica między flex a grid',
        a: 'Różnica w ilości wymiarów: Grid - dwuwymiarowy, Flex - jeden wymiar',
        b: 'Różnica w ilości wymiarów: Grid - jeden wymiar, Flex - dwuwymiarowy',
        c: 'Flex określa rodzaje odległości, a grid nie',
        d: 'Grid okresla rodzaje odległości, a flex nie',
        correct: 'a'
    }, {
        question: 'O czym mówi zasada Single Responsibility principle (SOLID)',
        a: 'Klasa powinna być otwarta na rozszerzenia a zamknięta na modyfikacje',
        b: 'Powinno się projektować małe i zwarte interface',
        c: 'Klasa powinna odpowiadać za jeden pojedynczy obszar, za jedno zadanie',
        d: 'W żadnej definicji funkcji i deklaracji zmiennej nie powinniśmy używać nazwy klasy tylko jej abstrakcji np: interface',
        correct: 'c'
    }, {
        question: 'HTTP',
        a: 'Szyfrowany protokół wysyłania dokumentów hipertextowych',
        b: 'Protokół wysyłania dokumentów hipertextowych',
        c: 'HTTP Markup Language',
        d: 'Zabezpieczony protokół wysyłania dokumentów hipertextowych',
        correct: 'b'
    }, {
        question: 'Jaka jest róznica między == a === (JS)',
        a: 'Podwójny znak równości przed porównaniem danych próbuje je przekonwertować do tego samego typu, a potrójny znak równości porównuje jeszcze dodatkowo zgodność typów.',
        b: 'Potrójny znak równości przed porównaniem danych próbuje je przekonwertować do tego samego typu, a podwójny znak równości porównuje jeszcze dodatkowo zgodność typów.',
        c: 'Nie ma róznicy między podwójnym a potrójnym znakiem równości',
        d: 'Podwójny znak równości przypisuje wartość do zmiennej a potrójny znak równości nadpisuje tą zmienną',
        correct: 'a'
    }, {
        question: 'Jakie typy danych oferuje JavaScript?',
        a: 'Boolean, null, integer, float, double, object',
        b: 'True, false, int, float, double, undefined',
        c: 'Boolean, null, undefined, number, string, symbol, object',
        d: 'Każda powyższa odpowiedź jest poprawna',
        correct: 'c'
    }, {
        question: 'Jaka jest różnica między zdarzeniami load i ready w jQuery?',
        a: 'Zdarzenie load jest wywoływane, jeżeli wszystkie zasoby zostaną pobrane, czyli po pobraniu również wszystkich obrazków. Natomiast zdarzenie ready jest wyzwalane już w momencie, gdy można wykonywać operacje na DOM.',
        b: 'Zdarzenie ready jest wywoływane, jeżeli wszystkie zasoby zostaną pobrane, czyli po pobraniu również wszystkich obrazków. Natomiast zdarzenie load jest wyzwalane już w momencie, gdy można wykonywać operacje na DOM.',
        c: 'Nie ma zasadniczej różnicy między tymi zdarzeniami',
        d: 'Różnica jest tylko w zapisie',
        correct: 'a'
    }, {
        question: 'Jaki będzie wynik kodu: function f(){x += 2; var x = 1; return x;} f();',
        a: '1',
        b:' 2',
        c: '4',
        d: 'undefined',
        correct: 'a'
    }
]

const quiz = document.getElementById ('quiz');
const answerEl = document.querySelectorAll ('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let answer = undefined;
let score = 0; 


loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData [currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers (){
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
    
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if(answer) {

        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Odpowiedziałeś poprawnie na ${score}/${quizData.length} pytań</h2> <button class="button" onclick="location.reload()">Od nowa!</button>`
        }
    }
})