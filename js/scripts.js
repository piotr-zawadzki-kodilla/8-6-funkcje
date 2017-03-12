function getTriangleArea(a, h) {

	if (a > 0 && h > 0) {
		return a * h / 2;
	}
	else {
		return "Nieprawidłowe dane";
	}
}

console.log(getTriangleArea(10, 6));

var triangleArea1 = getTriangleArea(20, 0);
var triangleArea2 = getTriangleArea(7, 9);
var triangleArea3 = getTriangleArea(250, 113);

console.log(triangleArea1);
console.log(triangleArea2);
console.log(triangleArea3);
