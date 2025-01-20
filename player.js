class Player {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./player_walking.png"), 0, 0, 32, 32, 6, 0.1);
        this.y = 0;
    };

    update() {
        this.y += 2;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 50 + this.y);
    };
}