
public class POO {

  public static void main(String[] arqs) {
    Retangulo r = new Retangulo();
    r.setBase(10.3);
    r.setAltura(5.9);
    System.out.println("Area do retangulo 10.3 x 5.9 = " + r.calcArea());

    Triangulo t = new Triangulo();
    t.setBase(10.3);
    t.setAltura(5.9);
    System.out.println("Area do triangulo 10.3 x 5.9 = " + t.calcArea());

    Circulo c = new Circulo();
    c.setRaio(3);
    System.out.println("Area do circulo de raio 3 = " + c.calcArea());

    Retangulo r2 = new Retangulo(10.3, 5.9);
    System.out.println("Area do ret. r2 10.3 x 5.9 = " + r2.calcArea());
    Triangulo t2 = new Triangulo(10.3, 5.9);
    System.out.println("Area do triang. t2 10.3 x 5.9 = " + t2.calcArea());
    

    System.out.println("Fim do Programa");
  }
  
}





