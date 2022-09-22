import java.util.Scanner;

public class L1Pgm06 {

  public static void main(String[] args) {
    Scanner lerTeclado = new Scanner(System.in);
    int x = 1;
    while (x != 0) {
      System.out.print("Digite X: ");
      x = lerTeclado.nextInt();
      if (x > 0)
        System.out.println(x + " eh positivo");
      else if (x < 0)
        System.out.println(x + " eh negativo");
    }
    lerTeclado.close();
    System.out.println("Fim do Programa");
  }
  
}