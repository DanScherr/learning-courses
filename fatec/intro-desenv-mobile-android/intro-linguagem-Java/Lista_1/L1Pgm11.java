import java.util.Scanner;
import java.util.ArrayList;
import java.util.Random;

public class L1Pgm11 {

  public static void main(String[] args) {
    Scanner lerTeclado;
    int n, i, x;
    boolean naoTem;
    Random gerador = new Random();
    ArrayList<Integer> v = new ArrayList<Integer>();
    
    lerTeclado = new Scanner(System.in);
    do {
      System.out.print("Digite N: ");
      n = lerTeclado.nextInt();
    } while (n <= 0 || n > 50);
    
    for(i = 0; i < n; i++) {
      x = gerador.nextInt(100);
      v.add(x);
    }

    System.out.println("Valores gerados");
    for (i = 0; i < n; i++) {
      System.out.print(v.get(i) + ", ");
    }
    
    System.out.println("\n\nIniciando a pesquisa de valores");
    System.out.print("Digite um valor: ");
    x = lerTeclado.nextInt();
    while (x != 0) {
      naoTem = true;
      System.out.println("  ...verificando se " + x + " esta no vetor");
      for (i = 0; i < n; i++) {
        if (v.get(i) == x) {
          naoTem = false;
          System.out.println("     " + v.get(i) + " encontrado em " + i);
        }
      }
      if (naoTem)
        System.out.println("     nao encontrado");
      
      System.out.print("Digite um valor: ");
      x = lerTeclado.nextInt();
    } 
    
    lerTeclado.close();
    
    System.out.print("\n\nFim do Programa");
  }
}