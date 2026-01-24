provider "aws" {
  region = "ap-south-1"
}

resource "aws_key_pair" "booksy_key" {
  key_name   = "booksy-key"
  public_key = file("booksy-key.pub")  # We will create this key
}

resource "aws_instance" "booksy_server" {
  ami           = "ami-0f58b397bc5c1f2e8"  # Ubuntu 22.04 (Mumbai)
  instance_type = "t3.micro"               # <-- changed from t2.micro
  key_name      = aws_key_pair.booksy_key.key_name

  tags = {
    Name = "Booksy-Server"
  }
}

