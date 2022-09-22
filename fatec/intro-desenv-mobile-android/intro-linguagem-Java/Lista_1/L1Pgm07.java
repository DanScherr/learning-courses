import java.util.Scanner;

public class L1Pgm07 {

  public static void main(String[] args) {
    Scanner lerTeclado = new Scanner(System.in);
    int x, ctrlMe, ctrlMa;
    int soma = 0, qtde = 0;
    double media;
    System.out.print("Digite x: ");
    x = lerTeclado.nextInt();
    ctrlMe = x;
    ctrlMa = x;
    while (x > 0) {
      soma = soma + x;
      qtde = qtde + 1;  // poderia ter feito qtde++;
      if (x < ctrlMe)
        ctrlMe = x;
      if (x > ctrlMa)
        ctrlMa = x;
      System.out.print("Digite x: ");
      x = lerTeclado.nextInt();
    }
    lerTeclado.close();
    
    if (qtde > 0) {
      System.out.println("Menor valor = " + ctrlMe);
      System.out.println("Maior valor = " + ctrlMa);
      System.out.println("Soma dos valores = " + soma);
      System.out.println("Qtde de valores = " + qtde);
      media = 1.0 * soma / qtde;
      System.out.println("Media dos valores = " + media);    
    }
    else
      System.out.println("Nao foram fornecidos dados");
    System.out.println("Fim do Programa");
  }
  
}