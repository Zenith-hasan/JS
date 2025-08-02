function CreateBiscuit() {}

class CreatePencil {
  constructor(name, company, price, color) {
    this.name = name;
    this.company = company;
    this.price = price;
    this.color = color;
  }
  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);
  }

  erase() {
    document.querySelectorAll("h1").forEach((element) => {
      if (element.style.color === this.color) {
        element.remove(); 
      }
    });
  }
}

let p1 = new CreatePencil("Matador", "EL Matador", 10, "black");
let p2 = new CreatePencil("XYZ", "ABCD LTD.", 35, "blue");
