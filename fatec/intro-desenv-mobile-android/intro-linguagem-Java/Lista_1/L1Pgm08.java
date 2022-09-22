import java.util.Scanner;

public class L1Pgm08 {

  public static void main(String[] args) {
    Scanner lerTeclado;
    int min, max, soma = 0, qtde = 0, x;
    
    lerTeclado = new Scanner(System.in);
    System.out.print("Digite o valor Min: ");
    min = lerTeclado.nextInt();
    System.out.print("Digite o valor Max: ");
    max = lerTeclado.nextInt();
    if (min > max) {
      System.out.print("Valor de Min eh maior que Max. Os valores serao invertidos.\n");
      x = min;
      min = max;
      max = x;
    }
    
    System.out.println("A partir de agora digite valores entre [" + min + ", " + max + "] ou 0 para terminar");
    do {
      System.out.print("..novo valor: ");
      x = lerTeclado.nextInt();
      if ((min <= x) && (x <= max)) {
        soma = soma + x;
        qtde++;
      }
      else if (x != 0)
        System.out.println("Valor fora do intervalo [" + min + ", " + max + "] ignorado na totalização");
    
    } while (x != 0);
    
    System.out.println("Soma = " + soma);
    System.out.println("Qtde = " + qtde);
    
    lerTeclado.close();
  }
}