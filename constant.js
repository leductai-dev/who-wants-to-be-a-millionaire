const _script = {
    userAlready: `- Người chơi đã sẵn sàng!#- Chúng ta bắt đầu đi tìm 'Ai là triệu phú'.`,
    introducePart1: `- Có tất cả 15 câu trong một chương trình, và có 3 mốc quan trọng chúng tôi luôn muốn người chơi vượt qua là 5, 10, 15.#- Bạn có 3 sự trợ giúp là:#+ 50 - 50#+ Gọi điện thoại cho người thân#+ Hỏi ý kiến khán giả trong trường quay#- Bạn đã nắm rõ luật chơi chứ?`,
    introducePart2: `- Bạn đã vượt qua 5 câu hỏi đầu tiên của chúng tôi rất nhanh và trả lời đúng cả 5 câu hiện nay bạn đã chắc chắn có 2.000.000$ tiền thưởng.#- Nếu trả lời đúng ở câu số 6, bạn sẽ một phần thưởng trị giá 3.0000.000$. Và bắt đầu từ câu số 6, bạn có thêm một sự trợ giúp thứ tư là 'Tư vấn tại chỗ'.`,
    stopGame: (questionNumber) => {
        return `- Rất tiếc khi bạn phải dừng cuộc chơi. Bạn đã rất xuất sắc khi vượt qua ${
            questionNumber - 1
        } câu hỏi của chương trình. Bạn sẽ ra về với tấm set trị giá 1.000.000$ đồng. Chúc bạn luôn may mắn trong cuộc sống!`;
    },
    playAgain: `- Chơi lại?`,
};
const QandA = {
    1: {
        question: 'Câu 1: Có câu thành ngữ: "Đầu voi đuôi ..." gì? ',
        answers: [
            {
                text: "A: Cá đuối",
                id: "1",
            },
            {
                text: "B: Gà mái",
                id: "2",
            },
            {
                text: "C: Chuột.",
                id: "3",
            },
            {
                text: "D: Chuồn chuồn",
                id: "4",
            },
        ],
        correctID: 3,
        sound: "Sound/question-sound/qs1.mp3",
    },
    2: {
        question: "Câu 2: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: "1",
            },
            {
                text: "B: Ninh Bình",
                id: "2",
            },
            {
                text: "C: Bắc Ninh ",
                id: "3",
            },
            {
                text: "D: Bình Dương.",
                id: "4",
            },
        ],
        correctID: 2,
        sound: "Sound/question-sound/qs2.mp3",
    },
    3: {
        question: "Câu 3: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: "1",
            },
            {
                text: "B: Ninh Bình",
                id: "2",
            },
            {
                text: "C: Bắc Ninh ",
                id: "3",
            },
            {
                text: "D: Bình Dương.",
                id: "4",
            },
        ],
        correctID: 3,
        sound: "Sound/question-sound/qs3.mp3",
    },
    4: {
        question: "Câu 4: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: "1",
            },
            {
                text: "B: Ninh Bình",
                id: "2",
            },
            {
                text: "C: Bắc Ninh ",
                id: "3",
            },
            {
                text: "D: Bình Dương.",
                id: "4",
            },
        ],
        correctID: 4,
        sound: "Sound/question-sound/qs4.mp3",
    },
    5: {
        question: "Câu 5: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: "1",
            },
            {
                text: "B: Ninh Bình",
                id: "2",
            },
            {
                text: "C: Bắc Ninh ",
                id: "3",
            },
            {
                text: "D: Bình Dương.",
                id: "4",
            },
        ],
        correctID: 1,
        sound: "Sound/question-sound/qs5.mp3",
    },
    6: {
        question: "Câu 6: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: "1",
            },
            {
                text: "B: Ninh Bình",
                id: "2",
            },
            {
                text: "C: Bắc Ninh ",
                id: "3",
            },
            {
                text: "D: Bình Dương.",
                id: "4",
            },
        ],
        correctID: 2,
        sound: "Sound/question-sound/qs6.mp3",
    },
    7: {
        question: "Câu 7: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: "1",
            },
            {
                text: "B: Ninh Bình",
                id: "2",
            },
            {
                text: "C: Bắc Ninh ",
                id: "3",
            },
            {
                text: "D: Bình Dương.",
                id: "4",
            },
        ],
        correctID: 3,
        sound: "Sound/question-sound/qs7.mp3",
    },
    8: {
        question: "Câu 8: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: "1",
            },
            {
                text: "B: Ninh Bình",
                id: "2",
            },
            {
                text: "C: Bắc Ninh ",
                id: "3",
            },
            {
                text: "D: Bình Dương.",
                id: "4",
            },
        ],
        correctID: 4,
        sound: "Sound/question-sound/qs7.mp3",
    },
    9: {
        question: "Câu 9: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: "1",
            },
            {
                text: "B: Ninh Bình",
                id: "2",
            },
            {
                text: "C: Bắc Ninh ",
                id: "3",
            },
            {
                text: "D: Bình Dương.",
                id: "4",
            },
        ],
        correctID: 1,
        sound: "Sound/question-sound/qs7.mp3",
    },
    10: {
        question: "Câu 10: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: "1",
            },
            {
                text: "B: Ninh Bình",
                id: "2",
            },
            {
                text: "C: Bắc Ninh ",
                id: "3",
            },
            {
                text: "D: Bình Dương.",
                id: "4",
            },
        ],
        correctID: 2,
        sound: "Sound/question-sound/qs7.mp3",
    },
    11: {
        question: "Câu 11: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: "1",
            },
            {
                text: "B: Ninh Bình",
                id: "2",
            },
            {
                text: "C: Bắc Ninh ",
                id: "3",
            },
            {
                text: "D: Bình Dương.",
                id: "4",
            },
        ],
        correctID: 3,
        sound: "Sound/question-sound/qs7.mp3",
    },
    12: {
        question: "Câu 12: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: "1",
            },
            {
                text: "B: Ninh Bình",
                id: "2",
            },
            {
                text: "C: Bắc Ninh ",
                id: "3",
            },
            {
                text: "D: Bình Dương.",
                id: "4",
            },
        ],
        correctID: 4,
        sound: "Sound/question-sound/qs7.mp3",
    },
};
const resource = {
    images: [],
    audios: [
        "Sound/first5BgSound.mp3",
        "Sound/final-answer.mp3",
        "Sound/start-sound.mp3",
        "Sound/game-over.mp3",
        "Sound/start-game.mp3",
        `Sound/wrong-sound.mp3`,
    ],
};
