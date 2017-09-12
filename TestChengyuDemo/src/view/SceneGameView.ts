/**
 * 游戏界面
 */
class SceneGameView extends eui.Component
{
    private static _instance : SceneGameView;

    private btn_back : eui.Button;
    private group_words : eui.Group;
    private group_answer : eui.Group;
    private img_question : eui.Image;

    private group_win : eui.Group;
    private btn_next : eui.Button;
    private lb_from : eui.Label;
    private lb_explain : eui.Label;

    private _levelIndex : number;       // 现在进行的关卡

    public constructor()
    {
        super();
        this.skinName = "resource/assets/skin/SceneGameSkin.exml";

        this.addEvent();
    }

    public static getInstance() : SceneGameView
    {
        if(this._instance == null)
            this._instance = new SceneGameView();
        return this._instance;
    }

    public initLevel(level : number) : void
    {
        this._levelIndex = level;
        // 初始化当前关的问题和答案
        var data = LevelDataManager.getInstance().getLevel(level);
        var words = data.answer + data.word;
        while(words.length == 10)
        {
            var i = Math.floor(Math.random() * 400);
            if(i != level)
            {
                var temp = LevelDataManager.getInstance().getLevel(i);
                words += temp.word + temp.answer;
            }
        }
        // 对字段重排
        var wordList : string[] = [];
        for(var i = 0; i < words.length; ++i)
        {
            wordList.push(words.charAt(i));
        }
        wordList = this.chaosList(wordList);
        // 选项
        var wordrect : Word;
        for(var i = 0; i < this.group_words.numChildren; ++i)
        {
            wordrect = <Word>this.group_words.getChildAt(i);
            wordrect.setWordText(wordList[i]);
            wordrect.visible = true;
        }
        // 答案
        var ansrect : AnswerWord;
        for(var i = 0; i < this.group_answer.numChildren; ++i)
        {
            ansrect = <AnswerWord>this.group_answer.getChildAt(i);
            ansrect.setSelectedWord(null);
            ansrect.selectedWord = null;
            ansrect.visible = true;
        }
        // 图片
        this.img_question.source = "resource/assets/" + data.img;
    }

    // 洗牌
    private chaosList(arr : any[]) : any[]
    {
        var array = [];
        var i : number;
        while(arr.length > 0)
        {
            i = Math.floor(Math.random() * arr.length);
            array.push(arr[i]);
            arr.splice(i, 1);
        }
        return array;
    }

    public answerWordClick(word : Word)
    {
        var sel : AnswerWord = null;
        var answer : AnswerWord;
        for(var i = 0; i < this.group_answer.numChildren; ++i)
        {
            answer = <AnswerWord>this.group_answer.getChildAt(i);
            if(answer.selectedWord == null)
            {
                sel = answer;
                break;
            }
        }

        if(sel != null)
        {
            sel.setSelectedWord(word);
            var checkStr : string = "";
            var answer : AnswerWord;
            for(var i = 0; i < this.group_answer.numChildren; ++i)
            {
                answer = <AnswerWord>this.group_answer.getChildAt(i);
                checkStr += answer.getWordText();
            }
            if(checkStr == LevelDataManager.getInstance().getLevel(this._levelIndex).answer)
            {
                console.log("win");
                SoundManager.getInstance().playRight();
                this.showWin();
            }
            else
            {
                if(checkStr.length == 4)
                    SoundManager.getInstance().playWrong();
            }
        }
    }

    private showWin() : void
    {
        this.group_win.visible = true;
        var data = LevelDataManager.getInstance().getLevel(this._levelIndex);
        this.lb_from.text = data.tip;
        this.lb_explain.text = data.content;
    }

    // 事件
    private onBackHandler(e : egret.TouchEvent) : void
    {
        if(this.parent)
        {
            SoundManager.getInstance().playClick();
            this.parent.addChild(SceneLevelView.getInstance());
            this.parent.removeChild(this);
        }
    }

    private onNextHandler(e : egret.TouchEvent) : void
    {
        SoundManager.getInstance().playClick();
        this.group_win.visible = false;
        SceneLevelView.getInstance().openLevel(this._levelIndex + 1);
        this.initLevel(this._levelIndex + 1);
    }

    private addEvent() : void
    {
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackHandler, this);
        this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextHandler, this);
    }

    private removeEvent() : void
    {
        this.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackHandler, this);
        this.btn_next.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextHandler, this);
    }

    public destroy() : void
    {
        this.removeEvent();

    }
}