// Show the slot machine when the "Slot Machine" button is clicked
document.getElementById('showSlotMachine').addEventListener('click', function() {
    const slotMachine = document.getElementById('slot-machine');
    slotMachine.style.display = 'flex'; // Show the slot machine
});

// Hide the slot machine when the "Close" button is clicked
document.getElementById('closeSlotMachine').addEventListener('click', function() {
    const slotMachine = document.getElementById('slot-machine');
    slotMachine.style.display = 'none'; // Hide the slot machine
});

/* Slot Machine */
function spin() {
    // Disable button
    const spinButton = document.querySelector('.slot-button');
    spinButton.disabled = true;

    const icons = ['<img src="img/One Piece.png">',
                    '<img src="img/Attack On Titan.png">',
                    '<img src="img/Dragon Ball.png">',
                    '<img src="img/Fairy Tail.png">',
                    '<img src="img/Seven Deadly Sins.png">'];
    const column1 = document.querySelector('#column1 .icons');
    const column2 = document.querySelector('#column2 .icons');
    const column3 = document.querySelector('#column3 .icons');

    // RNG Slot
    const pos1 = Math.floor(Math.random() * icons.length);
    const pos2 = Math.floor(Math.random() * icons.length);
    const pos3 = Math.floor(Math.random() * icons.length);

    // Transition Icons
    column1.style.top = `-${pos1 * 200}px`;
    column2.style.top = `-${pos2 * 200}px`;
    column3.style.top = `-${pos3 * 200}px`;

    // Result
    setTimeout(() => {
        if (pos1 === pos2 && pos2 === pos3) {
            // Display Jackpot
            const overlay = document.createElement('div');
            overlay.id = 'jackpot';
            overlay.innerHTML = `<img src="img/Jackpot.gif" style="width: 100%; height: 100%; z-index: 9999;">`;
            document.body.appendChild(overlay);

            // Remove Jackpot Animation
            setTimeout(() => {
                document.body.removeChild(overlay);
            }, 2000);
        }

        spinButton.disabled = false;
    }, 1000);
}