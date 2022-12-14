use std::io;

fn fib(n:i32) -> i32 {
  let (mut a, mut b) = (0, 1);

  for _ in 0..n {
    (a, b) = (b, a + b);
  }

  a
}

fn main() {
  println!("Enter nth fib");
  let mut n = String::new();

  io::stdin()
      .read_line(&mut n)
      .expect("Failed to read line.");
  
  let n: i32 = n.trim().parse().expect("Please type a number!");

  if n < 0 {
      println!("Number must be positive");
      return;
  }

  let fib = fib(n);

  println!("f{n} is: {fib}");
}
