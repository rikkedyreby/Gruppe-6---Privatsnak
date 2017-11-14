$(window).on("load", startAnim);

function startAnim() {
    console.log("animationen starter");
    $("#bruseren_drypper")[0].play();
    $("#oskar_container").addClass("pose");
    $("#oskar_sprite").addClass("oskar_walkcycle");
    $("#bruser_container").addClass("dryp_pose");
    $("#bruser_sprite").addClass("bruser_dryp");
    $("#oskar_container").on("animationend", vennerKommerInd);
}

function vennerKommerInd() {
    console.log("vennerne kommer ind");
    $("#oskar_sprite").remove("oskar_walkcycle");
    $("#oskar_container").addClass("oskar_standard");
    $("#dreng1_container").addClass("dreng1_start_pose");
    $("#dreng1_sprite").addClass("dreng1_walkcycle");
    $("#dreng2_container").addClass("dreng2_start_pose");
    $("#dreng2_sprite").addClass("dreng2_walkcycle");
    $("#oskar_container").on("animationend", ven1Gaar);
}

function ven1Gaar() {
    console.log("ven går til oskar");
    $("#dreng2_sprite").remove("dreng2_walkcycle");
    $("#dreng1_container").remove("dreng1_start_pose");
