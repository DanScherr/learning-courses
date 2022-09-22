import java.util.Scanner;
import java.util.ArrayList;

public class L1Pgm10 {

  public static void main(String[] args) {
    Scanner lerTeclado;
    int n, i;
    float x;
    ArrayList<Float> a = new ArrayList<Float>();
    ArrayList<Float> neg = new ArrayList<Float>();
    ArrayList<Float> pos = new ArrayList<Float>();
    
    lerTeclado = new Scanner(System.in);
    do {
      System.out.print("Digite N: ");
      n = lerTeclado.nextInt();
    } while (n <= 0 || n > 50);
        
    for(i = 0; i < n; i++) {
      x = lerTeclado.nextFloat();
      a.add(x);
    }
    lerTeclado.close();

    System.out.println("Valores digitados");
    for (i = 0; i < n; i++) {
      System.out.print("[" + i + "]: " + a.get(i) + "   ");
      if (a.get(i) >= 0)
        pos.add(a.get(i));
      else
        neg.add(a.get(i));
    }
    
    System.out.println("\n\nValores positivos");
    for (i = 0; i < pos.size(); i++) {
      System.out.print("[" + i + "]: " + pos.get(i) + "   ");
    }
    System.out.println("\n\nValores negativos");
    for (i = 0; i < neg.size(); i++) {
      System.out.print("[" + i + "]: " + neg.get(i) + "   ");
    }
  }
}