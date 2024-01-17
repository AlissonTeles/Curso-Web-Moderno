// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

function compareTwoStrings(str1, str2) {
  if (typeof str1 != "string" || typeof str2 != "string") {
    return console.log("Invalid input");
  }

  if (str1.toLowerCase() == str2.toLowerCase()) {
    console.log(true);
  } else {
    console.log(false);
  }
}

compareTwoStrings("abc", "ABC");
compareTwoStrings("hello", "world");
