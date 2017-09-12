/**
 * 开始界面
 */
class SceneStartView extends eui.Component
{
    private static _instance : SceneStartView;

    private btn_start : eui.Button;
    private btn_setting : eui.Button;

    public constructor()
    {
        super();
        this.skinName = "resource/assets/skin/SceneStartSkin.exml";

        this.addEvent();

        // bgm
        SoundManager.getInstance().playBgm();
    }

    public static getInstance() : SceneStartView
    {
        if(this._instance == null)
            this._instance = new SceneStartView();
        return this._instance;
    }

    // 事件
    private onGameStartHandler(e : egret.TouchEvent) : void
    {
        if(this.parent)
        {
            SoundManager.getInstance().playClick();
            this.parent.addChild(SceneLevelView.getInstance());
            this.parent.removeChild(this);
        }
    }

    private onSettingHandler(e : egret.TouchEvent) : void
    {
        SoundManager.getInstance().playClick();
        this.addChild(GameSettingView.getInstance());
    }

    private addEvent() : void
    {
        this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameStartHandler, this);
        this.btn_setting.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSettingHandler, this);
    }

    private removeEvent() : void
    {
        this.btn_start.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameStartHandler, this);
        this.btn_setting.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSettingHandler, this);
    }

    public destroy() : void
    {
        this.removeEvent();

    }
}