

function displayItem(element) {

    let el = document.getElementById(element);
    if (el.classList.contains('hidden')) {
        el.classList.toggle('hidden');
    }
    
    el.classList.toggle('active');


}

function hideItem(element) {

    let el = document.getElementById(element);
    
    el.classList.toggle('active');
    el.classList.toggle('hidden');

}