var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 答案字
 * 继承字组件
 * 由于当答案字点击的时候，答案字会消失并将对应的问题字还原显示
 */
var AnswerWord = (function (_super) {
    __extends(AnswerWord, _super);
    function AnswerWord() {
        var _this = _super.call(this) || this;
        _this.selectedWord = null;
        return _this;
    }
    AnswerWord.prototype.onClickHandler = function (e) {
        console.log("answerword: " + this.lb_text.text);
        if (this.selectedWord != null) {
            this.selectedWord.visible = true;
            this.selectedWord = null;
            this.setWordText("");
        }
    };
    // 当一个问题字被选择添加到回答的时，设置不可见，并保存到本对象中以后使用
    AnswerWord.prototype.setSelectedWord = function (word) {
        if (word != null) {
            word.visible = false;
            this.setWordText(word.getWordText());
            this.selectedWord = word;
        }
        else {
            this.setWordText("");
            this.selectedWord = null;
        }
    };
    return AnswerWord;
}(Word));
__reflect(AnswerWord.prototype, "AnswerWord");
//# sourceMappingURL=AnswerWord.js.map