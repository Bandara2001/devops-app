provider "aws" {
  region = "ap-south-1"   # Change to your preferred region
}

resource "aws_instance" "booksy_server" {
  ami           = "ami-0c55b159cbfafe1f0"  # Example Ubuntu 22.04 AMI, update as needed
  instance_type = "t2.micro"

  tags = {
    Name = "BooksyServer"
  }

  # Optional: security group for HTTP/HTTPS/SSH
  vpc_security_group_ids = [aws_security_group.booksy_sg.id]
}

resource "aws_security_group" "booksy_sg" {
  name        = "booksy_sg"
  description = "Allow SSH, HTTP, and HTTPS"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
