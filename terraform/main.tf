provider "aws" {
  region = "ap-south-1"
}

# 🔐 Key Pair
resource "aws_key_pair" "booksy_key" {
  key_name   = "booksy-key"
  public_key = file("booksy-key.pub")
}

# 🔥 Security Group (VERY IMPORTANT)
resource "aws_security_group" "booksy_sg" {
  name        = "booksy-security-group"
  description = "Allow SSH, HTTP, Frontend, Backend"

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Frontend React App"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Backend API"
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP (optional)"
    from_port   = 80
    to_port     = 80
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

# 🖥 EC2 Instance
resource "aws_instance" "booksy_server" {
  ami           = "ami-0f58b397bc5c1f2e8"
  instance_type = "t3.micro"
  key_name      = aws_key_pair.booksy_key.key_name
  vpc_security_group_ids = [aws_security_group.booksy_sg.id]

  tags = {
    Name = "Booksy-Server"
  }
}

# 📢 Output public IP after creation
output "public_ip" {
  value = aws_instance.booksy_server.public_ip
}
