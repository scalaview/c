use std::io;
use std::io::pr
use std::fs::File;
fn main() {

    let mut reader = String::new();
    io::stdin().read_line(&mut reader);
    println!("{:?}", reader.trim());
}

fn useSeek() -> io::Result<()> {
    
}