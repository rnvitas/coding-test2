//inputnya dikali dua
//urutannya dibalik dari belakang kedepan

function nilaiArray(arr) {
  //cara awal salah , lupa harus pake map kalau mau buat array baru
  //   for (i = 0; i < arr.length; i++) {
  //     return arr[i] * 2;
  //   }

  const Arraykalidua = arr.map((item) => item * 2);
  return Arraykalidua.reverse();
}

const number = [1, 2, 3, 5, 7];
const number_2 = [10, 20, 3, 2, 1];
const number_3 = [100];

console.log(nilaiArray(number));
console.log(nilaiArray(number_2));
console.log(nilaiArray(number_3));
