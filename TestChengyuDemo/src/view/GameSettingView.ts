/**
 * 设置界面
 */
class GameSettingView extends eui.Component
{
    private static _instance : GameSettingView;

    private img_music_disable : eui.Image;  // 音乐静音显示
    private img_sound_disable : eui.Image;  // 声音静音显示
    private btn_agree : eui.Button;         // 同意按钮
    private btn_sound : eui.Button;         // 声音按钮
    private btn_music : eui.Button;         // 音乐按钮

    public constructor()
    {
        super();
        this.skinName = "resource/assets/skin/GameSettingSkin.exml";

        this.addEvent();
        this.updateBtnStat();
    }

    public static getInstance() : GameSettingView
    {
        if(this._instance == null)
            this._instance = new GameSettingView();
        return this._instance;
    }


    // 事件
    private onAgreeClickHandler(e : egret.TouchEvent) : void
    {
        console.log("--- agree ---");
        if(this.parent)
        {
            SoundManager.getInstance().playClick();
            this.parent.removeChild(this);
        }
    }

    private onSoundClickHandler(e : egret.TouchEvent) : void
    {
        console.log("--- sound ---");
        SoundManager.getInstance().playClick();
        SoundManager.getInstance().isSound = !SoundManager.getInstance().isSound;
        this.updateBtnStat();
    }

    private onMusicClickHandler(e : egret.TouchEvent) : void
    {
        console.log("--- music ---");
        SoundManager.getInstance().playClick();
        SoundManager.getInstance().isMusic = !SoundManager.getInstance().isMusic;
        this.updateBtnStat();
    }

    private updateBtnStat()
    {
        this.img_music_disable.visible = !SoundManager.getInstance().isMusic;
        this.img_sound_disable.visible = !SoundManager.getInstance().isSound;
    }

    private addEvent() : void
    {
        this.btn_agree.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAgreeClickHandler, this);
        this.btn_sound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundClickHandler, this);
        this.btn_music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMusicClickHandler, this);
    }

    private removeEvent() : void
    {
        this.btn_agree.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onAgreeClickHandler, this);
        this.btn_sound.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundClickHandler, this);
        this.btn_music.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onMusicClickHandler, this);
    }

    public destroy() : void
    {
        this.removeEvent();
    }
}