function updateDualRange(minId, maxId, displayId, sliderMinId, sliderMaxId) {
    const minValue = parseFloat(document.getElementById(minId).value);
    const maxValue = parseFloat(document.getElementById(maxId).value);

    if (minValue > maxValue - 0.1) {
        document.getElementById(minId).value = maxValue - 0.1;
    }
    
    const rangeMin = document.getElementById(sliderMinId).value;
    const rangeMax = document.getElementById(sliderMaxId).value;

    document.getElementById(displayId).textContent = `${rangeMin} - ${rangeMax}`;
    updateSliderTrack(sliderMinId, sliderMaxId);
}

function updateSliderTrack(minId, maxId) {
    const rangeMin = document.getElementById(minId).value;
    const rangeMax = document.getElementById(maxId).value;

    const slider = document.getElementById(minId).parentNode.querySelector('.slider-track');
    const percentMin = (rangeMin / 10) * 100;
    const percentMax = (rangeMax / 10) * 100;

    slider.style.background = `linear-gradient(to right, #ddd ${percentMin}%, #007bff ${percentMin}%, #007bff ${percentMax}%, #ddd ${percentMax}%)`;
}

function submitForm() {
    const ratingsMin = document.getElementById('ratings_min').value;
    const ratingsMax = document.getElementById('ratings_max').value;

    const speedMin = document.getElementById('speed_min').value;
    const speedMax = document.getElementById('speed_max').value;

    const controlMin = document.getElementById('control_min').value;
    const controlMax = document.getElementById('control_max').value;

    const stiffnessMin = document.getElementById('stiffness_min').value;
    const stiffnessMax = document.getElementById('stiffness_max').value;

    const hardnessMin = document.getElementById('hardness_min').value;
    const hardnessMax = document.getElementById('hardness_max').value;

    const consistencyMin = document.getElementById('consistency_min').value;
    const consistencyMax = document.getElementById('consistency_max').value;

    const url = `https://revspin.net/top-blade/overall-desc.html?ratings_min=${ratingsMin}&ratings_max=${ratingsMax}&speed_min=${speedMin}&speed_max=${speedMax}&control_min=${controlMin}&control_max=${controlMax}&stiffness_min=${stiffnessMin}&stiffness_max=${stiffnessMax}&hardness_min=${hardnessMin}&hardness_max=${hardnessMax}&consistency_min=${consistencyMin}&consistency_max=${consistencyMax}`;

    // window.location.href = url;
      // Open the URL in a new tab
    window.open(url, '_blank');
    return false; // Prevent the default form submission
}

// Initialize slider tracks
document.querySelectorAll('.range-slider').forEach(slider => {
    const minInput = slider.querySelector('input[type="range"]:first-of-type');
    const maxInput = slider.querySelector('input[type="range"]:last-of-type');
    updateSliderTrack(minInput.id, maxInput.id);
});
