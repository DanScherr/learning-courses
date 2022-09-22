/* ILP506 – Turma Manhã(ou Tarde) – Nome: Daniel Scheicher */

import java.util.Scanner;

public class ex1 {
   public static void main (String[] args){
      //Declarando, inicializando e instanciando..
      int n=0, resto, i;
      Scanner ler = new Scanner(System.in);
      
      
      //Laço: pedindo x>1
      do{
         System.out.print("Insira um numero n maior que 1: ");
         n = ler.nextInt();
      }while (n <= 1);
      ler.close();
      
      //Checando se primo..
      for (i = 1; i <= n; i++) {
         resto = n%i;
         if ((resto == 0) && (i != 1) && (i != n)){
            System.out.println(n + " nao eh primo!");
            break;
         } else if (i==n){
            System.out.println(n + " eh primo!");
            break;
         }
      }
   }
}