import java.util.Scanner;
import java.util.ArrayList;

// Solução 9b usando a classe ArrayList

public class L1Pgm09b {

  public static void main(String[] args) {
    Scanner lerTeclado;
    int min, max, soma = 0, qtde = 0, x, i;
//    ArrayList v;
    ArrayList<Integer> v;
    
    lerTeclado = new Scanner(System.in);
    System.out.print("Digite o valor Min: ");
    min = lerTeclado.nextInt();
    System.out.print("Digite o valor Max: ");
    max = lerTeclado.nextInt();
    if (min > max) {
      x = min;
      min = max;
      max = x;
    }
    
//    v = new ArrayList();
    v = new ArrayList<Integer>();
    
    System.out.println("A partir de agora digite valores entre [" + min + ", " + max + "] ou 0 para terminar");
    do {
      System.out.print("..novo valor: ");
      x = lerTeclado.nextInt();
      if ((min <= x) && (x <= max)) {
        v.add(x);
        soma = soma + x;
        qtde++;
      }
      else 
        if (x != 0)
          System.out.println("Valor fora do intervalo [" + min + ", " + max + "] ignorado na totalização");
    
    } while (x != 0);

    System.out.println("Valores digitados");
    for (i = 0; i < v.size(); i++) 
      System.out.print("[" + i + "]: " + v.get(i) + "   ");
    System.out.println("\nSoma = " + soma);
    System.out.println("Qtde = " + qtde);
    
    lerTeclado.close();
  }
}