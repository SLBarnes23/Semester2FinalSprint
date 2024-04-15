window.onerror = function() {
    document.getElementById('homeBtn').style.display = 'block';
};

function hideHomeButton() {
    document.getElementById('homeBtn').style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {
    const moose = document.getElementById('moose');
    const hunter = document.getElementById('hunter');
    const score = document.getElementById('score');

    function jump() {
        moose.classList.add('jump-animation');
        setTimeout(() => {
            moose.classList.remove('jump-animation');
        }, 500);
    }

    document.addEventListener('keypress', () => {
        if (!moose.classList.contains('jump-animation')) {
            jump();
        }
    });

    setInterval(() => {
        score.innerText++;
        const mooseTop = parseInt(window.getComputedStyle(moose)
            .getPropertyValue('top'));
        const hunterLeft = parseInt(window.getComputedStyle(hunter)
            .getPropertyValue('left'));

        if (hunterLeft < 0) {
            hunter.style.display = 'none';
        } else {
            hunter.style.display = '';
        }
        if (hunterLeft < 75 && hunterLeft > 0 && mooseTop > 150) {
            alert("You're sausages. You got a score of: " + score.innerText +
                "\n\nPlay again?");
            location.reload();
        }
    }, 50);
});
