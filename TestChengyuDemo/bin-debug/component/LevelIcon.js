var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 关卡按钮UI
 */
var LevelIcon = (function (_super) {
    __extends(LevelIcon, _super);
    function LevelIcon() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/assets/skin/LevelIconSkin.exml";
        return _this;
    }
    Object.defineProperty(LevelIcon.prototype, "Level", {
        get: function () { return parseInt(this.label_level.text); },
        set: function (val) { this.label_level.text = val.toString(); },
        enumerable: true,
        configurable: true
    });
    return LevelIcon;
}(eui.Button));
__reflect(LevelIcon.prototype, "LevelIcon");
//# sourceMappingURL=LevelIcon.js.map