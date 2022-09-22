/* ILP506 – Turma Manhã(ou Tarde) – Nome: Daniel Scheicher */

import java.util.Scanner;

public class ex4 {
   public static void main (String[] args){
      Scanner ler = new Scanner(System.in);
      System.out.print ("Insira um numero inteiro: ");
      int n = ler.nextInt(), ant=0, post=1, aux;
      
      for (int i=0; i<n; i++) {
         if (ant == 1) {
            System.out.print(ant + ", ");
         }
         System.out.print(ant + ", ");
         aux = ant;
         ant += post;
         post = aux;
      }
      System.out.print("etc...");
   }
}