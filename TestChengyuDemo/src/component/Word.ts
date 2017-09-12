/**
 * 字组件
 */
class Word extends eui.Component
{
    protected lb_text : eui.Label;

    public constructor()
    {
        super();
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickHandler, this);
    }

    protected onClickHandler(e : egret.TouchEvent) : void
    {
        console.log("word: " + this.lb_text.text);
        SoundManager.getInstance().playWrod();
        SceneGameView.getInstance().answerWordClick(this);
    }

    // 这里检查下，作者解释道：
    // 这里没有做成属性的原因是因为当应用到eui的时候，Skin还未指定，运行时候会出现报错，如果指定了SkinName，那么就会产生两次eui的构建浪费内存
    public setWordText(val : string) : void { this.lb_text.text = val; }
    public getWordText() : string { return this.lb_text.text; }
}