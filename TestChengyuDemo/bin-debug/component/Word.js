var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 字组件
 */
var Word = (function (_super) {
    __extends(Word, _super);
    function Word() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClickHandler, _this);
        return _this;
    }
    Word.prototype.onClickHandler = function (e) {
        console.log("word: " + this.lb_text.text);
        SoundManager.getInstance().playWrod();
        SceneGameView.getInstance().answerWordClick(this);
    };
    // 这里检查下，作者解释道：
    // 这里没有做成属性的原因是因为当应用到eui的时候，Skin还未指定，运行时候会出现报错，如果指定了SkinName，那么就会产生两次eui的构建浪费内存
    Word.prototype.setWordText = function (val) { this.lb_text.text = val; };
    Word.prototype.getWordText = function () { return this.lb_text.text; };
    return Word;
}(eui.Component));
__reflect(Word.prototype, "Word");
//# sourceMappingURL=Word.js.map