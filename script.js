    let radius = parseFloat(document.querySelector("#radius").value);

    if (isNaN(radius) || radius < 0) {
        document.querySelector("#volume").value = "NaN";
        return;
    }

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.querySelector("#volume").value = volume.toFixed(4);

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
