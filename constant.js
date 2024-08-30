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
    advisoryGroupHelper: `- Tổ tư vấn gồm có tất cả 5 người. Trong đó có 3 người biết chắc chắn câu lời đúng và 2 người còn lại thì không. Hãy chọn 3 người bất kì để được họ trợ giúp. Chúc bạn may mắn!`
};
const Questions = {
    1: {
        question: 'Câu 1: Có câu thành ngữ: "Đầu voi đuôi ..." gì? ',
        answers: [
            {
                text: "A: Cá đuối",
                id: 1
            },
            {
                text: "B: Gà mái",
                id:2,
            },
            {
                text: "C: Chuột.",
                id: 3,
            },
            {
                text: "D: Chuồn chuồn",
                id: 4,
            },
        ],
        correctId: 3,
        sound: "Sound/question-sound/qs1.mp3",
    },
    2: {
        question: "Câu 2: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: 1
            },
            {
                text: "B: Ninh Bình",
                id:2,
            },
            {
                text: "C: Bắc Ninh ",
                id: 3,
            },
            {
                text: "D: Bình Dương.",
                id: 4,
            },
        ],
        correctId: 2,
        sound: "Sound/question-sound/qs2.mp3",
    },
    3: {
        question: "Câu 3: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: 1
            },
            {
                text: "B: Ninh Bình",
                id:2,
            },
            {
                text: "C: Bắc Ninh ",
                id: 3,
            },
            {
                text: "D: Bình Dương.",
                id: 4,
            },
        ],
        correctId: 3,
        sound: "Sound/question-sound/qs3.mp3",
    },
    4: {
        question: "Câu 4: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: 1
            },
            {
                text: "B: Ninh Bình",
                id:2,
            },
            {
                text: "C: Bắc Ninh ",
                id: 3,
            },
            {
                text: "D: Bình Dương.",
                id: 4,
            },
        ],
        correctId: 4,
        sound: "Sound/question-sound/qs4.mp3",
    },
    5: {
        question: "Câu 5: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: 1
            },
            {
                text: "B: Ninh Bình",
                id:2,
            },
            {
                text: "C: Bắc Ninh ",
                id: 3,
            },
            {
                text: "D: Bình Dương.",
                id: 4,
            },
        ],
        correctId: 1,
        sound: "Sound/question-sound/qs5.mp3",
    },
    6: {
        question: "Câu 6: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: 1
            },
            {
                text: "B: Ninh Bình",
                id:2,
            },
            {
                text: "C: Bắc Ninh ",
                id: 3,
            },
            {
                text: "D: Bình Dương.",
                id: 4,
            },
        ],
        correctId: 2,
        sound: "Sound/question-sound/qs6.mp3",
    },
    7: {
        question: "Câu 7: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: 1
            },
            {
                text: "B: Ninh Bình",
                id:2,
            },
            {
                text: "C: Bắc Ninh ",
                id: 3,
            },
            {
                text: "D: Bình Dương.",
                id: 4,
            },
        ],
        correctId: 3,
        sound: "Sound/question-sound/qs7.mp3",
    },
    8: {
        question: "Câu 8: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: 1
            },
            {
                text: "B: Ninh Bình",
                id:2,
            },
            {
                text: "C: Bắc Ninh ",
                id: 3,
            },
            {
                text: "D: Bình Dương.",
                id: 4,
            },
        ],
        correctId: 4,
        sound: "Sound/question-sound/qs7.mp3",
    },
    9: {
        question: "Câu 9: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: 1
            },
            {
                text: "B: Ninh Bình",
                id:2,
            },
            {
                text: "C: Bắc Ninh ",
                id: 3,
            },
            {
                text: "D: Bình Dương.",
                id: 4,
            },
        ],
        correctId: 1,
        sound: "Sound/question-sound/qs7.mp3",
    },
    10: {
        question: "Câu 10: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: 1
            },
            {
                text: "B: Ninh Bình",
                id:2,
            },
            {
                text: "C: Bắc Ninh ",
                id: 3,
            },
            {
                text: "D: Bình Dương.",
                id: 4,
            },
        ],
        correctId: 2,
        sound: "Sound/question-sound/qs7.mp3",
    },
    11: {
        question: "Câu 11: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: 1
            },
            {
                text: "B: Ninh Bình",
                id:2,
            },
            {
                text: "C: Bắc Ninh ",
                id: 3,
            },
            {
                text: "D: Bình Dương.",
                id: 4,
            },
        ],
        correctId: 3,
        sound: "Sound/question-sound/qs7.mp3",
    },
    12: {
        question: "Câu 12: Tỉnh nào ở miền Nam?",
        answers: [
            {
                text: "A: Nam Định",
                id: 1
            },
            {
                text: "B: Ninh Bình",
                id:2,
            },
            {
                text: "C: Bắc Ninh ",
                id: 3,
            },
            {
                text: "D: Bình Dương.",
                id: 4,
            },
        ],
        correctId: 4,
        sound: "Sound/question-sound/qs7.mp3",
    },
};
const resource = {
    images: [
        "./Image/50-50-used.webp",
        "./Image/50-50.webp",
        "./Image/advisory-group-used.webp",
        "./Image/advisory-group.webp",
        "./Image/answer-table.webp",
        "./Image/ask-viewer-used.webp",
        "./Image/avatar.jpg",
        "./Image/call-used.webp",
        "./Image/normal-l.png",
        "./Image/normal-r.png",
        "./Image/selected-r.png",
        "./Image/selected.png",
        "./Image/correct.png",
        "./Image/correct-r.png",
        "./Image/question.png",
        "./Image/point-table.webp",
        "./Image/current-money.png",
        "./Image/cartoon.png",
        "./Image/guide-background.webp",
        "./Image/call.webp",
        "./Image/call-used.webp",
        "./Image/ask-viewer.webp",
        "./Image/money-point.png",
    ],
    audios: [
        "./Sound/start-sound.mp3",
        "./Sound/explain-rule-bg-sound.mp3",
        "./Sound/explain-rule.mp3",
        "./Sound/start-game.mp3",
        "./Sound/first5BgSound.mp3",
        "./Sound/final-answer.mp3",
        "./Sound/game-over.mp3",
        "./Sound/wrong-sound.mp3",
        "./Sound/ask-advisory-group-bg-sound.mp3",
        "./Sound/ask-advisory-group-done.mp3",
        "./Sound/ask-advisory-group.mp3",
        "./Sound/ask-viewer-sound.mp3",
        "./Sound/introduce-part2.mp3",
        "./Sound/next5BgSound.mp3",
        "./Sound/remove-wrong.mp3",
        "./Sound/win-5.mp3",
        "./Sound/wait-viewer-answer.mp3",
        "./Sound/time-up.mp3",
    ],
};
