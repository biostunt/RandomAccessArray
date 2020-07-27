import RAArray from './RAArray';
import Random from './Random';

let array = new RAArray();
for (let i = 0; i < 10; i++) {
    array.add(Random.randomString(10));
}
for (let i = 0; i < 10; i++) {
    console.log(array.get(i));
}

array.update(1, Random.randomString(10));