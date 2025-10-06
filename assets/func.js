function toggle_faq(id) {
    for (let step = 0; step < 5; step ++ ) {
        if ( id != step ) {
            let loopelement = "faq-ans"+step
            x = document.getElementById(loopelement);
            x.style.display = "none";
        }
    }
    let element = "faq-ans"+id
    var x = document.getElementById(element);
    if (x.style.display === "none") {
        x.style.display = "block";
        } else {
        x.style.display = "none";
    }
};
