$(window).on("load", startAnim);
//cirkel er sprite//
function startAnim() {
    console.log("animationen starter");
    $("#bruseren_drypper")[0].play();
    $("#dreng1_container").hide();
    $("#dreng2_container").hide();
    $("#haand_container").hide();
    $("#bruser_container").addClass("dryp_pose");
    $("#bruser_sprite").addClass("bruser_dryp");
    $("#oskar_sprite").addClass("oskar_walkcycle");
    $("#oskar_container").addClass("move_right");
    $("#oskar_container").on("animationend", vennerKommerInd);
}

function vennerKommerInd() {
    console.log("vennerKommerInd");
    $("#bruseren_drypper")[0].play();
    $("#oskar_container").off("animationend", vennerKommerInd);
    $("#dreng1_container").show();
    $("#dreng2_container").show();
    $("#oskar_sprite").removeClass("oskar_walkcycle");
    $("#oskar_sprite").addClass("oskar_afslappet");
    $("#oskar_container").addClass("oskar_end_pose");
    $("#dreng1_sprite").addClass("dreng1_walkcycle");
    $("#dreng1_container").addClass("dreng1_move_right");
    $("#dreng2_sprite").addClass("dreng2_walkcycle");
    $("#dreng2_container").addClass("dreng2_move_right");
    $("#dreng1_container").on("animationend", ven1Gaar);
}

function ven1Gaar() {
    console.log("dreng1 går til oskar");
    $("#dreng1_container").off("animationend", ven1Gaar);
    $("#dreng2_sprite").removeClass("dreng2_walkcycle");
    $("#dreng2_sprite").addClass("dreng2_start_pose");
    $("#dreng1_container").removeClass("dreng1_move_right");
    $("#dreng1_container").addClass("dreng1_oskar");
    $("#haandklaedeNed")[0].play();
    $("#dreng1_container").on("animationend", ven1HiverHaandklaedetNed);
}

function ven1HiverHaandklaedetNed() {
    console.log("vennen hiver håndklædet ned");
    $("#dreng1_container").off("animationend", ven1HiverHaandklaedetNed);
    $("#dreng1_sprite").removeClass("dreng1_walkcycle");
    $("#dreng1_container").removeClass("dreng1_oskar");
    $("#dreng1_container").addClass(" dreng1_staa_oskar");
    $("#oskar_sprite").removeClass("oskar_afslappet");
    $("#dreng1_sprite").addClass("dreng1_pull");
    $("#oskar_sprite").addClass("oskar_ned");
    $("#oskar_sprite").on("animationend", kameraInd);
}

function kameraInd() {
    console.log("mobil kommer ind");
    $("#oskar_sprite").off("animationend", kameraInd);
    $("#haand_container").show();
    $("#dreng1_sprite").removeClass("dreng1_pull");
    $("#dreng1_sprite").addClass("dreng1_walkcycle");
    $("#dreng1_container").removeClass("dreng1_staa_oskar");
    $("#dreng1_container").addClass("dreng1_move_left");
    $("#haand_sprite").addClass("haand_rolig");
    $("#haand_container").addClass("haand_enter");
    $("#dreng2_sprite").removeClass("dreng2_start_pose");
    $("#dreng2_sprite").addClass("dreng2_laughcycle");
    $("#dreng1_container").on("animationend", oskarHiverHaandklaedetOp);
}

function oskarHiverHaandklaedetOp() {
    console.log("oskarHiverHaandklaedetOp");
    $("#dreng1_container").off("animationend", oskarHiverHaandklaedetOp);
    $("#kameralyd")[0].play();
    $("#dreng1_sprite").removeClass("dreng1_walkcycle");
    $("#dreng1_container").removeClass("dreng1_move_left");
    $("#dreng1_sprite").addClass("dreng1_laughcycle");
    $("#dreng1_container").addClass("dreng1_start_pose");
    $("#oskar_sprite").addClass("oskar_up");
    $("#haand_sprite").removeClass("haand_rolig");
    $("#haand_container").removeClass("haand_enter");
    $("#haand_sprite").addClass("haand_tryk");
    $("#haand_container").addClass("haand_billede_pose");
    $("#oskar_sprite").on("animationend", branch);
}

function branch() {
    console.log("branch");
    $("#dreng1_container").off("animationend", branch);
    $("#oskar_sprite").removeClass("oskar_up");
    $("#oskar_sprite").addClass("oskar_valg");
    $("#oskar_sprite").removeClass("move_right");
    $("#oskar_sprite").removeClass("oskar_ned");
    $("#haand_sprite").removeClass("haand_tryk");
    $("#haand_container").removeClass("haand_billede_pose");
    $("#haand_sprite").addClass("haand_rolig");
    $("#haand_container").addClass("haand_tilbage");
    $("#oskar_sprite").on("animationend", fork);
}

function fork() {
    console.log("fork");
    $("#dreng1_container").off("animationend", fork);
    $("#text_container").show();
    $("#valg1").show();
    $("#valg2").show();
    $("#valg1").on("click", oskarOvertaler);
    $("#valg2").on("click", oskarGriner);
}

function oskarOvertaler() {
    console.log("oskarOvertaler");
}

function oskarGriner() {
    console.log("oskarGriner");
}
