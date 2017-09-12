var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 开始界面
 */
var SceneStartView = (function (_super) {
    __extends(SceneStartView, _super);
    function SceneStartView() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/assets/skin/SceneStartSkin.exml";
        _this.addEvent();
        // bgm
        SoundManager.getInstance().playBgm();
        return _this;
    }
    SceneStartView.getInstance = function () {
        if (this._instance == null)
            this._instance = new SceneStartView();
        return this._instance;
    };
    // 事件
    SceneStartView.prototype.onGameStartHandler = function (e) {
        if (this.parent) {
            SoundManager.getInstance().playClick();
            this.parent.addChild(SceneLevelView.getInstance());
            this.parent.removeChild(this);
        }
    };
    SceneStartView.prototype.onSettingHandler = function (e) {
        SoundManager.getInstance().playClick();
        this.addChild(GameSettingView.getInstance());
    };
    SceneStartView.prototype.addEvent = function () {
        this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameStartHandler, this);
        this.btn_setting.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSettingHandler, this);
    };
    SceneStartView.prototype.removeEvent = function () {
        this.btn_start.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameStartHandler, this);
        this.btn_setting.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSettingHandler, this);
    };
    SceneStartView.prototype.destroy = function () {
        this.removeEvent();
    };
    return SceneStartView;
}(eui.Component));
__reflect(SceneStartView.prototype, "SceneStartView");
//# sourceMappingURL=SceneStartView.js.map