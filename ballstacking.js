function stackHeight3d(layers, diameter=1) {
    return  diameter + (layers - 1)*diameter*(Math.sqrt(2/3))
}

console.log(stackHeight3d(2))