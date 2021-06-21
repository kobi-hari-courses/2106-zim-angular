function random(min, max) {
    var range = max - min;
    var rnd = Math.random() * range + min;
    return rnd;
}