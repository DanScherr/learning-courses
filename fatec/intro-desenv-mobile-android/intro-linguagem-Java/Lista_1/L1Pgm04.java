import java.util.Scanner;

public class L1Pgm04 {

  public static void main(String[] args) {
    int a, b, c;
    
    Scanner lerTeclado = new Scanner(System.in);
    System.out.print("Digite o tamanho do primeiro lado: ");
    a = lerTeclado.nextInt();
    System.out.print("Digite o tamanho do segundo lado: ");
    b = lerTeclado.nextInt();
    System.out.print("Digite o tamanho do terceiro lado: ");
    c = lerTeclado.nextInt();
    lerTeclado.close();
    
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
      System.out.print("(" + a + "," + b + "," + c + ") formam um triangulo ");
      if ((a == b) && (b == c))
        System.out.println("do tipo Equilatero");
      else if ((a==b) || (a==c) || (b==c))
        System.out.println("do tipo Isoceles");
      else
        System.out.println("do tipo Escaleno");
    }
    else {
      System.out.println("(" + a + "," + b + "," + c + ") nao formam um triangulo ");
    }
  }
  
}