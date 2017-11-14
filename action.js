$(window).on("load", oskar_end_pose);
//cirkel er sprite//
function oskar_end_pose() {
    console.log("animationen starter");
    $("#bruseren_drypper")[0].play();
    $("#bruser_container").addClass("dryp_pose");
    $("#bruser_sprite").addClass("bruser_dryp");
    $("#oskar_sprite").addClass("oskar_walkcycle");
    $("#oskar_container").addClass("oskar_end_pose");
    $("#oskar_container").on("animationend", vennerKommerInd);
}

function vennerKommerInd() {
    console.log("vennerne kommer ind");
    $("#bruseren_drypper")[0].play();
    $("#oskar_sprite").remove("oskar_walkcycle");
    $("#oskar_sprite").addClass("oskar_afslappet");
    $("#dreng1_sprite").addClass("dreng1_walkcycle");
    $("#dreng1_container").addClass("dreng1_start_pose");
    $("#dreng2_sprite").addClass("dreng2_walkcycle");
    $("#dreng2_container").addClass("dreng2_start_pose");
    $("#oskar_sprite").on("animationend", ven1Gaar);
}

function ven1Gaar() {
    console.log("dreng1 går til oskar");
    $("#bruseren_drypper")[0].play();
    $("#dreng2_sprite").remove("dreng2_walkcycle");
    $("#dreng1_container").remove("dreng1_start_pose");
    $("#dreng2_sprite").addClass("dreng2_start_pose");
    $("#dreng1_container").addClass("dreng1_oskar");
    $("#dreng1_container").on("animationend", ven1HiverHaandklaedetNed);
}

function ven1HiverHaandklaedetNed() {
    $("#haandklaedeNed")[0].play();
    console.log("vennen hiver håndklædet ned");
    $("#dreng1_sprite").remove("dreng1_walkcycle");
    $("#oskar_sprite").remove("oskar_afslappet");
    $("#dreng1_sprite").addClass("dreng1_pull");
    $("#oskar_sprite").addClass("oskar_ned");
    $("#oskar_sprite").on("animationend", kameraInd);
}

function kameraInd() {
    $("#griner")[0].play();
    console.log("mobil kommer ind");
    $("#dreng1_sprite").remove("dreng1_pull");
    $("#dreng2_sprite").remove("dreng2_start_pose");
    $("#haand_sprite").addClass("haand_ind_pose");
    $("#haand_container").addClass("haand_ude");
    $("#dreng1_sprite").addClass("dreng1_laughcycle");
    $("#dreng2_sprite").addClass("dreng2_laughcycle");
}
