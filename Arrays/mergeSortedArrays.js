const array1 = [1, 2, 3, 0, 0, 0]
const array2 = [2, 5, 6]

m = 3;
n = 3;

p = m + n - 1
p1 = m - 1;
p2 = n - 1

while (p2 > 0) {
    if (p1 >= 0 && array1[p1] > array2[p2]) {
        nums1[p] = nums1[p1];
        p1--
    }
    else {
        nums1[p] = nums2[p2];
        p2--;
    }
    p--
}
