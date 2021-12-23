const option1 = document.querySelector('.option1'),
    option2 = document.querySelector('.option2'),
    option3 = document.querySelector('.option3'),
    incorrectAnswer = document.querySelector('.incorrect-answer'),
    correctAnswer = document.querySelector('.correct-answer'),
    answerInfo = document.querySelector('.answer-text'),
    centerCorrectAnswer = document.querySelector('.center-correct-answer'),
    centerContent = document.querySelector('.center-content');

const optionsElements = document.querySelectorAll('.option');

const question = document.getElementById('question'),
    numderOfQuestion = document.getElementById('numder-of-question'),
    numderOfAllQuestion = document.getElementById('numder-of-all-question');


let indexOfQuestion,
    indexOfPage = 0;

const questions = [
    {
        question: 'По преданию они были посланы Богам, чтобы люди не беспокоили их по мелочам, в древности с их помощью выбирали правителя, а в медицине предсказывали будущее',
        options: [
            'Кости',
            'Кости',
            'Пирамиды',
        ],
        rightAnswer: 1,
        titelAnswer: 'Абсолютно точно!',
        answerText: 'Возраст игральных костей около 5200 лет. Изначально они имели магическое или сакральное значение. Их использовали для гадания, трактуя судьбу по выпавшим комбинациям.',
    },
    {
        question: 'У ванили сладкий утонченный аромат. А еще ваниль обладает лечебными чудодейственными свойствами. Какой из ароматов таит в себе чарующие ноты этого восхитительного и целительного ингредиента?',
        options: [
            'Indulgence',
            'Ovation',
            'Red Hot Carnaval',
        ],
        rightAnswer: 1,
        titelAnswer: 'Верно!',
        answerText: 'В составе Indulgence есть ваниль, аромат которой придает парфюму особую теплоту и чувственность. А еще ваниль оберегает нас, имея высокие антисептические свойства. Запах этой пряности способствует выработке серотонина, гормона счастья.  ',
    },
    {
        question: 'Это удивительное заповедное место посещал брат Наполеона Бонапарта еще в начале XIX века, когда туризм вошел в моду.  Какой из ароматов вдохновлен этим местом?',
        options: [
            'Sultry Jungle',
            'Niagara Breeze',
            'Savana',
        ],
        rightAnswer: 2,
        titelAnswer: 'Вот это эрудиция !',
        answerText: 'Ниагарский водопад входит в десятку самых романтических мест мира. Сюда приезжают влюбленные со всего земного шара, чтобы сделать предложение, и этому Ниагара обязана влюбленной паре... Брат Наполеона Бонапарта Джером вместе со своей невестой посетил это место в начале XIX века, положив моду романтическим турам на Ниагарские водопады. ',
    },
    {
        question: 'Предшественник этого атрибута еще в древности использовали египетские фараоны и вожди. Его изготавливали из золота, серебра, слоновой кости и украшали драгоценными камнями и резьбой. Как он называется в наши дни?',
        options: [
            'Держава ',
            'Скипетр',
            'Пирамида',
        ],
        rightAnswer: 2,
        titelAnswer: 'Точное попадание !',
        answerText: 'Действительно, скипетр – древнейший символ власти еще со времен фараонов. Первообраз скипетра — посох, заимствованный затем церковью как знак власти. Европейские государи заменили его укороченными жезлами — скипетрами.',
    },
    // {
    //     question: 'Стиль «версаль» – символ эпохи короля Людовика XIV, нашедший воплощение в роскошном убранстве Версальского дворца. Какой из флаконов стоит в одном ряду с шедеврами времен короля Людовика?',
    //     options: [
    //         'June Night ',
    //         'Ovation',
    //         'Tears of Sinner ',
    //     ],
    //     rightAnswer: 2,
    //     titelAnswer: 'Правильно !',
    //     answerText: 'В этом стиле сочетается французская классика и пышное баррокко. Изысканный декор позолотой и серебром, ослепительный блеск хрусталя и обилие шикарных цветов. Непревзойденная роскошь, достойная бурных оваций.',
    // },
    // {
    //     question: 'В имени этого аромата зашифровано название утонченного древнегреческого сосуда с двумя ручками.',
    //     options: [
    //         'Amor and Psychea',
    //         'Aphrodita',
    //         'Arcanum',
    //     ],
    //     rightAnswer: 1,
    //     titelAnswer: 'Вы наблюдательны !',
    //     answerText: 'В названии AMOR & PSYCHEA есть все буквы слова AMPHORAE (амфора) История флаконов насчитывает столько же лет, сколько и история их содержимого, самих духов. Прародителем современной емкости для духов стала древнеегипетская амфора, в которой хранили благовония и ароматические масла ',
    // },
    // {
    //     question: '<ul><li>Первые благоухающие ______ появились в Древней Индии, их основой былакорица.</li><li>Карл V использовал ________ для измерения времени.</li><li>В средние века ________стали культовым предметом и приносили большой доход монастырям.</li></ul >',
    //     options: [
    //         'Папирус',
    //         'Свеча',
    //         'Книга',
    //     ],
    //     rightAnswer: 2,
    //     titelAnswer: 'Блестяще !',
    //     answerText: 'Речь действительно идет о свечах. Первые упоминания о них датируются приблизительно 3 тысячелетием до н.э. На протяжении веков о них слагались стихи и песни, писались философские трактаты, их изображали на картинах и украшали ими интерьеры.',
    // },
    // {
    //     question: 'Угадайте аромат по ассоциациям: Колдовство, Фиалковый, Конспирация, Настроение, Приправы.',
    //     options: [
    //         'Glory for Women',
    //         'Secrecy',
    //         'Tropical Rain',
    //     ],
    //     rightAnswer: 2,
    //     titelAnswer: 'Отличный ответ !',
    //     answerText: 'В Secrecy за Колдовство отвечает ладанник, Фиалковый – это загадочный цвет флакона, Настроение – STATE OF MIND, название коллекции, в которую входит этот аромат. К Приправам относятся душистые дополнительными нотами парфюма – розмарин, тимьян и лимон. Конспирация – один из самых близких синонимов названия аромата Secrecy',
    // },
    // {
    //     question: 'Узнайте аромат по ассоциациям: Буэнавентура, бамбук, свежесть, смоква, ведро',
    //     options: [
    //         'Tropical Rain',
    //         'Poseidon',
    //         'Havana',
    //     ],
    //     rightAnswer: 1,
    //     titelAnswer: 'Точный выбор! ',
    //     answerText: 'Колумбийский Буэнавентура - самое дождливое место на Земле, Бамбук - украшает флакон аромата, Свежесть - тропического ливня говорит сама за себя, Смоква - другое название фигового дерева и инжира, одного их ингредиентов парфюма. «Льет как из Ведра» – лучшая характеристика тропического ливня.'
    // },
    // {
    //     question: 'Она бывает огромной, мировой и истинной. С этим словом поклоняются Богам и Правителям. О ней можно мечтать и купаться в ее лучах.',
    //     options: [
    //         'Power',
    //         'Glory',
    //         'Ovation',
    //     ],
    //     rightAnswer: 2,
    //     titelAnswer: 'Прямо в точку !',
    //     answerText: 'Это Слава. Власть тоже может быть огромной и о ней можно мечтать. Поклоняться можно и в рукоплесканиях. Но купаться можно только в лучах Славы.'
    // },
];

numderOfAllQuestion.innerHTML = questions.length

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question;

    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];

    incorrectAnswer.innerHTML = questions[indexOfQuestion].titelAnswer;
    answerInfo.innerHTML = questions[indexOfQuestion].answerText;

    numderOfQuestion.innerHTML = indexOfPage + 1;
    indexOfPage++;
};

let completedAnswers = [];

const randomQuestion = () => {
    let randomNumder = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false;

    if (indexOfPage == questions.length) {
        quizOver()
    } else {
        if (completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if (item == randomNumder) {
                    hitDuplicate = true;
                }
            });
            if (hitDuplicate) {
                randomQuestion();
            } else {
                indexOfQuestion = randomNumder;
                load();
            }
        };
        if (completedAnswers == 0) {
            indexOfQuestion = randomNumder;
            load();
        }
    };
};
const checkAnswerCorrect = () => {
    if (centerCorrectAnswer) {
        centerCorrectAnswer.addEventListener('click', (u) => {
            centerContent.classList.remove('non')
            centerCorrectAnswer.classList.add('non');
            randomQuestion()
        })
    }
}
const classReplacement = () => {
    centerContent.classList.add('non');
    centerCorrectAnswer.classList.remove('non');
}

const checkAnswer = el => {

    if (el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        const numderCorrect = el.target.dataset.id;
        correctAnswer.innerHTML = questions[indexOfQuestion].options[numderCorrect];

        incorrectAnswer.innerHTML = questions[indexOfQuestion].titelAnswer;
        answerInfo.innerHTML = questions[indexOfQuestion].answerText;

        classReplacement()
        checkAnswerCorrect()

    } else {
        const numderCorrect = el.target.dataset.id;
        correctAnswer.innerHTML = questions[indexOfQuestion].options[numderCorrect];

        incorrectAnswer.innerHTML = 'Не совсем так ! ';

        classReplacement()
        checkAnswerCorrect()
    }
}



for (option of optionsElements) {
    option.addEventListener('click', e => checkAnswer(e))
}

const quizOver = () => {
    console.log('Игра окончена');
};


window.addEventListener('load', () => {
    randomQuestion()
});