
public class POO {

  public static void main(String[] arqs) {
    FormaComCantos forma;

//    forma = new FormaComCantos();  //Isso gera erro de compilação

    forma = new Quadrado(4);
    System.out.println("Area do " + forma.nomeForma() + " = " + forma.calcArea());    
    forma = new Retangulo(3, 6);
    System.out.println("Area do " + forma.nomeForma() + " = " + forma.calcArea());
    forma = new Triangulo(3, 6);
    System.out.println("Area do " + forma.nomeForma() + " = " + forma.calcArea());
    forma = new Trapezio(2, 3, 6);
    System.out.println("Area do " + forma.nomeForma() + " = " + forma.calcArea());

    System.out.println("Fim do Programa");
  }
  
}





