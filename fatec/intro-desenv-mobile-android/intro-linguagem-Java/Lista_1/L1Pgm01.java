import java.util.Scanner;

public class L1Pgm01 {

  public static void main(String[] args) {
    Scanner lerTeclado;
    int a, b, r;
    lerTeclado = new Scanner(System.in);
    System.out.println("Digite a");
    a = lerTeclado.nextInt();
    System.out.println("Digite b");
    b = lerTeclado.nextInt();
    lerTeclado.close();
    r = a + b;
    System.out.println("Soma de " + a + " com " + b + " = " + r); 
  }

}