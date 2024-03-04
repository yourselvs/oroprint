function RemoveClassname(id, className) {
    document.getElementById(id).className = document.getElementById(id).className.replace(className, '');
}

function HandleFormButtonClick() {
    RemoveClassname('contact-form-selector', 'centered-nav');
}