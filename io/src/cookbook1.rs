
fn main(){
    let a = [0, 1, 2, 3, 4, 5];
    let (b, c, d): (i32, [i32; 4], i32) = a;
    println!("{:?}", c);
}