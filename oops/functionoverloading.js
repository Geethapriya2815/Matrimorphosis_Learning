"use strict";
function calculateArea(a, b) {
    const PI = 3.14;
    if (b) {
        //formula for area of rectangle
        return a * b;
    }
    else
        return PI * a * a;
}
