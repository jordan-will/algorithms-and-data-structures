const towerOfHanoi = (n, origin, destiny, assistant) => {
    if (n == 1) {
        console.log(`Move disk 1 from pin ${origin} to pin ${destiny}`);
        return
    }
    towerOfHanoi(n - 1, origin, assistant, destiny)
    console.log(`Move disk ${n} from pin ${origin} to pin ${destiny}`);
    towerOfHanoi(n - 1, assistant, destiny, origin)
}

towerOfHanoi(3, 'A', 'C', 'B');