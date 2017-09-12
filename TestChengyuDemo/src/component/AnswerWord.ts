/**
 * 答案字
 * 继承字组件
 * 由于当答案字点击的时候，答案字会消失并将对应的问题字还原显示
 */
class AnswerWord extends Word
{
    public selectedWord : Word = null;

    public constructor()
    {
        super();
    }

    protected onClickHandler(e : egret.TouchEvent) : void
    {
        console.log("answerword: " + this.lb_text.text);
        if(this.selectedWord != null)
        {
            this.selectedWord.visible = true;
            this.selectedWord = null;
            this.setWordText("");
        }
    }

    // 当一个问题字被选择添加到回答的时，设置不可见，并保存到本对象中以后使用
    public setSelectedWord(word : Word) : void
    {
        if(word != null)
        {
            word.visible = false;
            this.setWordText(word.getWordText());
            this.selectedWord = word;
        }
        else
        {
            this.setWordText("");
            this.selectedWord = null;
        }
    }
}