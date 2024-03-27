const colors = ['DarkSlateGrey', 'DodgerBlue', 'Indigo', 'Teal', 'MediumVioletRed']

function btn() {
    let random = colors[Math.floor(Math.random() * 5)];

    document.body.style.backgroundColor = random;
    document.getElementById('text').innerHTML = random;
    
}