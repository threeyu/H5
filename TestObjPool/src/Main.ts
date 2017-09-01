class Main extends egret.DisplayObjectContainer
{
    public constructor()
    {
        super();

        this.init();
    }

    private init() : void
    {
        var dis : Distributor = new Distributor();
        var gen : BallGenerator = new BallGenerator(dis);

        var ball1 : IBall = gen.getBall(BallType.football) as FootBall;
        ball1.action();
        ball1.dispose();
        ball1 = null;
        dis.look();

        ball1 = gen.getBall(BallType.football) as FootBall;
        dis.look();

        var ball2 : IBall = gen.getBall(BallType.baseball) as BaseBall;
        ball2.action();
        var ball3 : IBall = gen.getBall(BallType.baseball) as BaseBall;
        ball3.action();
        dis.look();

        ball2.dispose();
        ball3.dispose();
        dis.look();
    }
}