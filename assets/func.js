function toggle_faq(id) {
    for (let step = 0; step < 5; step ++ ) {
        let element = "faq-ans"+step
        x = document.getElementById(element);
        x.style.display = "none";
    }
    let element = "faq-ans"+id
    var x = document.getElementById(element);
    if (x.style.display === "none") {
        x.style.display = "block";
        } else {
        x.style.display = "none";
    }
};
