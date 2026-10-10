// تبدیل متن به ماتریس
function readMatrix(text) {
  return text.trim().split("\n").map(line =>
    line.trim().split(/\s+/).map(Number)
  );
}

// تبدیل ماتریس به متن برای نمایش
function toText(M) {
  return M.map(row => row.join("  ")).join("\n");
}

// جمع دو ماتریس
function add(A, B) {
  let m = A.length, n = A[0].length;
  if (m !== B.length || n !== B[0].length) return null;
  let C = [];
  for (let i = 0; i < m; i++) {
    C[i] = [];
    for (let j = 0; j < n; j++) {
      C[i][j] = A[i][j] + B[i][j];
    }
  }
  return C;
}

// ضرب دو ماتریس
function multiply(A, B) {
  let m = A.length, n = A[0].length, p = B[0].length;
  if (n !== B.length) return null;
  let C = [];
  for (let i = 0; i < m; i++) {
    C[i] = [];
    for (let j = 0; j < p; j++) {
      C[i][j] = 0;
      for (let k = 0; k < n; k++) {
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  return C;
}

// نمایش نتیجه یا پیام خطا
function show(id, result, errorMessage) {
  let el = document.getElementById(id);
  if (result) {
    el.textContent = toText(result);
    el.classList.remove("error");
  } else {
    el.textContent = errorMessage;
    el.classList.add("error");
  }
}

function run() {
  let A = readMatrix(document.getElementById("a").value);
  let B = readMatrix(document.getElementById("b").value);

  show("sum", add(A, B), "جمع ممکن نیست: ابعاد برابر نیستند.");
  show("prod", multiply(A, B), "ضرب ممکن نیست: ستون‌های A با سطرهای B برابر نیست.");
}

run(); // اجرای اولیه با مثال
