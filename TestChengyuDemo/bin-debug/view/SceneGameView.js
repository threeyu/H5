var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 游戏界面
 */
var SceneGameView = (function (_super) {
    __extends(SceneGameView, _super);
    function SceneGameView() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/assets/skin/SceneGameSkin.exml";
        _this.addEvent();
        return _this;
    }
    SceneGameView.getInstance = function () {
        if (this._instance == null)
            this._instance = new SceneGameView();
        return this._instance;
    };
    SceneGameView.prototype.initLevel = function (level) {
        this._levelIndex = level;
        // 初始化当前关的问题和答案
        var data = LevelDataManager.getInstance().getLevel(level);
        var words = data.answer + data.word;
        while (words.length == 10) {
            var i = Math.floor(Math.random() * 400);
            if (i != level) {
                var temp = LevelDataManager.getInstance().getLevel(i);
                words += temp.word + temp.answer;
            }
        }
        // 对字段重排
        var wordList = [];
        for (var i = 0; i < words.length; ++i) {
            wordList.push(words.charAt(i));
        }
        wordList = this.chaosList(wordList);
        // 选项
        var wordrect;
        for (var i = 0; i < this.group_words.numChildren; ++i) {
            wordrect = this.group_words.getChildAt(i);
            wordrect.setWordText(wordList[i]);
            wordrect.visible = true;
        }
        // 答案
        var ansrect;
        for (var i = 0; i < this.group_answer.numChildren; ++i) {
            ansrect = this.group_answer.getChildAt(i);
            ansrect.setSelectedWord(null);
            ansrect.selectedWord = null;
            ansrect.visible = true;
        }
        // 图片
        this.img_question.source = "resource/assets/" + data.img;
    };
    // 洗牌
    SceneGameView.prototype.chaosList = function (arr) {
        var array = [];
        var i;
        while (arr.length > 0) {
            i = Math.floor(Math.random() * arr.length);
            array.push(arr[i]);
            arr.splice(i, 1);
        }
        return array;
    };
    SceneGameView.prototype.answerWordClick = function (word) {
        var sel = null;
        var answer;
        for (var i = 0; i < this.group_answer.numChildren; ++i) {
            answer = this.group_answer.getChildAt(i);
            if (answer.selectedWord == null) {
                sel = answer;
                break;
            }
        }
        if (sel != null) {
            sel.setSelectedWord(word);
            var checkStr = "";
            var answer;
            for (var i = 0; i < this.group_answer.numChildren; ++i) {
                answer = this.group_answer.getChildAt(i);
                checkStr += answer.getWordText();
            }
            if (checkStr == LevelDataManager.getInstance().getLevel(this._levelIndex).answer) {
                console.log("win");
                SoundManager.getInstance().playRight();
                this.showWin();
            }
            else {
                if (checkStr.length == 4)
                    SoundManager.getInstance().playWrong();
            }
        }
    };
    SceneGameView.prototype.showWin = function () {
        this.group_win.visible = true;
        var data = LevelDataManager.getInstance().getLevel(this._levelIndex);
        this.lb_from.text = data.tip;
        this.lb_explain.text = data.content;
    };
    // 事件
    SceneGameView.prototype.onBackHandler = function (e) {
        if (this.parent) {
            SoundManager.getInstance().playClick();
            this.parent.addChild(SceneLevelView.getInstance());
            this.parent.removeChild(this);
        }
    };
    SceneGameView.prototype.onNextHandler = function (e) {
        SoundManager.getInstance().playClick();
        this.group_win.visible = false;
        SceneLevelView.getInstance().openLevel(this._levelIndex + 1);
        this.initLevel(this._levelIndex + 1);
    };
    SceneGameView.prototype.addEvent = function () {
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackHandler, this);
        this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextHandler, this);
    };
    SceneGameView.prototype.removeEvent = function () {
        this.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackHandler, this);
        this.btn_next.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextHandler, this);
    };
    SceneGameView.prototype.destroy = function () {
        this.removeEvent();
    };
    return SceneGameView;
}(eui.Component));
__reflect(SceneGameView.prototype, "SceneGameView");
//# sourceMappingURL=SceneGameView.js.map