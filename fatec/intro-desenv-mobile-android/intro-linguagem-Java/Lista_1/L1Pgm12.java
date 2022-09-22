import java.util.Scanner;
import java.util.ArrayList;
import java.util.Random;

public class L1Pgm12 {

  public static void main(String[] args) {
    Scanner lerTeclado;
    int n, i, x;
    Random gerador = new Random();
    ArrayList<Integer> v = new ArrayList<Integer>();

    lerTeclado = new Scanner(System.in);
    do {
      System.out.print("Digite N: ");
      n = lerTeclado.nextInt();
    } while (n <= 0 || n > 50); 
    
    for(i = 0; i < n; i++) {
      x = gerador.nextInt(10);
      v.add(x);
    }

    System.out.println("Valores gerados");
    for (i = 0; i < n; i++) {
      System.out.print(v.get(i) + ", ");
    }
    
    System.out.println("\n\nIniciando a pesquisa e remocao de valores");
    System.out.print("Digite um valor: ");
    x = lerTeclado.nextInt();
    while (x != 0) {
      System.out.println("  ...verificando se " + x + " esta no vetor e removendo");
      for (i = 0; i < v.size(); i++) {
        if (v.get(i) == x) {
          v.remove(i);
          i--;
        }
      }
      
      System.out.println("\nElementos do vetor apos a remocao de " + x);
      for (i = 0; i < v.size(); i++) {
        System.out.print(v.get(i) + ", ");
      }
      System.out.println("\nTamanho do vetor apos remocao = " + v.size());
      
      System.out.print("\nDigite um valor: ");
      x = lerTeclado.nextInt();
    } 
    
    lerTeclado.close();
    
    System.out.print("\n\nFim do Programa");
  }
    
}