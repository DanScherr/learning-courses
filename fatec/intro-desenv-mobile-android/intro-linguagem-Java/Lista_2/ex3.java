/* ILP506 – Turma Manhã(ou Tarde) – Nome: Daniel Scheicher */

import java.util.Scanner;

public class ex3 {
   public static void main (String[] args){
      int x;
      Scanner ler = new Scanner(System.in);
      
      do {
         System.out.print("Insira um numero de 5 digitos: ");
         x = ler.nextInt();
      } while( (x>99999) && (x<100000) );
      
      metodo8(x);
   }
   
   private static void metodo8 (int n){
      int resto, soma=0, cont=6;
      
      while (cont>=2) {
         resto = n%10;
         n = n/10;
         soma += resto*cont;
         cont--;
      }
      
      soma = soma%7;
      System.out.println("\nO digito verificador eh " + soma);
   }
}