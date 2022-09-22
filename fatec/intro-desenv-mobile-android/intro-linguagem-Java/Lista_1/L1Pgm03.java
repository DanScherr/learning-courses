import java.util.Scanner;

public class L1Pgm03 {

  public static void main(String[] args) {
    int a, b, r;
    
    Scanner lerTeclado = new Scanner(System.in); 
    System.out.print("Digite a: ");
    a = lerTeclado.nextInt();
    System.out.print("Digite b: ");
    b = lerTeclado.nextInt();
    lerTeclado.close();
    
//    if (a * b >= 0) {  // opção alternativa ao if abaixo
    if (a >= 0 && b >= 0 || a <= 0 && b <= 0) {
      r = a + b; 
      System.out.println("Soma de " + a + " com " + b + " = " + r);
    }
    else 
      System.out.println("Dados de Entrada sao Invalidos");
  }

}