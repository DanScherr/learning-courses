public class POO {

  public static void main(String[] arqs) {
    Retangulo r = new Retangulo(10.3, 5.9);
//    Retangulo r = new Retangulo();
//    r.setBase(10.3);
//    r.setAltura(5.9);
    System.out.println("Area do retangulo 10.3 x 5.9 = " + r.calcArea());
    Triangulo t = new Triangulo(10.3, 5.9);
//    t.setBase(10.3);
//    t.setAltura(5.9);
    System.out.println("Area do triangulo 10.3 x 5.9 = " + t.calcArea());
    Circulo c = new Circulo(3.5);
//    c.setRaio(3);
    System.out.println("Area do circulo de raio 3.5 = " + c.calcArea());
   
    System.out.println("Fim do Programa");
  }
  
}