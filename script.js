class Popup {
    constructor() {
        this.content = null;
        this.element = document.querySelector(".popup");
        this.popupContent = document.querySelector(".popup>.content");
        this.callbackFun = null;
        this.interval = null;
        this.listener();
    }
    listener() {
        const btnConfirm = document.querySelector(".popup>.btn-confirm");
        btnConfirm.addEventListener("click", (event) => {
            this.callbackFun();
        });
    }
    update(content, callback) {
        this.content = content;
        this.callbackFun = callback;
    }
    render(timing, callback) {
        clearInterval(this.interval);
        this.popupContent.innerHTML = "";
        let contentArr = this.content.split("");
        let index = 0;
        this.interval = setInterval(() => {
            if (index >= contentArr.length) {
                clearInterval(this.interval);
                return callback && callback();
            }
            const newWord = document.createElement("span");
            newWord.innerHTML = contentArr[index] == "#" ? "</br>&nbsp;&nbsp;&nbsp;" : contentArr[index];
            this.popupContent.appendChild(newWord);
            index++;
        }, timing / this.content.length);
    }

    show(callback) {
        this.element.classList.add("zoom-in", "translate-middle");
        return callback && callback();
    }
    hide(className, callback) {
        this.element.classList.forEach((name) => {
            if (name != "popup") {
                this.element.classList.remove(name);
            }
        });
        return callback && callback();
    }
}

class Sound {
    constructor(fileName) {
        this.fileName = fileName;
        this.audio = new Audio(this.fileName);
    }

    isStopped() {
        return this.audio.paused;
    }

    start(shouldRepeat) {
        if (this.audio.duration > 0) {
            this.audio.currentTime = 0;
        }
        this.audio.currentTime = 0;
        this.audio.play();
        this.audio.onended = () => {
            if (shouldRepeat) this.start(true);
        };
    }
    onEnd(callback) {
        if (typeof callback == "function") {
            this.audio.onended = callback;
        }
    }
    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
    }
    update(filename) {
        this.fileName = filename;
    }
}

class Answer {
    constructor(game, answer, index) {
        this.game = game;
        this.isSelected = false;
        this.index = index;
        this.answer = answer.text;
        this.id = answer.id;
        this.isRemoved = false;
        this.element = document.querySelectorAll(".answer")[this.index];
    }
    onBtnAnswerClick(handleUserSelectAnswer) {
        this.element.addEventListener("click", () => {
            if (this.game.isSelectedAnswer) return;
            this.showSelectedAnswer();
            handleUserSelectAnswer(this.id, this.index);
        });
    }
    showSelectedAnswer() {
        this.element.classList.add("selected");
        this.element.querySelector("img").src = this.index % 2 == 0 ? "./Image/selected.png" : "./Image/selected-r.png";
    }
    showCorrectAnswer() {
        this.element.classList.add("correctAnswer");
        this.element.querySelector("img").src = this.index % 2 == 0 ? "./Image/correct.png" : "./Image/correct-r.png";
    }
    reset() {
        this.element.classList.forEach((name) => {
            if (name !== "answer") {
                this.element.classList.remove(name);
            }
        });
        this.element.classList.remove("correctAnswer");
        this.element.querySelector("img").src = this.index % 2 == 0 ? "./Image/normal-l.png" : "./Image/normal-r.png";
    }
    remove() {
        this.element.classList.add("hidden");
    }

    render() {
        this.element.querySelector("span").innerHTML = this.answer;
    }
}

class Screen {
    constructor(game) {
        this.game = game;
        this.answerTable = document.querySelector(".table-viewer-answer");
        this.startBtn = document.querySelector(".btn-start");
    }

    showStartBtn() {
        this.startBtn.classList.remove("hidden");
    }
    hideStartBtn() {
        this.startBtn.classList.add("hidden");
    }
    showLights() {
        const lights = document.querySelectorAll(".light");
        lights.forEach((light) => {
            light.classList.add("light-rotate");
            setTimeout(() => {
                // light.classList.remove("light-rotate");
            }, 5000);
        });

        const fakeLight = document.querySelectorAll(".fake-light");
        fakeLight.forEach((light) => {
            light.classList.add("light-running");
            setTimeout(() => {
                // light.classList.remove("light-rotate");
            }, 5000);
        });
    }
    onBtnStartGameClick(callback) {
        this.startBtn.addEventListener("click", () => {
            this.hideStartBtn();
            callback();
        });
    }

    onBtnRemoveAnswerClick(callback) {
        const handleClick = () => {
            if (this.game.isSelectedAnswer || this.game.helper.isRemoveWrongUsed) return;
            this.game.helper.isRemoveWrongUsed = true;
            element.innerHTML = ` <img src='Image/50-50-used.webp' alt=''>`;
            const removeSound = new Sound("Sound/remove-wrong.mp3");
            removeSound.start();
            setTimeout(() => {
                callback();
            }, 3000);
        };
        const element = document.querySelector("#btn-remove-half");
        element.addEventListener("click", handleClick);
    }

    onBtnAskViewerClick(callback) {
        const handleClick = () => {
            console.log(this.game.helper);
            if (this.game.isSelectedAnswer || this.game.helper.isAskAudienceUsed) return;
            this.game.helper.isAskAudienceUsed = true;
            element.innerHTML = ` <img src='Image/ask-viewer-used.webp' alt=''>`;
            const askViewSound = new Sound("Sound/ask-viewer-sound.mp3");
            askViewSound.start();
            this.answerTable.classList.remove("hidden");

            askViewSound.onEnd(() => {
                const waitViewerAnswerSound = new Sound("Sound/wait-viewer-answer.mp3");
                waitViewerAnswerSound.start();
                this.game.questionBgSound.stop();
                const answerCol = document.querySelectorAll(".result");
                setTimeout(() => {
                    answerCol.forEach((col) => {
                        col.classList.add("result-animation");
                    });
                }, 1500);
                waitViewerAnswerSound.onEnd(() => {
                    this.game.questionBgSound.start(true);
                    answerCol.forEach((col) => {
                        col.classList.remove("result-animation");
                    });
                });
                this.game.delay(() => {
                    callback();
                }, 13000);
            });
        };
        const element = document.querySelector("#btn-audience-help");
        element.addEventListener("click", handleClick);
    }

    hideAnswerTable() {
        this.answerTable.classList.add("hidden");
    }
    updatePrizeMoney() {
        const currentQuestion = this.game.currentQuestion;
        const items = document.querySelectorAll(".point-item");
        items.forEach((item) => {
            item.classList.remove("current-lever");
        });
        items[items.length - currentQuestion].classList.add("current-lever");
    }
    reset() {
        this.hideAnswerTable;
        //button remove-half-answer
        const btnRemoveHalf = document.querySelector("#btn-remove-half");
        btnRemoveHalf.innerHTML = ` <img src='Image/50-50.webp' alt=''>`;
        btnRemoveHalf.setAttribute("data-used", false);
        //button ask-audience-help
        const btnAskAudience = document.querySelector("#btn-audience-help");
        btnAskAudience.innerHTML = ` <img src='Image/ask-viewer.webp' alt=''>`;
        btnAskAudience.setAttribute("data-used", false);
    }
}
class Timer {
    constructor(time) {
        this.currentTime = time;
        this.timerElement = document.querySelector(".time");
        this.timerInterval = null;
    }
    startUpdateTimer() {
        this.timerInterval = setInterval(() => {
            this.currentTime -= 1;
            this.timerElement.innerHTML = this.currentTime;
        }, 1000);
    }

    updateTime(time) {
        this.currentTime = time;
        this.timerElement.innerHTML = this.currentTime;
    }
    stopUpdateTimer() {
        clearInterval(this.timerInterval);
    }
}
const TIME = 60;
class Game {
    constructor() {
        this.currentQuestion = 1;
        this.screen = new Screen(this);
        this.listener();
        this.isSelectedAnswer = false;
        this.questionBgSound = null;
        this.questionSound = null;
        this.wellcomeSound = null;
        this.startSound = null;
        this.correctSound = null;
        this.finalAnswerSound = null;
        this.wrongAnswerSound = null;
        this.timer = new Timer(TIME);
        this.gameOverSound = null;
        this.answers = [];
        this.isPlayAgain = false;
        this.startGameSound = null;
        this.popup = new Popup("");
        this.helper = null;
    }
    init() {
        this.questionSound = new Sound(QandA[this.currentQuestion].sound);
        this.questionBgSound = new Sound("Sound/first5BgSound.mp3");
        this.finalAnswerSound = new Sound("Sound/final-answer.mp3");
        this.startSound = new Sound("Sound/start-sound.mp3");
        this.gameOverSound = new Sound("Sound/game-over.mp3");
        this.startGameSound = new Sound("Sound/start-game.mp3");
        this.wrongAnswerSound = new Sound(`Sound/wrong-sound.mp3`);
        this.helper = {
            isRemoveWrongUsed: false,
            isAskAudienceUsed: false,
            isCallUsed: false,
            isAdvisoryUsed: false,
        };
        this.timer.updateTime(TIME);
        this.isSelectedAnswer = false;
        this.currentQuestion = 1;
        this.startSound.start();
        this.screen.showLights();
        this.screen.showStartBtn();
        this.updateAudienceAnswer([0, 0, 0, 0]);
    }

    delay(func, timing) {
        setTimeout(() => {
            func();
        }, timing);
    }

    handleUserSelectAnswer(answerId, index) {
        this.isSelectedAnswer = true;
        this.startSound.stop(); // need remove
        this.timer.stopUpdateTimer();
        this.questionSound.stop();
        const process = () => {
            if (this.currentQuestion == 5) {
                this.questionBgSound.stop();
                this.questionBgSound = new Sound("Sound/next5BgSound.mp3");
                const display = document.querySelectorAll(".game>div.display");
                display.forEach((element) => {
                    element.classList.add("hidden");
                });
                this.screen.hideAnswerTable();
                const prizeMoney = document.querySelector(".current-prize-money");
                prizeMoney.classList.remove("hidden");
                const winFirst5Sound = new Sound("Sound/win-5.mp3");
                const introducePart2 = new Sound("Sound/introduce-part2.mp3");
                winFirst5Sound.start();
                winFirst5Sound.onEnd(() => {
                    prizeMoney.classList.add("hidden");
                    this.popup.show();
                    introducePart2.start();
                    this.popup.update(_script.introducePart2, () => {
                        introducePart2.stop();
                        this.updateQuestion();
                        this.startGame();
                    });
                    this.popup.render(15000);
                });
                return;
            }
            this.updateQuestion();
            this.showQuestion();
            this.readQuestion();
        };
        if (this.currentQuestion <= 5) {
            const correctAnswerProcess = () => {
                const sound = new Sound(`Sound/first5-correct-sound/${index}.mp3`);
                const bgSound = new Sound(`Sound/first5-correct-sound/correct-sound.mp3`);
                sound.start();
                this.delay(() => {
                    this.showCorrectAnswer();
                    bgSound.start();
                    bgSound.onEnd(() => process());
                }, 2000);
            };
            this.delay(() => {
                this.checkAnswer(answerId, correctAnswerProcess);
            }, 500);
            return;
        }
        if (this.currentQuestion > 5) {
            this.finalAnswerSound.start();
            const correctAnswerProcess = () => {
                this.showCorrectAnswer();
                this.questionBgSound.stop();
                const sound = new Sound(`Sound/second5-correct-sound/${index}.mp3`);
                sound.start();
                sound.onEnd(() => process());
            };
            this.delay(() => {
                this.finalAnswerSound.stop();
                this.checkAnswer(answerId, correctAnswerProcess);
            }, 4000);
        }
    }
    checkAnswer(answerId, correctAnswerProcess) {
        if (answerId == QandA[this.currentQuestion].correctID) {
            correctAnswerProcess();
        } else {
            this.showCorrectAnswer();
            this.questionBgSound.stop();
            this.wrongAnswerSound.start();
            this.wrongAnswerSound.onEnd(() => this.stopGame());
        }
    }

    updateQuestion() {
        this.currentQuestion += 1;
        this.screen.hideAnswerTable();
        this.isSelectedAnswer = false;
        this.timer.updateTime(TIME);
    }

    showCorrectAnswer() {
        this.answers.forEach((answer) => {
            if (answer.id == QandA[this.currentQuestion].correctID) {
                answer.showCorrectAnswer();
            }
        });
    }

    createAnswer() {
        this.answers = [];
        const answers = QandA[this.currentQuestion].answers;
        answers.forEach((answer, index) => {
            this.answers.push(new Answer(this, answer, index));
        });
    }

    showQuestion() {
        this.createAnswer();
        this.screen.updatePrizeMoney();
        const questionElement = document.querySelector(".question > span");
        questionElement.innerHTML = QandA[this.currentQuestion].question;
        this.answers.forEach((answer) => {
            answer.reset();
            answer.render();
            answer.onBtnAnswerClick((id, index) => {
                this.handleUserSelectAnswer(id, index);
            });
        });
    }

    readQuestion() {
        this.questionSound = new Sound(QandA[this.currentQuestion].sound);
        this.questionSound.start();
        this.questionSound.onEnd(() => {
            this.timer.startUpdateTimer();
        });
        this.questionBgSound.isStopped() && this.questionBgSound.start(true);
    }
    handleBtnRemoveAnswerClick() {
        let deletedCount = 0;
        let deletedIndex = Infinity;
        while (deletedCount < 2) {
            const deleteIndex = Math.floor(Math.random() * this.answers.length);
            if (QandA[this.currentQuestion].correctID == this.answers[deleteIndex].id || deletedIndex == deleteIndex)
                continue;
            this.answers[deleteIndex].remove();
            this.answers[deleteIndex].isRemoved = true;
            deletedIndex = deleteIndex;
            deletedCount++;
        }
    }

    updateAudienceAnswer(percents) {
        const answerCol = document.querySelectorAll(".result");
        const answerNumber = document.querySelectorAll(".result-text");
        percents.forEach((percent, index) => {
            const maxHeight = document.querySelector(".table-col").offsetHeight * (90 / 100);
            const height = (maxHeight * percent) / 100 < 15 ? 15 : (maxHeight * percent) / 100 + 15;
            answerCol[index].style.height = `${height}px`;
            answerNumber[index].innerHTML = percent + "%";
        });
    }

    handleBtnAskViewerClick() {
        let sumPercent = 70;
        const percents = [0, 0, 0, 0];
        for (let i = 0; i < 4; i++) {
            if (this.answers[i].isRemoved) {
                continue;
            }
            if (this.answers[i].id == QandA[this.currentQuestion].correctID) {
                percents[i] = 30;
            }
            if (i == 3) {
                percents[3] += sumPercent;
                sumPercent = 0;
                continue;
            }
            const randomPercent = Math.round(Math.random() * sumPercent);
            percents[i] += randomPercent;
            sumPercent -= randomPercent;
        }
        console.log("loooooooo");
        if (sumPercent != 0) {
            console.log(sumPercent);
            console.log(Math.ceil(sumPercent / 2));
            console.log(Math.floor(sumPercent / 2));
            let foundOne = false;
            for (let i = 0; i < 4; i++) {
                if (this.answers[i].isRemoved) continue;
                if (foundOne) {
                    percents[i] += Math.ceil(sumPercent / 2);
                    continue;
                }
                percents[i] += Math.floor(sumPercent / 2);
                foundOne = true;
            }
        }
        this.updateAudienceAnswer(percents);
    }
    startGame() {
        this.popup.hide();
        const display = document.querySelectorAll(".game>div.display");
        display.forEach((element) => {
            element.classList.remove("hidden");
        });
        this.showQuestion();
        this.readQuestion();
        this.questionBgSound.start(true);
    }

    stopGame() {
        const display = document.querySelectorAll(".game>div.display");
        display.forEach((element) => {
            element.classList.add("hidden");
        });
        this.screen.hideAnswerTable();
        this.gameOverSound.start();
        this.popup.update(_script.stopGame(this.currentQuestion), () => {
            this.popup.update(_script.playAgain, () => {
                this.popup.hide();
                this.gameOverSound.stop();
                this.delay(() => {
                    this.resetGame();
                }, 300);
            });
            this.popup.render();
        });
        this.delay(() => {
            this.popup.show();
            this.popup.render(5000);
        }, 300);
    }
    resetGame() {
        this.isPlayAgain = true;
        this.init();
        this.screen.reset();
    }

    showGuidePopup() {
        this.popup.show();
        this.delay(() => {
            this.explainRuleSound = new Sound("Sound/explain-rule.mp3");
            this.explainRuleBgSound = new Sound("Sound/explain-rule-bg-sound.mp3");
            this.explainRuleSound.start();
            this.explainRuleBgSound.start(true);
            this.popup.update(_script.introducePart1, () => {
                this.explainRuleSound.stop();
                this.explainRuleBgSound.stop();
                this.startGameSound.start();
                this.popup.update(_script.userAlready, () => {
                    this.startGameSound.stop();
                    this.startGame();
                });
                this.popup.render(3000);
                this.startGameSound.onEnd(() => this.startGame());
            });
            this.popup.render(14000);
        }, 500);
        // update sự kiện tiếp theo
    }

    handleStartGameClick() {
        this.startSound.stop();
        setTimeout(() => {
            if (!this.isPlayAgain) {
                this.showGuidePopup();
                return;
            }
            this.startGameSound.stop();
            this.startGame();
        }, 100);
    }
    listener() {
        this.screen.onBtnRemoveAnswerClick(() => {
            this.handleBtnRemoveAnswerClick();
        });
        this.screen.onBtnAskViewerClick(() => {
            this.handleBtnAskViewerClick();
        });

        this.screen.onBtnStartGameClick(() => {
            this.handleStartGameClick();
        });
    }

    update() {}
    draw() {}
}
class Loading {
    constructor() {
        this.images = resource.images;
        this.audios = resource.audios;
        this.imagesLoadedCount = 0;
        this.audiosLoadedCount = 0;
    }
    isAllResourceLoaded() {
        if (this.imagesLoadedCount == this.images.length && this.audiosLoadedCount == this.audios.length) {
            return true;
        }
        return false;
    }
    checkAllResourcesLoaded(handleLoaded) {
        this.images.forEach((imageSrc) => {
            const image = new Image(imageSrc);
            image.onload = () => {
                this.imagesLoadedCount++;
                if (this.isAllResourceLoaded()) {
                    handleLoaded();
                }
            };
            img.onerror = () => {
                alert("Có lỗi xảy ra trong quá trình tải game");
            };
        });
        this.audios.forEach((audioSrc) => {
            const audio = new Audio(audioSrc);
            audio.addEventListener("canplaythrough", () => {
                this.audiosLoadedCount++;
                if (this.isAllResourceLoaded()) {
                    handleLoaded();
                }
            });
            audio.onerror = () => {
                alert("Có lỗi xảy ra trong quá trình tải game");
            };
        });
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn-join-game").addEventListener("click", () => {
        document.querySelectorAll(".screen").forEach((screen) => {
            screen.style.display = "none";
        });
        const element = document.querySelector(".play-screen");
        element.style.display = "block";

        const gameLoading = new Loading();
        gameLoading.checkAllResourcesLoaded(() => {
            setTimeout(() => {
                document.querySelector(".loading").classList.add("hidden");
                let game = new Game();
                game.init();
            }, 6000);
        });
        let process = 0;
        const a = setInterval(() => {
            process += 10;
            if (process == 100) {
                clearInterval(a);
            }
            const processBar = document.querySelector(".process-bar");
            processBar.style.width = `${process}%`;
        }, 500);
    });
});
