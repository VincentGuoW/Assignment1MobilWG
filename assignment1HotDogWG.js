const Order = require("./assignment1OrderWG");
 //what's the point of this section??????????????????????????????


const OrderState = Object.freeze({
    //what's the point of this section??????????????????????????????
    WELCOMING: Symbol("welcoming"),
    SIZE: Symbol("size"),
    BUNS: Symbol("buns"),
    SAUCE: Symbol("sauce"),
    CLEANER: Symbol("Cleaner")
});

module.exports = class ShoesOrder extends Order {
    constructor() {
        super();
        this.stateCur = OrderState.WELCOMING;
        this.sSize = "";
        this.sBuns = "";
        this.sSauce = "";
        // this.sColour = "";
        this.sCleaner = "";
        this.sItem = "Hot Dog";
        this.sPrice = "$ 5";

    }
    handleInput(sInput) {
        let aReturn = [];
        switch (this.stateCur) {
            case OrderState.WELCOMING:
                this.stateCur = OrderState.SIZE;
                aReturn.push("Welcome to Conestoga's Hot Dog Store.");
                aReturn.push("What size HotDog would you like?");
                break;

            case OrderState.SIZE:
                this.stateCur = OrderState.BUNS
                this.sSize = sInput;
                aReturn.push("What type of HotDog buns would you like?");
                break;
            case OrderState.BUNS:
                this.stateCur = OrderState.SAUCE
                this.sBuns = sInput;
                aReturn.push("What HotDog sauce would you like?");
                break;
            case OrderState.SAUCE:
                this.stateCur = OrderState.CLEANER
                this.sSauce = sInput;
                aReturn.push("Would you like fries with that?");
                break;

            case OrderState.CLEANER:
                this.isDone(true);
                if (sInput.toLowerCase() != "no") {
                    this.sCleaner = sInput;
                    this.sPrice = "$ 7.5";
                }
                aReturn.push("Thank-you for your order of");
                aReturn.push(`${this.sSize} ${this.sItem} with ${this.sBuns} buns and ${this.sSauce} sauce`);
                if (this.sCleaner) {
                    aReturn.push(`${this.sCleaner} for the fries, and the total price is: ${this.sPrice}`);
                }
                else{
                    aReturn.push(`The total price is: ${this.sPrice}`);
                }
                let d = new Date();
                d.setMinutes(d.getMinutes() + 10);
                aReturn.push(`Please pick it up at ${d.toTimeString()}`);
                break;
        }
        return aReturn;
    }
}